import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OurTeam from "../pages/OurTeam/OurTeam";
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
  }
]);