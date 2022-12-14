import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/code-tutor-logo.png"
import { AuthContext } from '../Context/AuthProvider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useContext(AuthContext)
    // console.log(user.displayName);
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='h-11' src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Code Tutor
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {!user?.uid ? <>
                            <li>
                                <Link
                                    to="/login"
                                    aria-label="Sign in"
                                    title="Sign in"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                        : <>
                                <li>
                                    <Link to="/profile">
                                        <Tippy content={user.displayName}>
                                            <div className="relative flex-shrink-0">
                                                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                <img src={user.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                            </div>
                                        </Tippy>
                                    </Link>
                                </li>
                        </>}
                        <li>
                            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>Dark</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-indigo-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                                <span>Light</span>
                            </label>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-gray-900 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img className='h-11' src={logo} alt="" />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                                                    Code Tutor
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blogs"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/faq"
                                                    aria-label="About us"
                                                    title="About us"
                                                    className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            {!user?.uid ? <>
                                                <li>
                                                    <Link
                                                        to="/login"
                                                        aria-label="Sign in"
                                                        title="Sign in"
                                                        className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Sign in
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/register"
                                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Register
                                                    </Link>
                                                </li>
                                            </>
                                                : <>
                                                    <li className='flex'>
                                                        <Link to="/profile">
                                                            <Tippy content={user.displayName}>
                                                                <div className="relative flex-shrink-0">
                                                                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                                    <img src={user.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                                </div>
                                                            </Tippy>
                                                        </Link>
                                                    </li>
                                                </>}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};