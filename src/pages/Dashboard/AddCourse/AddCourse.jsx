import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AddCourse = () => {
    const {user} = useContext(AuthContext);

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

        const course = {
            name,
            image,
            category,
            price,
            description,
            status,
            instructor,
            instructor_email: instructorEmail,
            available_seats: availableSeats,
        }
        console.log(course);
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
                                <input type="text" placeholder="Instructor" name="instructor" value={user?.displayName} className="input input-bordered" required readOnly/>
                            </div>
                            {/* Instructor Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" placeholder="Instructor email" name="email" value={user?.email} className="input input-bordered" required readOnly/>
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