
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Card from "../pages/Card";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cheackout from "../pages/Cheackout";


function Router() {
    const router = createBrowserRouter([
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/details/:id",
          element: <Details/>
        },
        {
            path: "/cheackout/:id",
            element: <Cheackout/>
          },
        {
            path: "/card",
            element: <Card/>
          },
          {
            path: "/signup",
            element: <Signup/>
          },
          {
            path: "/login",
            element: <Login/>
          },
          {
            path: "/",
            element: <Signup/>
          },
      ]);
      return(
        <RouterProvider router={router} />
      )
}

export default Router