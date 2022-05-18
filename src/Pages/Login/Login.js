import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    let signInError;

    if (loading || gLoading) {
        return <Loading/>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'>
            <small>{error?.message || gError?.message}</small>
        </p>
    }

    if(user || gUser){
        navigate(from, { replace: true });
    }


    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                }
                            )}
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                }
                            )}
                                type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">
                                    {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full bg-purple-300 max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-purple-700' to='/signup'>Create New Account</Link> </small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;