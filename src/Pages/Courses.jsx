import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Component/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-4 bg-gray-900 px-4'>
            <div className='col-span-3 lg:col-span-2'>
                <h2 className='text-center text-4xl font-semibold text-indigo-400 underline underline-offset-4 mb-6'>Total number of courses {courses.length}</h2>
                <div>
                    {
                        courses.map(course => <Course key={course.id} course={course} />)
                    }
                </div>
            </div>
            <div className='col-span-3 lg:col-span-1'>
                <aside className="dark:bg-gray-900 dark:text-gray-100 md:mx-8">
                    <h2 className='text-gray-300 text-4xl font-semibold underline underline-offset-4 mb-6'>Also you can select from here.</h2>
                    <ul>
                        {
                            courses.map(course => <li className='py-3 px-4' key={course.id}><Link className='underline underline-offset-2 text-indigo-300 hover:text-indigo-500 hover:no-underline' to={`/course/${course.id}`}>{course.title}</Link></li>)
                        }
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Courses;