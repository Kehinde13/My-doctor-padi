import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../Images/icons8-doctor-male-80.png';
import hospital from '../Images/icons8-hospital-3-100.png';
import patient from '../Images/icons8-patient-64.png';


function User() {
  return (
    <div>
        <main className='max-w-[1200px] mx-auto my-10'>
                <header className='text-center my-10'>
                    <h1 className=' text-5xl font-bold'>Select User</h1>
                    <p className='text-gray-500 text-xl py-5'>Please select a user to continue</p>
                </header>

            
                <section className='flex md:flex-row justify-between
                         text-center mt-20 flex-col px-20 space-y-10 lg:space-y-0'>
                    <article>
                        <div class="card">
                            <Link to='/SignUp'>
                             <img className='w-[200px]'
                             src={doctor} alt="doc" />
                            </Link> 
                        </div>
                        <p>Doctor</p>
                    </article>
                
                    <article>
                        <div class="card">
                            <Link to='/SignUp'>
                             <img className='w-[200px]'
                             src={patient} alt="doc" />
                            </Link> 
                        </div>
                        <p>Patient</p>
                    </article>
                
                    <article>
                        <div class="card">
                            <Link to='/SignUp'>
                             <img className='w-[200px]'
                             src={hospital} alt="doc" />
                            </Link> 
                        </div>
                        <p>Others</p>
                    </article>
                </section>
        </main>
    </div>
  )
}

export default User