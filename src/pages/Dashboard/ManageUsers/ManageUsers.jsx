import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const token = localStorage.getItem('access-token')

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "This user is admin now.",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }
    const handleMakeInstructor = (id) => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "This user is instructor now.",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }
    return (
        <div className="w-full m-12">
            <Helmet>
                <title>Manage Users - Camp HorizonBound</title>
            </Helmet>
            <div className="flex items-center justify-evenly text-2xl font-semibold">
                <h2>Total Users: {users?.length}</h2>
                <h2>Your Role: Admin</h2>
            </div>
            <div className="overflow-x-auto m-12">
                <table className="table">
                    {/* head */}
                    <thead className="bg-blue-500 text-white font-semibold">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-full h-14 w-14">
                                                <img
                                                    src={user.image}
                                                    alt="User Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td className="space-y-3 text-center items-center">
                                    <button onClick={()=> handleMakeInstructor(user._id)} disabled={user?.role === 'instructor'} className="block btn btn-xs text-white btn-accent mx-auto">Make Instructor</button>
                                    <button disabled={user?.role === 'admin'} onClick={()=> handleMakeAdmin(user._id)} className="block btn btn-xs text-white btn-warning mx-auto">Make Admin</button>
                                </td>
                                <th>
                                    <button className="btn btn-sm text-md btn-error text-white"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;