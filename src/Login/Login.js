import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true)

    const handlwShow = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className="w-11/12 lg:w-1/2 py-4 my-8 mx-auto rounded-md bg-base-100">
            <h1 className='text-4xl font-bold text-center mt-5'>Login</h1>
            <form className="hero-content w-full">
                <div className="card-body p-4 pb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                        <div onClick={handlwShow}>
                            {
                                showPassword ?
                                    <FaEyeSlash className='text-2xl cursor-pointer absolute top-12 right-4' />
                                    :
                                    <FaEye className='text-2xl cursor-pointer absolute top-12 right-4' />
                            }
                        </div>
                    </div>
                    <p className='flex gap-2 justify-center items-center p-2 mt-4 text-lg rounded-md text-white cursor-pointer font-semibold bg-purple-700 border-0 md:border-2'>
                        Login
                    </p>
                </div>
            </form>
            <p className='text-center text-black font-semibold'>Do Not Have an Account? <Link to='/signup'><span className='text-purple-700'>Signup</span></Link>
            </p>
            <div className="divider font-semibold">OR</div>
            <div className='flex text-xl mb-8 justify-center gap-4'>
                <FaGoogle />
                <FaFacebook />
                <FaInstagram />
            </div>
        </div>
    );
};

export default Login;