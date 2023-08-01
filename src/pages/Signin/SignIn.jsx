import React, { useContext, useState } from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { useForm } from "react-hook-form";
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const [error, setError] = useState('');

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        setError('');
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile({
                    displayName: data.name,
                    photoURL: data.photo
                })
                    .then(() => {
                        const savedUser = {
                            name: data.name,
                            email: data.email
                        }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Sign up Successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                const savedUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sign up Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    return (
        <div className='text-center'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                        <div>
                            <Player
                                autoplay
                                loop
                                src="https://assets7.lottiefiles.com/packages/lf20_2jczmi5y.json"
                                className='w-full'
                            >
                                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>

                        <div>

                            <div className='text-3xl text-center font-bold mb-10'><h2>Please Sign up</h2></div>


                            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-rose-900 ">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Enter your Name..."
                                            {...register("name", { required: true })}
                                            className="input input-bordered" />
                                        {errors.name && <span className='text-red-600 font-bold text-lg mt-2'>Name field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" placeholder="Enter your Email..."
                                            {...register("email", { required: true })}
                                            className="input input-bordered" />
                                        {errors.email && <span className='text-red-600 font-bold text-lg mt-2'>Email field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Photo url</span>
                                        </label>
                                        <input type="text" placeholder="Enter your photo url..."
                                            {...register("photo")}
                                            className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="*********"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                            })}
                                            className="input input-bordered" />
                                        {errors.password?.type === 'required' && <span className='text-red-600 font-bold text-lg mt-2'>Password is required</span>}

                                        {errors.password?.type === 'minLength' && <span className='text-red-600 font-bold text-lg mt-2'>Password must have 6 characters</span>}

                                        {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold text-lg mt-2'>Password must have one uppercase, one number, one spacial character. </p>
                                        }

                                        <p className='text-red-600 font-bold text-lg mt-2'>
                                            {/* {error} */}
                                        </p>
                                    </div>

                                    <p className=' mt-4 text-white text-lg'>
                                        Already have an account? <Link to='/login' className='hover:text-black'>Please Login</Link>
                                    </p>

                                    <div className="form-control mt-6">
                                        <input className="btn bg-slate-300 hover:text-black border-b-4 border-0 border-black text-lg font-semibold" type="submit" value="Sign Up" />
                                    </div>

                                    <div className='flex items-center gap-5 px-5 mt-5'>
                                        <div className='h-[1px] bg-slate-400 w-[50px]'></div>

                                        <p className=' text-center text-white'> Login with social accounts</p>

                                        <div className='h-[1px] bg-slate-400 w-[50px]'></div>
                                    </div>

                                    <button onClick={handleGoogle} className="mx-auto my-5 btn bg-slate-300 hover:text-black border-b-4 border-0 border-black  text-lg font-semibold w-full"><FcGoogle className='text-xl' /> Sign Up With Google</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;