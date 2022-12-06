import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaWallet } from "react-icons/fa";
import { FcCollect } from "react-icons/fc";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-4xl text-purple-700 font-bold">Faucets</Link>
            </div>
            <div className="flex gap-0 md:gap-2">
                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="px-4 py-2 flex items-center gap-2 rounded-md text-gray-500 cursor-pointer font-semibold border-gray-400 border">
                            <FcCollect className='text-lg' />
                            <span className='hidden md:block'>Ethereum Kovan</span>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 2</Link></li>
                        </ul>
                    </div>

                    <label htmlFor="wallet-modal">
                        <p className='flex gap-2 justify-center items-center px-4 py-2 rounded-md text-purple-700 cursor-pointer font-semibold border-purple-700 border-0 md:border-2'>
                            <FaWallet className='text-2xl md:text-xl' />
                            <span className='hidden md:block'>Connect Wallet</span>
                        </p>
                    </label>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <FaRegUserCircle className='text-3xl text-gray-500' />
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 text-gray-900 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to='/login' className='font-semibold text-gray-500 text-base'>Log In</Link></li>
                        <li><Link to='/signup' className='font-semibold text-gray-500 text-base'>Sign Up</Link></li>
                        <li><Link className='font-semibold text-gray-500 text-base'>FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;