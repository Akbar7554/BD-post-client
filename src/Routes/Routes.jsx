import { createBrowserRouter } from "react-router-dom"
import Root from "../Layouts/Root"
import Home from "../pages/Home/Home/Home"
import AddJob from "../components/AddJob/AddJob"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import MyPostedJobs from "../components/MyPostedJobs/MyPostedJobs"
import MyBids from "../components/MyBids/MyBids"
import BidRequests from "../components/BidRequests/BidRequests"
import JobDetails from "../components/JobDetails/JobDetails"
import PrivateRoutes from "./PrivateRoutes"
import MySingleCardPostedJobs from "../components/MySingleCardPostedJobs/MySingleCardPostedJobs"
import UpdateJob from "../components/UpdateJob/UpdateJob"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-jobs/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob></UpdateJob>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoutes>
            <MyBids></MyBids>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bid-requests",
        element: (
          <PrivateRoutes>
            <BidRequests></BidRequests>
          </PrivateRoutes>
        ),
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoutes>
            <JobDetails></JobDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
])

export default router
