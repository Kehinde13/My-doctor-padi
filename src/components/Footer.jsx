import React from 'react'
import insta from '../Images/icons8-instagram-50.png';
import facebook from '../Images/icons8-facebook-50.png';
import medium from '../Images/icons8-medium-50.png';
import message from '../Images/icons8-new-message-50.png';

function Footer() {

  return (
    <div>
         <footer class="bg-gray-600 md:flex justify-between py-5 px-16 text-white space-x-6">
        <section class="my-5">
            <div class="space-y-3 md:text-left text-center">
                <h5 class="font-bold text-2xl mb-5">Mydoctorpadi</h5>
                <p>hello@mydoctorpadi.com</p>
                <p>+2349000000000</p>
            </div>
            
            <div >
                <ul class="flex justify-between mt-4 space-x-3">
                    <li><a href=""><img src={insta} alt="insta"/></a></li>
                    <li><a href=""><img src={facebook} alt="facebook"/></a></li>
                    <li><a href=""><img src={medium} alt="medium"/></a></li>
                    <li><a href=""><img src={message} alt="message"/></a></li>
                </ul>
            </div>
        </section>
        
        <section>
            <h5 class="font-bold text-2xl mb-5 text-center">Our services</h5>
            <div class="md:flex md:space-x-10">
                <div>
                    <a href="#">Daily health prompts</a><br/><br/>
                    <a href="#">Monitor your vitals</a><br/><br/>
                    <a href="#">Track daily blood pressure</a><br/><br/>
                    <a href="#">Track daily blood glucose level</a><br/><br/>
                </div>
            
                <div>
                    <a href="#">Track your body mass index</a><br/><br/>
                    <a href="# ">Personalize record</a><br/><br/>
                    <a href="#">Book a consultation</a><br/><br/>
                    <a href="#">Locate hospitals and pharmacies</a>
                </div>
            </div>
             
        </section>

        <section className="p-10 md:text-right text-center">
            <p>Hospitals & <br/> Pharmacies around</p>
            <button className="py-1 px-6 bg-pink-400"><a href="#">Search</a></button>
        </section>
    </footer>
    </div>
  )
}

export default Footer