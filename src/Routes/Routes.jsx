import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import JobDetails from "../Pages/JobDetails";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader:()=>fetch(`${import.meta.env.VITE_SERVER_URL}/jobs`)
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
            {
                path: "/jobDetails/:id",
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/jobs/${params.id}`)
            },
        ]
    },
]);


export default Routes;