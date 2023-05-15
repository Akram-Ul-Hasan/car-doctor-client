import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Page from "../Layout/Page";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'Register',
            element: <Register></Register>
        }
    ]
},
{
    path: 'pages',
    element: <Page></Page>,
    children:[
        {
            path: 'check-out/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute> ,
            loader: ({params})=> fetch(`https://car-doctor-server-five-teal.vercel.app/services/${params.id}`)
        },
        {
            path: 'bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
        
    ]
}
])
export default router;