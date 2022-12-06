import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handlwShowss = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="w-11/12 lg:w-1/2 py-4 my-8 mx-auto rounded-md bg-base-200">
            <h1 className='text-4xl font-bold text-center mt-5'>Signup</h1>
            <form className="hero-content w-full">
                <div className="card-body p-4">
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
                        <div onClick={handlwShowss}>
                            {
                                showPassword ?
                                    <FaEyeSlash className='text-2xl cursor-pointer absolute top-12 right-4' />
                                    :
                                    <FaEye className='text-2xl cursor-pointer absolute top-12 right-4' />
                            }
                        </div>
                    </div>
                    <p className='flex gap-2 justify-center items-center p-2 mt-4 text-lg rounded-md text-white cursor-pointer font-semibold bg-purple-700 border-0 md:border-2'>
                        Sign Up
                    </p>
                </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50 text-center p-5">
                <p className='text-center font-semibold'>Do Not Have an Account? <Link to='/login'><span className='text-purple-700'>Login</span></Link>
                </p>
                <div className="divider font-semibold">OR</div>
                <div className='flex text-2xl justify-center gap-4'>
                    <FaFacebook />
                    <FaGoogle />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
};

export default Signup;