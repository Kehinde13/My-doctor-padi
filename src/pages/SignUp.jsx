import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
         <h1 class="font-semibold text-blue-500 text-2xl mx-3">Mydoctorpadi</h1>
    <div class="md:border-2 rounded-md md:shadow-2xl md:p-10 md:mx-24 text-center mt-10 mx-5">
        <h1 class="font-bold text-2xl text-blue-500">Sign up</h1>
        <p>Already have an account? <br/> <Link to='/Login'>Log in</Link></p>
        <form action="" method="post" class="md:p-5 text-gray-500 mt-2">
            <label for="email" class="mb-5">Email</label><br/>
            <input type="text" name="email" placeholder="Fill in your email" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
             <br/>
             <label for="email" class="mb-5">Confirm your Email</label><br/>
            <input type="text" name="email" placeholder="Confirm your Email" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
             <br/>
             <label for="pword" class="mb-5">Password</label>
             <br/> 
             <input type="password" name="pword" placeholder="Input password" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
             <br/>
             <label for="pword" class="mb-5">confirm your Password</label><br/>
             <input type="password" name="pword" placeholder="confirm your password" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
              <br/>
              <label for="number" class="mb-5" >Phone Number</label><br/>
              <input type="text" name="number" placeholder="Input number" class="md:w-72 mb-5 border-2 border-gray-200 h-10 p-2" required/>
               <br/>
               <button class=" text-white px-6 py-2 mt-5 bg-blue-600 rounded-md ml-2">Next</button>
         </form>
    </div>
    </div>
  )
}

export default SignUp