import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const CheckoutForm = ({ price }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const token = localStorage.getItem('access-token');
    console.log({ price });

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${token}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json())
            .then(data => {
                console.log(data.clientSecret);
                setClientSecret(data.clientSecret);
            })
    }, [price, token]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "unknown",
                    email: user?.email || "annonymus",
                }
            }
        });
        if (confirmError) {
            setCardError(confirmError);
        }
        console.log(paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            const trxId = paymentIntent.id;
            setTransactionId(trxId);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-2/3 mx-auto text-center">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary mt-5" type="submit" disabled={!stripe}>
                Pay
            </button>
            { cardError && <p className="text-error">{cardError}</p>}
            {transactionId && <p className="text-success my-12 font-medium">Transaction Successful, TrxId: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;