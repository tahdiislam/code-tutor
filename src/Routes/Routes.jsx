import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
        ]
    }
])