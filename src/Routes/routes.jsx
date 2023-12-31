import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import About from "../pages/About/About";
import CarLIsting from "../pages/CarLIsting/CarLIsting";
import Contact from "../pages/Contact/Contact";
import CarBooked from "../pages/Dashboard/CarBooked/CarBooked";
import CarSaved from "../pages/Dashboard/CarSaved/CarSaved";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OurTeam from "../pages/OurTeam/OurTeam";
import SignIn from "../pages/Signin/SignIn";
import SingleCar from "../pages/singleCar/SingleCar";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'CarLists',
        element: <CarLIsting />
      },
      {
        path: 'car-details/:id',
        element: <SingleCar />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_WEBSITE_URL}/cars/${params.id}`)
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'our-team',
        element: <OurTeam/>
      },
    ]
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'sign-up',
    element: <SignIn></SignIn>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: 'saved-car',
        element: <CarSaved/>
      },
      {
        path: 'car-booked',
        element: <CarBooked/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
    ]
  }
]);