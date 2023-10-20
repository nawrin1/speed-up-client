import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BallTriangle } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
    />
    }
    if(user){
        return children

    }
    return <Navigate  state={location.pathname} to="/login"></Navigate>;
    }


export default PrivateRoute;