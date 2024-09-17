import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Congratulations!",
                    text: "Logged in successfully.",
                    icon: "success"
                });
                form.reset();
            })
            .catch(() => {
                Swal.fire({
                    title: "Oppss!",
                    text: "An error occured, please try again later.",
                    icon: "error"
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label"> New Here?
                                <Link to='/register' className="label-text-alt link link-hover">create an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type='submit' value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;