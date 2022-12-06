import React from 'react';
import { HiExclamationTriangle } from "react-icons/hi2";
import ReCAPTCHA from 'react-google-recaptcha'
import RequestHistory from '../RequstHistory/RequestHistory';

const Wallet = () => {
    const key = "6Ldi2VwjAAAAADiHMZV8tThrtcWR6ie0IBt_JcOg"

    // function onChange(value) {
    //     console.log('Captcha value:', value);
    // }

    return (
        <div className='bg-white m-8 p-6'>
            <div className='bg-sky-50 p-2 flex gap-2 items-center'>
                <HiExclamationTriangle className='text-2xl text-purple-700' />
                <h1>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</h1>
            </div>
            <div className='w-full md:w-1/2'>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-bold text-purple-700">Wallet Address</span>
                    </label>
                    <input type="text" placeholder="Wallet Address..." className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-bold text-purple-700">Request Type</span>
                    </label>
                    <div className='flex items-center gap-4 text-black'>
                        <input type="text" defaultValue={"20 Test Link"} className="input text-black input-bordered w-full" readOnly />
                        <input type="text" defaultValue={"0.5 ETH"} className="input text-black input-bordered w-full" readOnly />
                    </div>
                </div>
                <ReCAPTCHA
                    className='my-4'
                    sitekey={key}
                // onChange={onChange}
                />
                <button className='px-4 py-2 text-center rounded-md bg-purple-700 text-white cursor-pointer font-semibold'>Send Request</button>
            </div>
            <div className='mt-8'>
                <RequestHistory></RequestHistory>

            </div>
        </div>
    );
};

export default Wallet;