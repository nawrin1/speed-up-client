import { useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";
import Contact from "../../Contact/Contact";

import Services from "../../Services/Services";



const Home = () => {
    const[cars,setCars]=useState([])
    useEffect(()=>{
        fetch('/brands.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center font-Oxanium font-bold text-5xl lg:text-6xl mt-36 mb-20 max-w-6xl mx-auto">AVAILABLE BRANDS</h2>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mb-64 place-items-center max-w-6xl mx-auto">
            {
                cars.map((data,idx)=><Brands key={idx} data={data} ></Brands>)


            }
            </div>
            <h2 className="text-center font-Oxanium font-bold text-5xl lg:text-6xl mt-36 mb-20 max-w-6xl mx-auto text-cyan-900">CONTACT US</h2>
            <Contact></Contact>
            <h2 className="text-center font-Oxanium font-bold text-5xl lg:text-6xl mt-36 max-w-6xl mx-auto">SERVICES <span className="text-orange-900">WE</span> OFFER</h2>
            <Services></Services>
           
            
            
        </div>
    );
};

export default Home;