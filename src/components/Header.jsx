import React from 'react'
import doctors from '../Images/2-doctors.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
         <header className="md:pt-20 pt-0 px-10 flex justify-between text-xl py-10">
            <section className="p-5 space-y-3 text-center md:text-left ">
                <h1 className="text-3xl md:text-4xl font-semibold ">Welcome to</h1>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Mydoctorpadi</h1>
                <p className='md:py-10 py-7 md:pr-20'>
                    MyDoctorPadi is a health care brand aim at providing remote health care services by combining tele-medecine and tele-monitoring
                </p> 
                <button className="btn py-2 px-5 bg-pink-500 rounded-md text-white">
                    <Link to='/User'>
                       Sign up
                    </Link>
                    
                </button>
            </section>

            <section className="float-right mr-10 hidden md:inline-flex"><img src={doctors} alt="two doctors" className='rounded-full' /></section>
         </header>
         
      </div>
  )
}

export default Header