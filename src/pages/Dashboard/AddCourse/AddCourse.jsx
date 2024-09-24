import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const handleAddCourse = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const availableSeats = form.seats.value;
        const description = form.description.value;
        const instructor = form.instructor.value;
        const instructorEmail = form.email.value;
        const status = "pending";
        const students = 0;

        const course = {
            name,
            image,
            category,
            price,
            description,
            status,
            students,
            instructor,
            instructor_email: instructorEmail,
            available_seats: availableSeats,
        }
        console.log(course);

        fetch(`http://localhost:5000/courses`, {
            method: "POST",
            headers: {
                authorization: `bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "This course have been added successfully.",
                        icon: "success"
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        title: "Sorry!",
                        text: "Something went wrong, please try again later.",
                        icon: "error"
                    });
                }
            })
    }

    return (
        <div className="w-full mx-auto">
            <div className="hero bg-base-200 min-h-screen py-12">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Add a Course</h1>
                    </div>
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <form onSubmit={handleAddCourse} className="card-body">
                            {/* Course Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Course Title</span>
                                </label>
                                <input type="text" placeholder="Course Title" name="name" className="input input-bordered" required />
                            </div>
                            {/* Course Image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="image" className="input input-bordered" required />
                            </div>
                            {/* Category and Price */}
                            <div className="form-control flex sm:flex-row gap-5">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select className="select w-full max-w-xs bordered" name="category">
                                        <option disabled selected>Pick your category</option>
                                        <option value='hiking'>Hiking</option>
                                        <option value='kayaking'>Kayaking</option>
                                        <option value='orienteering'>Orienteering</option>
                                        <option value='camping'>Camping</option>
                                        <option value='cycling'>Cycling</option>
                                        <option value='water_sports'>Water Sports</option>
                                        <option value='nature_exploration'>Nature Exploration</option>
                                        <option value='survival_skills'>Survival Skills</option>
                                        <option value='rock_climbing'>Rock Climbing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* Available Seats */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number" placeholder="Available Seats" name="seats" className="input input-bordered" required />
                            </div>
                            {/* Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder="Description" name="description" className="textarea textarea-bordered" rows="3" required></textarea>
                            </div>
                            {/* Course Instructor */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor</span>
                                </label>
                                <input type="text" placeholder="Instructor" name="instructor" value={user?.displayName} className="input input-bordered" required readOnly />
                            </div>
                            {/* Instructor Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" placeholder="Instructor email" name="email" value={user?.email} className="input input-bordered" required readOnly />
                            </div>
                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-sky-500 hover:bg-sky-400" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;