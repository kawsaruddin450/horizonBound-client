import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SendFeedback = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const token = localStorage.getItem('access-token');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id]);

    const sendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.feedback.value;
        console.log(message);

        const feedback = {
            courseId: course._id,
            instructor_email: course.instructor_email,
            message: message
        }

        fetch(`http://localhost:5000/feedbacks/`, {
            method: "POST",
            headers: {
                authorization: `bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Sent!",
                        text: "The feedback sent successfully.",
                        icon: "success"
                    });
                    form.reset();
                    navigate('/dashboard/managecourses/');
                }
            })
    }

    return (
        <div className="w-full">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Feedback regarding: {course?.name}</h1>
                        <div className="my-4 text-lg font-medium">
                            <p>Course Id: {course?._id}</p>
                            <p>Course Status: <span className={`${course.status === 'approved' ? 'text-success' : course?.status === 'denied' ? 'text-error' : 'text-slate-950'}`}>{course?.status}</span></p>
                            <p>Instructor: {course?.instructor}</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={sendFeedback} className="card-body">
                            <div className="form-control">
                                <textarea rows={5} name="feedback" type="text" placeholder="Your Feedback" className="textarea textarea-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Send Now" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendFeedback;