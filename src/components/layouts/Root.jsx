import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="">
           
             <div className="">
                <Header></Header>
                <div className="min-h-screen">
                <Outlet></Outlet>
                </div>
             </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;