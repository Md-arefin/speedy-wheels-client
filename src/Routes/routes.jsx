import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";

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
      ]
    },
  ]);