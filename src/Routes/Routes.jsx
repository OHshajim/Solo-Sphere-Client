import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import JobDetails from "../Pages/JobDetails";
import ErrorPage from "../Pages/ErrorPage";
import UpdateJob from "../Pages/UpdateJob";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";
import MyPostedJobs from "../Pages/MyPostedJobs";
import AddJob from "../Pages/AddJob";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
                path: "/bidRequests",
                element: <BidRequests />,
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs />,
                
            },
            {
                path: "/myBids",
                element: <MyBids />,
            },
            {
                path: "/addJob",
                element: <AddJob />,
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/job/${params.id}`)
            },
            {
                path: "/jobDetails/:id",
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/job/${params.id}`)
            },
        ]
    },
]);


export default Routes;