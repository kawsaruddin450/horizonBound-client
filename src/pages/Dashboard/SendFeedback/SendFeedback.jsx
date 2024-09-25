import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SendFeedback = () => {
    const {id} = useParams();
    const [course, setCourse] = useState({});

    useEffect(()=> {
        fetch(`http://localhost:5000/courses/${id}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    },[id]);

    return (
        <div>
            <h2>Feedback Page {course?.name}</h2>
        </div>
    );
};

export default SendFeedback;