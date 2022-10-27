import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2 className='text-4xl font-semibold text-indigo-400'>Total courses {courses.length}</h2>
            <div>
                {
                    courses.map(course => )
                }
            </div>
        </div>
    );
};

export default Courses;