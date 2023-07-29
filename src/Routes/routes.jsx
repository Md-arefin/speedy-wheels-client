import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/Signin/SignIn";

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
            element: <Contact/>
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
    }
  ]);