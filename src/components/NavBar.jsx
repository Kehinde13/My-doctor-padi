import React, { useState } from 'react';
import burger from '../Images/hamburger-icon.png';
import { Link } from 'react-router-dom';



function NavBar() {
    
    const [Nav, setNav] = useState(true);

    const handleNav = () => {
       setNav(!Nav)
    };
  return (
    <div>
       <nav className="flex space-x-10 justify-between py-4 px-10 shadow-lg">
            <h1 className="font-semibold text-blue-500 font-Hara">MyDoctorPadi</h1>
            <div className="flex space-x-10 ">
                <ul className="hidden md:flex space-x-10">
                    <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Home</Link></li>
                    <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Our Services</Link></li>
                    <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Blog</Link></li>
                    <li ><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Contact us</Link></li>
                    <li><Link to='/user' className="btn py-1 px-4 bg-pink-400 rounded-md text-white">Get Started</Link></li>
                </ul>
            
                <div onClick={handleNav} className="md:hidden" id="burger">
                  <img src={burger} alt="hamburger" width="30px" ></img>
                </div>
            </div>
        
        </nav>
     
        <nav className={!Nav ? "px-10 py-5 text-center" : "hidden" }>
            <ul className=" space-y-7">
                <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Home</Link></li>
                <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Our Services</Link></li>
                <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Blog</Link></li>
                <li><Link to='/' className="btn p-2 hover:bg-blue-600 hover:text-white tranition ease-out duration-300 rounded-full">Contact us</Link></li>
                <li><Link to='/user' className="btn py-1 px-4 bg-pink-400 rounded-md text-white">Get Started</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar