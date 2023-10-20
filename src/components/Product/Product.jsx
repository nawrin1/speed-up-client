
import Swal from "sweetalert2";
const Product = ({datas,setProduct,product}) => {
    const{name,image,brandName,type,_id}=datas
    const handleDelete=_id=>{
        fetch(`http://localhost:4000/addCart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deleted successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                    const remaining =product.filter(product => product._id != _id);
                    setProduct(remaining);



                }
            })
    }
    return (
    <div className="card card-compact w-96 bg-slate-300 shadow-xl">
    <figure><  img className="w-[300px] h-[200px] pt-6" src={image} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold font-Oxanium text-3xl">{brandName}</h2>
        <p className=" font-semi font-Oxanium text-2xl mb-4">Name: {name}</p>
        <p className=" font-semi font-Oxanium text-2xl">Type: {type}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    </div>
    </div>
    );
};

export default Product;