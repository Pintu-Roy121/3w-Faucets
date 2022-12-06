import React from 'react';

const TablwTestLink = () => {
    return (
        <div className="mt-5 md:w-full">
            <table className="w-full border">
                <thead className='border'>
                    <tr className='border'>
                        <th className='border p-2'>Sr</th>
                        <th className='border p-2'>Time</th>
                        <th className='border p-2'>Amount</th>
                        <th className='border p-2'>Hash</th>
                    </tr>
                </thead>
                <tbody className='text-center font-semibold'>
                    <tr className='border'>
                        <td className='border p-2'>1</td>
                        <td className='border p-2'>08:30 AM</td>
                        <td className='border p-2'>487</td>
                        <td className='border p-2'>Somthing Different will be</td>
                    </tr>
                    <tr>
                        <td className='border p-2'>2</td>
                        <td className='border p-2'>03:30 AM</td>
                        <td className='border p-2'>875</td>
                        <td className='border p-2'>Somthing here</td>
                    </tr>
                    <tr>
                        <td className='border p-2'>2</td>
                        <td className='border p-2'>11:30 AM</td>
                        <td className='border p-2'>797</td>
                        <td className='border p-2'>Somthing will</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablwTestLink;