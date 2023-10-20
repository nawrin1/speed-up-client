import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AllCars from "../AllCars/AllCars";
import Carousel from "../../Carousel/Carousel";
import { BallTriangle } from "react-loader-spinner";


const Car = () => {
    const {brandName}=useParams()
    const [picture,setPicture]=useState([])
    const [loading,setLoading]=useState(true)
    
    // const data=useLoaderData()
    // console.log(data)
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('https://brand-shop-server-5j5lrswjk-jannatul-ferdous-nawrins-projects.vercel.app/allcars')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        const allCars=data?.filter(car=>car.brandName==brandName)
        console.log(allCars)
        setCars(allCars)
       setLoading(false)})
        
    },[brandName])
    


    useEffect(()=>{
        fetch('/advertise.json')
        .then(res=>res.json())
        .then(data=>{
            const carData=data.filter(datas=>datas.brandName==brandName)
            setPicture(carData)

        })
    },[brandName])
    console.log(picture)

    
    return (
                   loading?<div className="pt-[20%] pl-[45%]">
                    <BallTriangle
                   height={100}
                   width={100}
                   radius={5}
                   color="#4fa94d"
                   ariaLabel="ball-triangle-loading"
                   wrapperClass={{}}
                   wrapperStyle=""
                   visible={true}
               />
                   </div>:
        
                   (cars.length>0?
                   <>
                   <Carousel picture={picture}></Carousel>
                   <div className="flex-col gap-6 max-w-6xl mx-auto mb-52 mt-20 ">
                    {
                        cars.map(car=><AllCars car={car}></AllCars>)
                    }
                    </div>  
                    </>
                    :
                    <p className="text-center font-Oxanium font-extrabold text-6xl items-center">No Cars Available...</p>)
            
        

            
       
    );
};

export default Car;