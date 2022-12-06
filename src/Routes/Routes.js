import { createBrowserRouter } from "react-router-dom";
import FAQ from "../FAQ/FAQ";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])

export default router;