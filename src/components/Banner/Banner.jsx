import image1 from '../../assets/car.avif'

const Banner = () => {
    return (
        <div className="  relative">
            <img className=" " src={image1} alt="" />
            <div className='absolute  text-3xl lg:text-7xl font-Oxanium font-extrabold text-slate-300 place-content-center top-[40%] text-center left-8 '>
                <h2 className=''>REDIFINING<br /><span className='text-3xl md:text-5xl lg:text-5xl'>THE</span> <br />ROAD EXPERIENCE</h2>
            </div>

            
        </div>
    );
};

export default Banner;