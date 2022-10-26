import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>, children: [
            { path: "*", element: <ErrorPage /> },
            {
                path: '/', element: <Home/>
            },
        ]
    }
])