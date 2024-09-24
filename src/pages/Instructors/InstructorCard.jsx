import { useEffect, useState } from "react";
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';


const InstructorCard = ({instructor}) => {
    const {name, email, image} = instructor;
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/coursesby?email=${email}`)
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="basis-1/2">
                <img
                    src={image}
                    className="h-full"
                    alt="Instructor Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl mb-5 text-pink-600">{name}</h2>
                <h3 className="text-xl font-semibold">My Courses: </h3>
                <ol>
                    {
                        courses.map(course => <li
                        key={course._id}
                        className="font-bold mt-3"
                        >--- {course.name}</li>)
                    }
                </ol>
                <div className="card-actions justify-start mt-8">
                    <PrimaryBtn className="btn btn-primary">Show All Classes</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;