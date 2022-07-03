import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../Images/a-dr-with-pen-bk.jpg';
import check from '../Images/young-man-check.jpg';
import lady from '../Images/a-lady-browsing.jpg';
import prompt from '../Images/myDoctorPadi-w_b.jpg';
import tired from '../Images/F- doc-with-2-others.jpg';
import map from '../Images/google-map.jpg';
import live from '../Images/live vd call.jpg';
/* import vitals from '../Images/IMG-20220122-WA0000.jpg'; */
import checker from '../Images/blood-glucose-checker.jpg';
import bmi from '../Images/bmi.jpg';
import handChecker from '../Images/hand-checker.jpg';
import monitor from '../Images/monitor-disp.jpg';
/* import dailyPrompt from '../Images/IMG-20220122-WA0001.jpg'; */


function Main() {

  return (
    <div>
        <main>
        <section className="px-10 md:flex justify-between md:p-5 bg-gray-200 text-center">
            <figure className="px-20 py-5">
                <img src={doctor} alt="a doctor" className='w-[110px] rounded-full'/>
                <figcaption><a href="#">Access to Medical Expert</a></figcaption> 
            </figure>

            <figure className="px-20 py-5">
                <img src={check} alt="someone checking his Bp" className='w-[180px] rounded-full'/>
                <figcaption><a href="#">Check Bp on the go</a></figcaption> 
            </figure>

            <figure className="px-20 py-5" > 
                <img src={lady} alt="lady browsing" className='w-[180px] rounded-full'/>
                <figcaption><a href="#">No 1 health companion</a></figcaption> 
            </figure> 

            <figure className="px-20 py-5">
                <img src={prompt} alt="daily prompt" className='w-[120px] rounded-full'/>
                <figcaption><a href="#">Daily health prompts</a></figcaption> 
            </figure>
        </section>
        <div className="block">
            <figure className="">
                <img src={tired} alt="a-tired-doctor" width="700px"/>
            </figure>   
        </div>
        <section className=" md:flex justify-between space-x-10">  
            <article className="bg-blue-500 md:p-8 py-5 px-20 text-white">
                    <h3 className="text-4xl font-semibold">Our Mission</h3>
                    <p className="font-bold my-3">
                        Our goal is to provide a platform where individuals can track monitor their health vitals and also also have a personalized health record.     
                    </p>
                    <ol className="list-disc">
                        <li>Improve health knowledge through insightful health prompts and blog.</li>
                        <li>To connect atients to expert health providers.</li>
                        <li>Monitoring vitals</li>
                        <li>Health knowledge and materiels on the app</li>
                        <li>Access to doctors</li>
                    </ol>
            </article> 

            <article className="p-10 text-left">
                <h3 className="text-4xl font-semibold text-blue-400 py-4">Our Vision</h3>
                <p>The dream is to become a premium health care brand combining tele-medicine and tele-monitoring, making individuals more  health savvy and improving access to  health care expert</p>
            </article>
        </section>

       <section className=" bg-gray-300 md:p-20 p-[80px]  text-center">
            <h2 className="text-3xl text-blue-400 font-semibold">Subscribe to our News Letter</h2>
            <p className="text-2xl mb-2">Join our newsletter to stay up to date with our news and products.</p>
            <form action="">
                <input type="email" placeholder="Your Email" className="md:w-80 py-1 px-4 rounded-md"/>
                <a href="#" className="p-1 bg-gray-600 text-white rounded-md"> Subscribe </a>
            </form>
        </section>

        
       
       <section id="all-services" className="md:mb-20 text-center">
            <div className="md:flex justify-between p-20 space-x-6 space-y-10 md:space-y-0">
                <div className="p-4 md:p-0">
                    <div><img src={map} alt="direction map" className='w-[200px] rounded-2xl'/></div>
                    <p><a href="#">hospitals and pharmacies around</a></p>
                </div>

                <div>
                    <div><img src={live} alt="live call with a doctor" className='w-[200px] rounded-2xl'/></div>
                    <p><a href="#">Book a consultation</a></p>
                </div>

               {/*  <div>
                    <div><img src={vitals} alt="vitals"width="200px" style="border-radius: 20%;" class="h-36"/></div>
                    <p><a href="#">Your health vitals record</a></p>
                </div> */}

                <div>
                    <div><img src={checker} alt="blood-glocose-checker" className='w-[200px] rounded-2xl'/></div>
                    <p><a href="#">Track your daily blood glucose level</a></p>
                </div>
            </div>
          
            <div className="md:flex justify-between px-20 space-x-6 space-y-10 md:space-y-0 mb-4">
                <div>
                    <div><img src={bmi} alt="bmi-image" className='w-[200px] rounded-2xl'/></div>
                    <p><a href="#">Track your body mass index</a></p>
                </div>

                <div>
                    <div><img src={handChecker} alt="blood-pressure-checker" className='w-[200px] rounded-2xl'/></div>
                    <p><a href="#">Track your daily blood pressure</a></p>
                </div>
                
                <div>
                    <div><img src={monitor} alt="result-display-on-monitor" className="h-36 w-[200px] rounded-2xl"/></div>
                    <p><a href="#">Monitor your vitals</a></p>
                </div>
                
               {/*  <div>
                    <div><img src={dailyPrompt} alt="prompt" width="200px" style="border-radius: 20%;" /></div>
                    <p><a href="#">Daily health prompts</a></p>
                </div> */}
          </div>
            
        </section> 
    </main>
    </div>
  )
}

export default Main