import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../Component/CourseDetails";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import ErrorPage from "../Shared/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>, children: [
            { path: "*", element: <ErrorPage /> },
            {
                path: '/', element: <Home/>
            },
            {
                path: '/register', element: <Register/>
            },
            {
                path: "/login", element: <Login/>
            },
            {
                path: "/profile", element: <PrivateRoutes>
                    <Profile />
                </PrivateRoutes>
            },
            {
                path: "/courses", element: <Courses/>, loader: async () => {
                    return fetch("http://localhost:5000/courses")
                }
            },
            {
                path: "/course/:id", element: <CourseDetails/>, loader: async ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }
            }
        ]
    }
])