import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import CarBooked from "../pages/Dashboard/CarBooked/CarBooked";
import CarSaved from "../pages/Dashboard/CarSaved/CarSaved";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OurTeam from "../pages/OurTeam/OurTeam";
import SignIn from "../pages/Signin/SignIn";
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
    element: <Dashboard/>,
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
      {
        path: 'payment-history',
        element: <PaymentHistory/>
      },
    ]
  }
]);