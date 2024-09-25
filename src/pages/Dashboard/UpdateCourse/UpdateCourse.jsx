import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCourse = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id])

    const handleUpdateCourse = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const availableSeats = form.seats.value;
        const description = form.description.value;
        const status = "pending";

        const updated = {
            name,
            image,
            price,
            description,
            status,
            available_seats: availableSeats,
        }
        console.log(updated);

        // fetch(`http://localhost:5000/courses`, {
        //     method: "POST",
        //     headers: {
        //         authorization: `bearer ${token}`,
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(course)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Congratulations!",
        //                 text: "This course have been added successfully.",
        //                 icon: "success"
        //             });
        //             form.reset();
        //         }
        //         else {
        //             Swal.fire({
        //                 title: "Sorry!",
        //                 text: "Something went wrong, please try again later.",
        //                 icon: "error"
        //             });
        //         }
        //     })
    }

    return (
        <div className="w-full mx-auto">
            <div className="hero bg-base-200 min-h-screen py-12">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Update: {course?.name}</h1>
                    </div>
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <form onSubmit={handleUpdateCourse} className="card-body">
                            {/* Course Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Course Title</span>
                                </label>
                                <input type="text" defaultValue={course?.name} name="name" className="input input-bordered" required />
                            </div>
                            {/* Course Image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" defaultValue={course?.image} name="image" className="input input-bordered" required />
                            </div>
                            {/* Category and Price */}
                            <div className="form-control flex sm:flex-row gap-5">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="Category" defaultValue={course?.category} name="category" className="input input-bordered" readOnly required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" defaultValue={course?.price} className="input input-bordered" required />
                                </div>
                            </div>
                            {/* Available Seats */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number" placeholder="Available Seats" name="seats" defaultValue={course?.available_seats} className="input input-bordered" required />
                            </div>
                            {/* Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder="Description" name="description" defaultValue={course?.description} className="textarea textarea-bordered" rows="3" required></textarea>
                            </div>
                            {/* Course Instructor */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor</span>
                                </label>
                                <input type="text" placeholder="Instructor" name="instructor" defaultValue={course?.instructor} className="input input-bordered" readOnly required />
                            </div>
                            {/* Instructor Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" placeholder="Instructor email" name="email" defaultValue={course?.instructor_email} className="input input-bordered" readOnly required  />
                            </div>
                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-sky-500 hover:bg-sky-400 text-white" value="Update Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourse;