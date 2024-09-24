import { useContext } from "react";
import useCourses from "../../../hooks/useCourses";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCourses = () => {
    const token = localStorage.getItem('access-token');
    const { user } = useContext(AuthContext);
    const [courses,refetch] = useCourses();
    const myCourses = courses.filter(course => course.instructor_email === user.email);

    const deleteCourse = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/courses/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This course have been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className="w-full m-12">
            <Helmet>
                <title>My Courses - Camp HorizonBound</title>
            </Helmet>
            <div className="flex items-center justify-evenly text-2xl font-semibold">
                <h2>Total Courses: {myCourses?.length}</h2>
            </div>
            <div className="overflow-x-auto m-12">
                <table className="table">
                    {/* head */}
                    <thead className="bg-blue-500 text-white font-semibold">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Students/Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCourses?.map((course, index) => <tr
                                key={course._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-xl h-24 w-24">
                                                <img
                                                    src={course.image}
                                                    alt="User Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                            <div className="text-sm opacity-50">Available Seats: {course.available_seats}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Available Seats: {course.available_seats}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Students: {course.students}</span>
                                </td>
                                <td>
                                    ${course.price}
                                </td>
                                <td className={`${course.status === 'approved' ? 'text-success' :
                                        course.status === 'denied' ? 'text-error' : 'text-base-content'}`}>
                                    {course.status}
                                </td>
                                <th className="space-x-2 space-y-2 items-center text-center">
                                    <button className="btn btn-square btn-accent btn-sm text-md text-white"><FaEdit></FaEdit></button>
                                    <button onClick={()=> deleteCourse(course._id)} className="btn btn-square btn-error btn-sm text-md text-white"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourses;