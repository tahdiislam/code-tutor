import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Component/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-4 bg-gray-900 px-4'>
            <div className='col-span-3 lg:col-span-2'>
                <h2 className='text-4xl font-semibold text-indigo-400'>Total courses {courses.length}</h2>
                <div>
                    {
                        courses.map(course => <Course key={course.id} course={course} />)
                    }
                </div>
            </div>
            <div className='lg:col-span-1'>
                
            </div>
        </div>
    );
};

export default Courses;