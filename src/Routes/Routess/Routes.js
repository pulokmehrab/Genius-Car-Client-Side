import { createBrowserRouter } from "react-router-dom"
import CheckOut from "../../components/Pages/checkOut/CheckOut"
import Home from "../../components/Pages/Home/Home"
import SignUp from "../../components/Pages/Home/SignUp/SignUp"
import LogIn from "../../components/Pages/LogIn/LogIn"
import Orders from "../../components/Pages/Orders/Orders"
import Main from "../../layout/Main"
import PrivateRoute from "../PrivateRote/PrivateRoute"


const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
         path:'/',
         element: <Home></Home>,
      },
      {
        path: '/login',
        element:<LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
    }
  ])
 export default router
