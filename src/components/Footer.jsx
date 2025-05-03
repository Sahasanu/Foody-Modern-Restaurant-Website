import React from 'react'
import spoon from "../assets/spoon.svg"
import insta from "../assets/insta.png"
import fb from "../assets/fb.png"
import twit from "../assets/twit.png"
function Footer() {
    return (
        <div className='footercontainer w-[100%] text-[#AAAAAA] mt-[10vh] pb-[10vh]'>
            <div className='w-[65%]  flex   ml-auto mr-auto'>
                <div className="contact w-[30%] text-center flex-col flex gap-[10px] mt-[15px]">
                    <p className='text-[20px] font-[500] text-[#dfd7ba] font-upright'>Contact Us</p>
                    <p className='mt-[10px]'>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>
                <div className="logo w-[40%]  flex flex-col items-center">
                    <div className="boldtag  w-[80%]  text-[40px] p-0 text-center">
                        <p className='tagline text-[#DCCA87] m-0 font-upright text-[50px] font-[700]'>
                            Sanu Saha</p>
                    </div>
                    <div>
                        <p className='w-[80%] ml-auto mr-auto  text-center text-white'>"The best way to find yourself is to lose yourself in the
                            service of others."</p>
                    </div>

                    <div className="icons w-[70%] flex flex-col items-center mt-[2vh]">
                        <div> <img src={spoon} alt="" /></div>
                        <div className="links flex gap-[10px] mt-[1vh]">
                            <img src={fb} alt="" />
                            <img src={insta} alt="" />
                            <img src={twit} alt="" />
                        </div>
                    </div>
                </div>
                <div className="workingHours text-center  w-[30%] mt-[15px] flex-col flex gap-[7px]">
                    <p className='text-[20px] font-[500] text-[#dfd7ba] font-upright'>Working Hours</p>
                    <p className='mt-[10px]'>Monday-Friday:</p>
                    <p>08:00 am -12:00 am</p>
                    <p> Saturday-Sunday:</p>
                    <p> 07:00am -11:00 pm</p>
                </div>
            </div>
            <div className="copy w-[100%] text-center mt-[3vh] text-white">
            2021 Gerícht. All Rights reserved
            </div>
        </div>
    )
}

export default Footer
