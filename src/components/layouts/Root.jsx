import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";


const Root = () => {
    const [toggle,setToggle]=useState(true)
    // useEffect(()=>{setToggle(toggle)},[toggle])
    return (
        <div className={`${toggle? "bg-white text-black":"bg-black text-slate-600"}`}>
           
             <div className="">
                <Header setToggle={setToggle} toggle={toggle}></Header>
                <div className="min-h-screen">
                <Outlet setToggle={setToggle} toggle={toggle}></Outlet>
                </div>
             </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;