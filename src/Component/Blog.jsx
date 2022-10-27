import React from 'react';

const Blog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
            <article>
                <h2 className="text-2xl font-bold">{question}</h2>
                <p className="mt-4 dark:text-gray-400">{answer}</p>
            </article>
        </div>
    );
};

export default Blog;