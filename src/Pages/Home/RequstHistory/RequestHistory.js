import React, { useState } from 'react';
import TableETH from '../TableETH/TableETH';
import TablwTestLink from '../TableTestLink/TablwTestLink';

const RequestHistory = () => {
    const [eth, setEth] = useState('bg-primary');
    const [test, setTest] = useState('bg-gray-200 text-black');

    const handleEth = () => {
        setEth('bg-primary');
        setTest('bg-gray-200 text-black')
    }

    const handleTest = () => {
        setTest('bg-primary');
        setEth('bg-gray-200 text-black')
    }

    return (
        <div className='w-full lg:w-1/2'>
            <h1 className='font-bold my-3'>Request History</h1>
            <div className='flex gap-2'>
                <button
                    onClick={handleEth}
                    className={`px-4 py-2 text-sm md:text-base text-center ${eth} rounded-md text-white cursor-pointer`}>
                    ETH Transaction History
                </button>
                <button
                    onClick={handleTest}
                    className={`px-4 py-2 text-sm md:text-base text-center ${test} rounded-md text-white cursor-pointer`}>
                    TestLink Transaction History
                </button>
            </div>
            <div>
                {
                    eth === 'bg-primary' ? <>
                        <TableETH></TableETH>
                    </>
                        :
                        <TablwTestLink></TablwTestLink>
                }
            </div>
        </div>
    );
};

export default RequestHistory;