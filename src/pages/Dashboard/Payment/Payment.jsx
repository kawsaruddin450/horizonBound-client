import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelected from "../../../hooks/useSelected";


const stripePromise = loadStripe(import.meta.env.VITE_paymentPublishableKey);
const Payment = () => {
    const [selectedCourses] = useSelected();
    const total = selectedCourses.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = parseFloat(total.toFixed(2));

    return (
        <div className="w-full mx-12">
            <h1 className="text-center font-semibold text-3xl my-12">Total Amount to Pay: ${total}</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={totalPrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;