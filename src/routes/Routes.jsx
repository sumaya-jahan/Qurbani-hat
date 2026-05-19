import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";

import Home from "../pages/Home/Home";
import AllAnimals from "../pages/AllAnimals/AllAnimals";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/animals", element: <AllAnimals /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/details/:id", element: <Details /> },
            { path: "/my-profile", element: <Profile /> },
            { path: "/update-profile", element: <UpdateProfile /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;