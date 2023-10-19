import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AllCars from "../AllCars/AllCars";


const Car = () => {
    const {brandName}=useParams()
    
    // const data=useLoaderData()
    // console.log(data)
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allcars')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        const allCars=data?.filter(car=>car.brandName==brandName)
        console.log(allCars)
    setCars(allCars)})
        
    },[brandName])

    
    return (
        <div>
            {
                cars.map(car=><AllCars car={car}></AllCars>)
            }

            
        </div>
    );
};

export default Car;