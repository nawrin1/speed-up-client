import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../components/layouts/Root";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import AddProducts from "../components/pages/AddProducts/AddProducts";
import Car from "../components/pages/Car/Car";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        },{
            path:'/add',
            element:<AddProducts></AddProducts>
        },{
            path:'/allcars/:brandName',
            element:<Car></Car>,
            // loader:()=>fetch(`http://localhost:5000/allcars`)
        }
      ]
    },
  ]);
export default router;