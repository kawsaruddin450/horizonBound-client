import { Helmet } from "react-helmet-async";
import useCourses from "../../../hooks/useCourses";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { GoComment } from "react-icons/go";
import Swal from "sweetalert2";

const ManageCourses = () => {
    const [courses, refetch] = useCourses();
    const token = localStorage.getItem('access-token');

    const handleStatus = (id, status) => {
        fetch(`http://localhost:5000/courses/status/${id}?status=${status}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: `${status}!`,
                        text: `This course is ${status}.`,
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    return (
        <div className="w-full m-12">
            <Helmet>
                <title>Manage Courses - Camp HorizonBound</title>
            </Helmet>
            <div className="flex items-center justify-evenly text-2xl font-semibold">
                <h2>Total Users: {courses?.length}</h2>
                <h2>Your Role: Admin</h2>
            </div>
            <div className="overflow-x-auto m-12">
                <table className="table">
                    {/* head */}
                    <thead className="bg-blue-500 text-white font-semibold">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses?.map((course, index) => <tr
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
                                    {course.instructor}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{course.instructor_email}</span>
                                </td>
                                <td>
                                    ${course.price}
                                </td>
                                <td className={`${course.status === 'approved' ? 'text-success' :
                                        course.status === 'denied' ? 'text-error' : 'text-base-content'}`}
                                >
                                    {course.status}
                                </td>
                                <th className="text-center flex flex-row items-center gap-1">
                                    <button
                                        disabled={course?.status === "approved" || course?.status === "denied"}
                                        onClick={() => handleStatus(course._id, "approved")}
                                        className="btn btn-square btn-success btn-xs text-xl"
                                    ><FaCheck></FaCheck></button>

                                    <button
                                        disabled={course?.status === "approved" || course?.status === "denied"}
                                        onClick={() => handleStatus(course._id, "denied")}
                                        className="btn btn-square btn-error btn-xs text-xl"
                                    ><TiDeleteOutline></TiDeleteOutline></button>

                                    <button className="btn btn-square btn-primary btn-xs text-xl"><GoComment></GoComment></button>
                                </th>
                                <td>
                                    <button className="btn btn-sm text-sm text-white btn-error"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCourses;