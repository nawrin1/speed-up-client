import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const load=useLoaderData()
    const{image,name,brandName,type,price,rating,_id}=load
    console.log(load)
    const handleUpdate=e=>{
        e.preventDefault()
        const image=e.target.image.value
        const name=e.target.name.value
        const brandName=e.target.brandName.value
        const type=e.target.carType.value
        const price=e.target.price.value
        
        const rating=e.target.rating.value
        const updated = {image,name,brandName,type,price,rating}
        fetch(`https://brand-shop-server-npgvtcy0p-jannatul-ferdous-nawrins-projects.vercel.app/allcars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have updated succefully',
                        showConfirmButton: false,
                        timer: 1500
                      })

                }
            })
    }
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/K571GRL/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-slate-700">
            <h2 className='text-center text-4xl font-semibold'>Update Products</h2>
            <form className="card-body " onSubmit={handleUpdate}>
                <div className="flex flex-col lg:flex-row md:flex-row gap-6">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Image</span>
                </label>
                <input type="Text" name="image" defaultValue={image} placeholder="Image link" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Name</span>
                </label>
                <input type="text" name="name" defaultValue={name} placeholder="text" className="input input-bordered text-black" required />

                </div>


                </div>
                <div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Brand Name</span>
                </label>
                <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered text-black" required />
                </div>
                <div className=" flex justify-start mt-8">
                <label className="label">
                    <span className="label-text text-xl text-white ">Type</span>
                </label>
                <select name="carType" defaultValue={type} id="" className="input input-bordered text-black ml-10" >
                    <option  >SUV</option>
                    <option >Coupe</option>
                    <option >Crossover</option>
                    <option  >Sedan</option>
                    <option >Hatchback</option>
                </select>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Price</span>
                </label>
                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered text-black" required />

                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Rating</span>
                </label>
                <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered text-black" required />

                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral text-xl text-white">Submit</button>
                </div>

                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;