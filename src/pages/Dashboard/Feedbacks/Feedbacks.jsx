import { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../../providers/AuthProvider';
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/feedbacks?email=${user.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    },[user.email, token]);

    return (
        <div className="mx-12 my-12">
            <h1 className="text-3xl font-semibold">Total Feedbacks: {feedbacks.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    feedbacks?.map(feedback => <FeedbackCard
                    key={feedback._id}
                    feedback={feedback}
                    ></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedbacks;