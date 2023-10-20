import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyCart = () => {
    const {user}=useContext(AuthContext)
    
    const data=useLoaderData()
   
    const filtered=data.filter(pro=>pro.userData==user.email)
    const [product,setProduct]=useState(filtered)
    
    console.log(data)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 place-content-center place-items-center gap-6">
            {
                product?.map((datas,idx)=><Product key={idx} datas={datas} product={product} setProduct={setProduct}></Product>)
            }
            
        </div>
    );
};

export default MyCart;