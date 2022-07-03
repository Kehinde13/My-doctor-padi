import React from 'react';
import doctors from '../Images/a-happy-fem-doc.jpg';

function Login() {
  return (
    <div>
            <div class="md:flex justify-between px-20 w-full mt-5 md:pt-20">
            <div class="md:border-2 rounded-md md:shadow-2xl md:mr-20 md:p-5 ">
                <div class="mt-10 p-5">
                    <h1 class="md:text-3xl text-2xl text-blue-500">Welcome to <br/> <span class="font-bold">Mydoctorpadi</span> </h1>
                    <p class="text-xs mt-2">Please Login to continue</p>
                </div>
                <form action="" method="post" class="p-5 text-gray-500">
                    <label for="email" class="mb-5 test-sm">Email</label><br/>
                    <input type="text" name="email" placeholder="Email is required" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
                    <br/>
                    <label for="pword" class="mb-5 text-sm">Password</label>
                    <br/> 
                    <input type="password" name="pword" placeholder="Input password" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/><br/>
                    <a href="#" class="md:ml-48 text-xs text-red-600">Forget Password?</a>
                    <br/>
                    <button class="ml-10 md:ml-0 text-white mx-20 px-6 py-2 mt-5 bg-blue-600 rounded-md ">Login</button>
                </form>
            </div>
            <div class="mt-2">
                <section class="float-left hidden md:inline-flex "><img src={doctors} alt="two doctors" className='w-[600px] rounded-full'/></section>
            </div>
    </div>
    </div>
  )
}

export default Login