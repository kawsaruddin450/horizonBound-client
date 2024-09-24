import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelected from '../../../hooks/useSelected';

const CourseCard = ({ course }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, description, instructor, price, available_seats, image, category, instructor_email } = course;
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCourses, refetch] = useSelected();
    let isSelected = false;

    if(user){
        const matched = selectedCourses.find(item => item.courseId === course._id);
        if(matched){
            isSelected = true;
        }
    }

    const handleSelect = () => {
        const selectedItem = { courseId: _id, name, instructor, price, available_seats, image, category, email: user?.email, instructor_email };

        if (user) {
            fetch(`http://localhost:5000/select`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Congratulations!",
                            text: "This course have been selected successfully.",
                            icon: "success"
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Sorry!",
                text: "You have to login first.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Course Thumbnail" />
                <span className='absolute top-5 right-5 text-secondary font-semibold bg-white px-6 py-2 rounded-3xl'>${price}</span>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl mt-5'>Instructor: <span className='font-bold'>{instructor}</span></h3>
                <h3 className='text-xl'>Available Seats: {available_seats}</h3>
                <div className="card-actions justify-start mt-5">
                    {
                        isSelected 
                        ? <button onClick={handleSelect} className="btn btn-primary rounded-3xl">Enroll Now</button>
                        : <button onClick={handleSelect} className="btn btn-secondary rounded-3xl">Select Now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseCard;