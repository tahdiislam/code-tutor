import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaFileDownload, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const courseInfo = useLoaderData()
    const { id, title, thumbnail, details, ratings, outline } = courseInfo;
    const navigate = useNavigate()
    return (
        <div className='bg-gray-900 '>
            <div ref={ref} className="flex flex-col lg:w-1/2 p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100 mx-auto">
                <div className='flex justify-around'><h2 className="mb-1 text-4xl font-semibold">{title}</h2>
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button type='button' className='flex items-center px-8 py-3 font-semibold rounded-full bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 dark:text-gray-300' onClick={toPdf}>PDF <FaFileDownload className='ml-2'/></button>}
                    </Pdf>
                </div></div>
                <div>
                    <img src={thumbnail} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    
                    <p className="text-justify text-lg dark:text-gray-400">{details}</p>
                    <div className='my-7 ml-8'>
                        <h3 className='text-2xl font-semibold mb-2'>What you will learn:</h3>
                        <ul>
                            {
                                outline.map((m, id) => <li className='list-disc' key={id}>{m}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-indigo-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-indigo-400">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/get-course/${id}`)} type="button" className="flex items-center px-8 py-3 font-semibold rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 dark:text-gray-300">Get premium access <FaStar className='ml-2 text-yellow-600'/></button>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <span className='text-lg text-gray-200'>{ratings}</span>
                        <FaStar className='w-6 h-6 text-yellow-600'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;