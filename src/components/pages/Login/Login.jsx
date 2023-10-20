
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const{login,googleSignIn}=useContext(AuthContext)
    
    const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        login(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'logged in succesfully',
                showConfirmButton: false,
                timer: 1500
            })
            
            
            navigate("/")

            
            
        })
        .catch(error => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Invalid Email or Password',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        })

    }
    const handleGoogle=()=>{
        console.log('ok')
        googleSignIn()
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are logged in',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        })
        .catch(error=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
            
        })
        
    }
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/K571GRL/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">

            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2 border-x-gray-800 place-items-center">
            <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label text-white">
                    <span className="label-text text-white text-2xl font-Oxanium">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label text-white text-3xl">
                    <span className="label-text text-white text-2xl font-Oxanium">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label text-white text-2xl">
                    <a href="#" className="label-text-alt link link-hover text-white font-Oxanium">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral font-Oxanium text-2xl">Login</button>
                </div>
            </form>
            <button className="btn btn-neutral w-[75%]  font-Oxanium" onClick={handleGoogle}>Login with Google</button>
            <p className='text-center text-white mb-5 mt-6  font-Oxanium'>Dont have an account?<Link to='/register'>Register</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;