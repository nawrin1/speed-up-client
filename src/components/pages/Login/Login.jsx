
import './Login.css'
const Login = () => {
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/K571GRL/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">

            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2 border-x-gray-800">
            <form className="card-body">
                <div className="form-control">
                <label className="label text-white">
                    <span className="label-text text-white text-2xl font-Oxanium">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label text-white text-3xl">
                    <span className="label-text text-white text-2xl font-Oxanium">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label text-white text-2xl">
                    <a href="#" className="label-text-alt link link-hover text-white font-Oxanium">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral font-Oxanium text-2xl">Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;