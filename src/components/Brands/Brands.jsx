import { Link } from "react-router-dom";


const Brands = ({data}) => {
    const{brandName,image}=data
    return (
<Link to={`/allcars/${brandName}`}>        <div className="w-[300px] h-[250px]  shadow-2xl shadow-slate-600 ">
            <div className="w-[294px] h-[200px] rounded-2xl">
            <img src={image} className="border-2 border-blue-200 h-[200px] w-[295px] rounded-2xl ml-[2px]"alt="" />
            </div >
            <div className="text-2xl text-center font-semibold font-Oxanium place-content-center place-items-center mt-6">
                <p className=" bg-orange-500 w-[50%] py-3 place-self-center text-center mx-auto rounded-xl">{brandName}</p>
            
            </div>
            
        </div></Link>
    );
};

export default Brands;