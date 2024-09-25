import { useEffect, useState } from "react";


const FeedbackCard = ({ feedback }) => {
    const { courseId } = feedback;

    const [course, setCourse] = useState();
    useEffect(()=> {
        fetch(`http://localhost:5000/courses/${courseId}`)
        .then(res => res.json())
        .then(data => setCourse(data));
    },[courseId])

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Feedback on: <span className="font-bold">{course?.name}</span></h2>
                <p className="my-5">{feedback?.message}</p>
                <h3>Status: <span className={`font-semibold ${course?.status === "approved"? 'text-success' : course?.status === "denied" ? 'text-error' : 'text-neutral'}`}>{course?.status}</span></h3>
            </div>
        </div>
    );
};

export default FeedbackCard;