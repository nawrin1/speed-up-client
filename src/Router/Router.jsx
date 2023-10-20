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
import Details from "../components/pages/Details/Details";
import PrivateRoute from "../routes/PrivateRoute";

import Update from "../components/pages/Update/Update";
import MyCart from "../components/pages/MyCart/Mycart";

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
            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },{
            path:'/allcars/:brandName',
            element:<Car></Car>,
            // loader:()=>fetch(`http://localhost:5000/allcars`)
        },{
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=>fetch(`https://brand-shop-server-npgvtcy0p-jannatul-ferdous-nawrins-projects.vercel.app/allcars/${params.id}`)
        },{
          path:'/cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader:()=>fetch('https://brand-shop-server-npgvtcy0p-jannatul-ferdous-nawrins-projects.vercel.app/addCart')
        },{
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params})=>fetch(`https://brand-shop-server-npgvtcy0p-jannatul-ferdous-nawrins-projects.vercel.app/allcars/${params.id}`)
        }
      ]
    },
  ]);
export default router;