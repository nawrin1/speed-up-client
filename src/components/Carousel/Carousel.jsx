import { useEffect, useState } from "react";


const Carousel = ({picture}) => {
    console.log(picture)
    

    
    const {image1,image2,image3,brandName}=picture[0]
    console.log(image1,image2,image3)

    return (
        <div className="carousel  ">
        <div id="slide1" className="carousel-item relative w-full ">
           <div className="absolute text-center left-[13%] top-[20%] lg:left-[30%] lg:top-[20%] md:left-[30%] md:top-[20%]"><h2 className=" text-4xl lg:text-7xl md:text-6xl font-bold font-Oxanium  text-slate-700">{brandName}</h2>
            <h2 className=" text-3xl lg:text-5xl md:text-4xl font-bold font-Oxanium  text-slate-600">Driven to Excellence.</h2></div>
            <img src={image1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full ">
            <div className="absolute text-center left-[13%] top-[20%] lg:left-[30%] lg:top-[20%] md:left-[30%] md:top-[20%]"><h2 className=" text-4xl lg:text-7xl md:text-6xl font-bold font-Oxanium left-[45%] top-[20%] text-slate-700">{brandName}</h2>
            <h2 className=" text-3xl lg:text-5xl md:text-4xl font-bold font-Oxanium  text-slate-600">Your Journey Begins Here</h2></div>
        
            <img src={image2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full ">
            <div className="absolute text-center left-[13%] top-[20%] lg:left-[30%] lg:top-[20%] md:left-[30%] md:top-[20%]"><h2 className=" text-4xl lg:text-7xl md:text-6xl font-bold font-Oxanium left-[45%] top-[20%] text-slate-700">{brandName}</h2>
            <h2 className=" text-3xl lg:text-5xl md:text-4xl font-bold font-Oxanium  text-slate-600">Unlocking Happiness.</h2></div>
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