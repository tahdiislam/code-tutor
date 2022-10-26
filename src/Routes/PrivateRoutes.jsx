import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return (
            <div className='py-10 bg-gray-800'>
                <div className="my-10 lg:my-20 mx-auto w-12 h-12 border-4 border-dotted rounded-full animate-spin dark:border-indigo-200"></div>
            </div>
        )
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default PrivateRoutes;