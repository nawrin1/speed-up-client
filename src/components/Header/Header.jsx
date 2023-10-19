import { Link, NavLink } from "react-router-dom";
import {SiSpeedypage} from 'react-icons/si';
import './Header.css'


const Header = () => {
    const links=<>
      <li className="font-Oxanium font-semibold text-xl"><NavLink to='/'>Home</NavLink></li>
      <li className="font-Oxanium font-semibold text-xl"><NavLink to='/add'>Add Products</NavLink></li>
      <li className="font-Oxanium font-semibold text-xl"><NavLink to='cart'>My Cart</NavLink></li>
      
      
    </>
    return (
        <div className="navbar header bg-slate-200 rounded-3xl mb-7 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl md:text-3xl lg:text-3xl font-Oxanium font-semibold"><SiSpeedypage></SiSpeedypage>SPEED UP</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to='/login'><button className="btn font-Oxanium font-semibold text-[14px] lg:text-xl md:text-xl">Login</button></Link>
                <Link to='register'><button className="btn font-Oxanium font-semibold text-[14px] lg:text-xl md:text-xl">Register</button></Link>
            </div>
        </div>
    );
};

export default Header;