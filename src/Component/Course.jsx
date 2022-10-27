import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, title, details, thumbnail, rating} = course;
    return (
        <div>
            <Link rel="noopener noreferrer" to={`/course/${id}`} className="my-4 block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 hover:shadow-sm hover:shadow-gray-400">
                <img src={thumbnail} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-gray-200 text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                    <p className='dark:text-gray-400 text-justify'>{details.length > 350 ? <>{details.slice(0, 350)}...<span className='text-teal-400 hover:underline'>learn more</span></> : <>{details}</>}</p>
                </div>
            </Link>
        </div>
    );
};

export default Course;