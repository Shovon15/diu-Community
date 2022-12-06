import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Login = () => {
    // const [passwordShown, setPasswordShown] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    let userRole = "student";
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogIn = (data) => {
        console.log(data);
        setLoginError("");
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        // console.log(data);
        setLoginError(""); //for previous error reset
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email, userRole, user.photoURL);
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const saveUser = (name, email, userRole, image) => {
        const users = { name, email, userRole, image };

        fetch("https://diu-community-server.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                navigate(from, { replace: true });
                // console.log("userSaveDb", data);
                // getUserToken(email);
                // if (data.acknowledged) {
                //     setTreatment(null);
                //     toast.success("Booking confirmed");
                //     refetch();
                // } else {
                //     toast.error(data.message);
                // }
            });
    };
    // -------------------show pass-----------
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-96 p-7 bg-slate-300 dark:bg-slate-600 rounded-xl">
                <h2 className="text-2xl text-center font-bold text-blue-500">Login</h2>

                <form onSubmit={handleSubmit(handleLogIn)}>
                    <div className="form-control w-full max-w-xs dark:text-slate-800">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "email is required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs dark:text-slate-800">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={passwordShown ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                        message: "Password must have uppercase, number and special characters",
                                    },
                                })}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <span onClick={togglePassword} className="cursor-pointer">
                                    {passwordShown === true ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <input
                        className="btn bg-orange-500 hover:bg-orange-700 border-none w-full mt-4"
                        value="Login"
                        type="submit"
                    />
                    {loginError && <p className="text-red-600">{loginError}</p>}
                </form>
                <p className="p-4">
                    New in DIU Community
                    <Link className="text-primary px-2 hover:underline" to="/signup">
                        Please SignUp
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;
