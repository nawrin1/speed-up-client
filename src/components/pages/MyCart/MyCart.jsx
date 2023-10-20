import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";
import { useState } from "react";


const MyCart = () => {
    
    const data=useLoaderData()
    const [product,setProduct]=useState(data)
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