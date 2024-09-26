import { FaRegTrashAlt } from "react-icons/fa";
import useSelected from "../../../hooks/useSelected";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const MySelection = () => {
    const [selectedCourses, refetch] = useSelected();
    const total = selectedCourses.reduce((sum, item) => item.price + sum, 0);
    const token = localStorage.getItem('access-token');

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/selected/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "User created successfully.",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    return (
        <div className="w-full mx-auto my-12">
            <Helmet>
                <title>My Selections - Camp HorizonBound</title>
            </Helmet>
            <div className="flex items-center justify-evenly text-2xl font-semibold">
                <h2>Selected Courses: {selectedCourses.length}</h2>
                <h2>Total Price: ${total}</h2>
                <Link to='/dashboard/pay' className="btn btn-primary text-white">Enroll Now</Link>
            </div>
            <div className="overflow-x-auto m-12">
                <table className="table">
                    {/* head */}
                    <thead className="bg-blue-500 text-white font-semibold text-md">
                        <tr>
                            <th></th>
                            <th>Course</th>
                            <th>Available Seats</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCourses.map((course, index) => <tr
                                key={course._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-xl h-24 w-24">
                                                <img
                                                    src={course.image}
                                                    alt="Course Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                            <div className="text-sm opacity-50">{course.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-medium">{course.available_seats}</span>
                                </td>
                                <td>
                                    {course.instructor}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{course.instructor_email}</span>
                                </td>
                                <td>${course.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(course._id)} className="btn btn-md text-md bg-red-600 text-white rounded-full"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelection;