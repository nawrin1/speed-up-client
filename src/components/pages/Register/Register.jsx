import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'


const Register = () => {
    const{createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        
        const photo=e.target.photo.value
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-={}\[\]:;"'<>,.?]).{6,}$/;
        const isPasswordOk=passwordRegex.test(password)
        if(!isPasswordOk){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password must include capital letters, special character and atleast 6 length',
                showConfirmButton: false,
                timer: 1500
            })
            e.target.reset()}

        else
        {
            createUser(email,password)
            .then(result=>{
                const user={email,name,photo}
                
                 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your have registered successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateProfile(result.user,{
                    displayName:name,
                    photoURL:photo
                })
                fetch('https://brand-shop-server-npgvtcy0p-jannatul-ferdous-nawrins-projects.vercel.app/allusers',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'

                    },
                    body:JSON.stringify(user)
                    
                })
                .then(res=>res.json())
                .then(data=>console.log(data))

                console.log(result)
                navigate('/')
     
            })
            .catch(error=>{
                console.error(error)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Registration failed',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
        }

    }
    return (
        <div className="hero min-h-screen  bg-slate-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            
            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-300">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo url....." className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                </form>
            </div>
            <p className="text-black text-center mb-8">Already have an account?<Link to='/login' className=" text-blue-700">Login</Link></p>

            </div>
        </div>
        </div>
    );
};

export default Register;