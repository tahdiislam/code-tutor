import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PurchaseCourse = () => {
    const [purchase, setPurchase] = useState(false)
    const navigate = useNavigate()
    const course = useLoaderData()
    const {thumbnail, title, id} = course;
    
    // course purchase handler
    const handleCoursePurchase = () => {
        toast.success("Course purchase successfully.")
        setPurchase(true)
    }
    return (
        <div className='bg-gray-900'>
            <div className="mx-auto max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <h3 className='text-2xl'>Price: <span className='text-green-400'>0 $</span></h3>
                    </div>
                    {!purchase ? <button onClick={handleCoursePurchase} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Free Access</button> : <button onClick={() => navigate("/")} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Go Home Page</button>}
                </div>
            </div>
        </div>
    );
};

export default PurchaseCourse;