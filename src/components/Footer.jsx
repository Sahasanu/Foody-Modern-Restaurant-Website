import React from 'react';
import spoon from "../assets/spoon.svg";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twit from "../assets/twit.png";

function Footer() {
    return (
        <div className='footercontainer w-full text-[#AAAAAA] mt-[10vh] pb-[10vh]'>
            <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] flex flex-col lg:flex-row justify-between ml-auto mr-auto  gap-[3vh] lg:gap-[5vh]'>
               
                <div className="contact w-full lg:w-[30%] text-center flex flex-col gap-[10px] mt-[15px]">
                    <p className='text-[18px] sm:text-[20px] font-[500] text-[#dfd7ba] font-upright'>Contact Us</p>
                    <p className='mt-[10px] text-[14px] sm:text-[15px] md:text-[16px]'>9 W 53rd St, New York, NY 10019, USA</p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>+1 212-344-1230</p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>+1 212-555-1230</p>
                </div>

           
                <div className="logo w-full lg:w-[40%] flex flex-col items-center">
                    <div className="boldtag w-[80%] text-[50px] sm:text-[40px] md:text-[50px] text-center">
                        <p className='tagline text-[#DCCA87] m-0 font-upright font-[700]'>Foody Guy</p>
                    </div>
                    <div>
                        <p className='w-[80%] ml-auto mr-auto text-center text-white text-[14px] sm:text-[15px] md:text-[16px]'>
                            "The best way to find yourself is to lose yourself in the service of others."
                        </p>
                    </div>
                    <div className="icons w-[70%] flex flex-col items-center mt-[2vh]">
                        <div><img src={spoon} alt="" /></div>
                        <div className="links flex gap-[10px] mt-[1vh]">
                            <img src={fb} alt="Facebook" />
                            <img src={insta} alt="Instagram" />
                            <img src={twit} alt="Twitter" />
                        </div>
                    </div>
                </div>

                <div className="workingHours w-full lg:w-[30%] text-center flex flex-col gap-[7px] mt-[15px]">
                    <p className='text-[18px] sm:text-[20px] font-[500] text-[#dfd7ba] font-upright'>Working Hours</p>
                    <p className='mt-[10px] text-[14px] sm:text-[15px] md:text-[16px]'>Monday-Friday:</p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>08:00 am - 12:00 am</p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>Saturday-Sunday:</p>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>07:00 am - 11:00 pm</p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copy w-full text-center mt-[3vh] text-white text-[14px] sm:text-[15px] md:text-[16px]">
                2025 Sanu Saha. All Rights reserved
            </div>
        </div>
    );
}

export default Footer;
