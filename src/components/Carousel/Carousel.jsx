import { useEffect, useState } from "react";


const Carousel = ({picture}) => {
    console.log(picture)
    

    
    const {image1,image2,image3,brandName}=picture[0]
    console.log(image1,image2,image3)

    return (
        <div className="carousel  ">
        <div id="slide1" className="carousel-item relative w-full ">
           <div className="absolute text-center left-[30%] top-[20%]"><h2 className=" text-7xl font-bold font-Oxanium left-[45%] top-[20%] text-slate-700">{brandName}</h2>
            <h2 className=" text-5xl font-bold font-Oxanium left-[35%] top-[30%] text-slate-600">Driven to Excellence.</h2></div>
            <img src={image1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full ">
            <div className="absolute text-center left-[30%] top-[20%]"><h2 className=" text-7xl font-bold font-Oxanium left-[45%] top-[20%] text-slate-700">{brandName}</h2>
            <h2 className=" text-5xl font-bold font-Oxanium left-[35%] top-[30%] text-slate-600">Driven to Excellence.</h2></div>
        
            <img src={image2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full ">
            <div className="absolute text-center left-[30%] top-[20%]"><h2 className=" text-7xl font-bold font-Oxanium left-[45%] top-[20%] text-slate-700">{brandName}</h2>
            <h2 className=" text-5xl font-bold font-Oxanium left-[35%] top-[30%] text-slate-600">Driven to Excellence.</h2></div>
            <img src={image3} className="w-full" />
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 

        </div>
    );
};

export default Carousel;