import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Component/Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className='bg-gray-900'>
            <h2 className='text-center text-4xl font-semibold underline text-indigo-400'>Blog Section</h2>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;