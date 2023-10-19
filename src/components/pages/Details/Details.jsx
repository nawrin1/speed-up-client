import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    
    const data=useLoaderData()
    console.log(data)
    const {brandName,name,image,description,type}=data
    // console.log(name)
    // const [cars,setCars]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/allcars')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     const allCars=data?.filter(car=>car._id==name)
    //     console.log(allCars)
    // setCars(allCars)})
        
    // },[name])
    // console.log(cars)

    return (
        <div className="max-w-6xl mx-auto p-4 mb-10">
            <h2 className="text-7xl font-bold text-center font-Oxanium mt-10 mb-9 ">{brandName}</h2>
            <div>
                <div className="flex justify-center relative top-10 mb-3  ">
                    <img className="w-[65%] shadow-xl shadow-slate-600 rounded-3xl"src={image} alt="" />

                </div>
                <div>
                    <div className="border-2 border-slate-700 rounded-3xl w-[40%] lg:p-4 md:p-4 p-2 bg-slate-300 mb-6 hover:shadow-2xl hover:shadow-slate-800" >
                    <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold text-justify font-Oxanium mb-3 mt-5">Name: {name}</h2>
                    <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold text-justify font-Oxanium mb-6">Type: {type}</h2>
                    </div>

                    <p className="text-xl font-medium text-justify font-Oxanium mt-12">{description}</p>

                </div>
            </div>
            
        </div>
    );
};

export default Details;