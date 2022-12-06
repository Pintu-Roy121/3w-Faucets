import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaRegUserCircle, FaWallet } from "react-icons/fa";
import Arbitrum from '../../assets/logo.svg'
import Avalanche from '../../assets/avalanche-avax-logo.svg'
import ethereum from '../../assets/ethicon.webp'
import BNB from '../../assets/bsclogo.webp'
import Harmony from '../../assets/harmony-one-logo.png'
import Polygon from '../../assets/pstweatifgo8tmub5atc.png'

const data = [
    {
        "id": "01",
        "img": Arbitrum,
        "name": 'Arbitrum Rinkeby'
    },
    {
        "id": "02",
        "img": ethereum,
        "name": 'Ethereum Kovan'
    },
    {
        "id": "03",
        "img": Avalanche,
        "name": 'Avalanche Fuji'
    },
    {
        "id": "04",
        "img": BNB,
        "name": 'BNB Chain Testnet'
    },
    {
        "id": "05",
        "img": Harmony,
        "name": 'Harmony Testnet'
    },
    {
        "id": "06",
        "img": Polygon,
        "name": 'Polygon Mumbai'
    },
]


const Navbar = () => {
    const [wallet, setWallet] = useState('')

    const handleWallet = (element) => {
        setWallet(element);
    }

    return (
        <div className="navbar bg-base-100 px-8 py-4">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-3xl text-purple-700 font-bold">Faucets</Link>
            </div>
            <div className="flex gap-0 md:gap-2">
                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="px-5 py-2 flex items-center gap-2 rounded-md text-gray-500 cursor-pointer font-semibold border-gray-400 border">
                            {
                                wallet ?
                                    <>
                                        <img className='w-4' src={wallet.img} alt="" />
                                        <span className='hidden md:block'>{wallet.name}</span>
                                        <FaAngleDown />
                                    </>
                                    :
                                    <>
                                        <img className='w-4' src={ethereum} alt="" />
                                        <span className='hidden md:block'>Ethereum Kovan</span>
                                        <FaAngleDown />
                                    </>
                            }
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-md w-52">
                            {
                                data.map(element => <li key={element.id}>
                                    <Link onClick={() => handleWallet(element)} className='flex items-center text-gray-500'>
                                        <img className='w-4' src={element.img} alt="" />
                                        <span>{element.name}</span>
                                    </Link>
                                </li>)
                            }
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
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-gray-100">
                        <FaRegUserCircle className='text-2xl text-gray-500' />
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 text-gray-900 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to='/login' className='font-semibold text-gray-500 text-base'>Log In</Link></li>
                        <li><Link to='/signup' className='font-semibold text-gray-500 text-base'>Sign Up</Link></li>
                        <li><Link to='/faq' className='font-semibold text-gray-500 text-base'>FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;