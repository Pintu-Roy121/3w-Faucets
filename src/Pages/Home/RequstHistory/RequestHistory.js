import React, { useState } from 'react';
import TableETH from '../TableETH/TableETH';
import TablwTestLink from '../TableTestLink/TablwTestLink';

const RequestHistory = () => {
    const [ETHTransaction, setETHTransaction] = useState(true)
    const [TestLink, setTestLink] = useState(true)

    const EthTransaction = () => {
        setETHTransaction(!ETHTransaction)
        setTestLink(!TestLink)
    }

    const TestLinkTransaction = () => {
        setTestLink(!TestLink)
        setETHTransaction(!ETHTransaction);
    }

    return (
        <div className='md:w-full lg:w-1/2'>
            <h1 className='font-bold'>Request History</h1>
            <div className='mt-5 flex gap-2'>
                <button onClick={EthTransaction} className='px-4 py-2 text-sm md:text-base text-center rounded-md bg-primary text-white cursor-pointer' >ETH Transaction History</button>
                <button onClick={TestLinkTransaction} className='px-4 py-2 text-sm md:text-base text-center rounded-md bg-gray-100 cursor-pointer'>TestLink Transaction History</button>
            </div>
            <div>
                {
                    ETHTransaction || TestLink ?
                        <TableETH></TableETH>
                        :
                        <TablwTestLink></TablwTestLink>
                }
                {/* <TablwTestLink></TablwTestLink> */}
            </div>
        </div>
    );
};

export default RequestHistory;