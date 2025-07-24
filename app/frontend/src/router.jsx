import { createBrowserRouter, Navigate } from "react-router";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import NotFound from "./pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/ranking",
        element: <Ranking />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);


export default router;