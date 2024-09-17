import { FaRegTrashAlt } from "react-icons/fa";
import useSelected from "../../../hooks/useSelected";


const MySelection = () => {
    const [selectedCourses,] = useSelected();
    const total = selectedCourses.reduce((sum, item) => item.price + sum, 0);
    return (
        <div className="w-full mx-auto my-12">
            <div className="flex items-center justify-evenly text-2xl font-semibold">
                <h2>Selected Courses: {selectedCourses.length}</h2>
                <h2>Total Price: ${total}</h2>
                <button className="btn btn-primary text-white">Enroll Now</button>
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
                                    <button className="btn btn-md text-md bg-red-600 text-white rounded-full"><FaRegTrashAlt></FaRegTrashAlt></button>
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