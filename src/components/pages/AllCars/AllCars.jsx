import { Link } from "react-router-dom";


const AllCars = ({car}) => {
    const{brandName,image,name,price,type,rating,_id}=car
    console.log(_id)
    const handleDetails=_id=>{
        fetch(`http://localhost:3000/allcars/${_id}`,{
            method:'GET',
            "content-type":'application/json'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-6  mt-8 rounded-2xl place-items-center shadow-2xl shadow-slate-400 hover:bg-stone-200 hover:border-2 hover:border-orange-800 hover:shadow-slate-700 ">
            <div>
                <img className="w-[400px] h-[300px] rounded-2xl"src={image} alt="" />

            </div>
            <div className=" text-xl md:text-2xl lg:text-2xl font-Oxanium font-medium mt-4 mb-4 ">
                <h2 className="mb-3 font-extrabold text-sky-900 text-2xl md:text-3xl lg:text-3xl">Brand Name: {brandName}</h2>

                <h2>{name}</h2>
                <h2>Type: {type}</h2>
                <h2>Price: {price} dollar</h2>
                <h2>Rating: {rating}</h2>
                <div className="flex mt-6 gap-24">
                    <Link to={`/details/${_id}`}><div><button className="btn btn-info " onClick={()=>handleDetails(_id)}>Details</button></div></Link>
                    <Link to={`/update/${_id}`}><div><button className="btn btn-success">Update</button></div></Link>
                </div>

            </div>
            
        </div>
    );
};

export default AllCars;