import { createBrowserRouter } from "react-router-dom"
import Home from "../../components/Pages/Home/Home"
import SignUp from "../../components/Pages/Home/SignUp/SignUp"
import LogIn from "../../components/Pages/LogIn/LogIn"
import Main from "../../layout/Main"


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
      }
    ]
    }
  ])
 export default router
