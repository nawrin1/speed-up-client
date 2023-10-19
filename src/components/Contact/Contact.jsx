
import './Contact.css'
import image1 from '../../assets/contact.avif'
const Contact = () => {
    return (
        <div className="contact mb-14 h-auto py-8">
            <div className='flex'>
                <div className='lg:block md:block hidden pl-16 py-28'>
                    <img className='w-[75%] rounded-3xl' src={image1} alt="" />

                </div>
                <div className='place-items-center justify-center place-content-center ml-20 lg:ml-0  '>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl outline-4 lg:ml-20">
                    <h2 className='font-medium font-Oxanium text-center text-2xl mt-4'>Get in touch</h2>
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered" required />

                    </div>
                    <label className="label">
                        <span className="label-text">YourMessage</span>
                    </label>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>

                </div>
            </div>


            
            
        </div>
    );
};

export default Contact;