import React from 'react';
import meta from '../../assets/Meta.png';
import social from '../../assets/social.png'

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="wallet-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="wallet-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">Connect Your Wallet</h3>
                    <div className='flex flex-col md:flex-row gap-4 mt-4 justify-between'>
                        <div className='object-cover flex flex-col items-center justify-center text-center p-4 w-full md:w-1/2 rounded-lg bg-slate-100'>
                            <img className='w-1/4 md:w-1/2' src={meta} alt="" />
                            <p className='text-xl text-purple-700 font-bold'>MetaMask</p>
                        </div>
                        <div className='object-cover flex flex-col items-center justify-center text-center p-4 w-full md:w-1/2 rounded-lg bg-slate-100'>
                            <img className='w-1/4 md:w-1/2' src={social} alt="" />
                            <p className='text-xl text-purple-700 font-bold'>WalletConnect</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;