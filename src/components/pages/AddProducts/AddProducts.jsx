import Swal from 'sweetalert2'
const AddProducts = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        const image=e.target.image.value
        const name=e.target.name.value
        const brandName=e.target.brandName.value
        const type=e.target.carType.value
        const price=e.target.price.value
        const description=e.target.description.value
        const rating=e.target.rating.value
        const cars={image,name,brandName,type,price,description,rating}
        console.log(cars)
        fetch("http://localhost:5000/allcars",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(cars)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if (data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have added succefully',
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
        }
        })

    }
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/K571GRL/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-slate-700">
            <form className="card-body " onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row md:flex-row gap-6">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Image</span>
                </label>
                <input type="Text" name="image" placeholder="Image link" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="text" className="input input-bordered text-black" required />

                </div>


                </div>
                <div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Brand Name</span>
                </label>
                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered text-black" required />
                </div>
                <div className=" flex justify-start mt-8">
                <label className="label">
                    <span className="label-text text-xl text-white ">Type</span>
                </label>
                <select name="carType" id="" className="input input-bordered text-black ml-10" >
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
                <input type="text" name="price" placeholder="Price" className="input input-bordered text-black" required />

                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Short Description</span>
                </label>
                <textarea name="description" id="" cols="30" rows="5" className="text-black"></textarea>

                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-white">Rating</span>
                </label>
                <input type="text" name="rating" placeholder="rating" className="input input-bordered text-black" required />

                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral text-xl text-white">Add Product</button>
                </div>

                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;