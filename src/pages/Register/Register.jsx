import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="your name" name='name' className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input {...register("image", { required: true })} type="text" placeholder="image url" name='image' className="input input-bordered" />
                            {errors.image && <span className='text-red-600'>This field is required.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" name='email' className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>This field is required.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 8,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" name='password' className="input input-bordered" />
                            {/* Error Handling */}
                            {errors.password?.type === "required" && <span className='text-red-600'>This field is required</span>}
                            {errors.password?.type === "maxLength" && <span className='text-red-600'>Password can be 20 characters long at most</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600'>Password must be 8 characters long at least</span>}
                            {errors.password?.type === "pattern" && <span className='text-red-600'>Password must contain one capital letter, one small letter, a number and a special character.</span>}
                            <label className="label"> Already have an account?
                                <Link to='/login' className="label-text-alt link link-hover">Login Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type='submit' value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;