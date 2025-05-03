import React from 'react';
import spoon from "../assets/spoon.svg";

function Newsletter() {
    return (
        <div className='NewslletterCont w-full flex justify-center mt-[10vh] text-white'>
            <div className="content w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] border border-amber-400 pb-[5vh]">
                <div className="minitag font-[500] w-full text-center mt-[5vh]">
                    <p className='text-white font-upright text-[20px] sm:text-[25px] md:text-[30px]'>Newsletter</p>
                    <div className='w-full flex justify-center mt-[1vh]'>
                        <img src={spoon} alt="" />
                    </div>
                </div>
                <div className="boldtag w-full text-center mt-[2vh]">
                    <p className='tagline text-[#DCCA87] m-0 font-upright text-[30px] sm:text-[40px] md:text-[50px]'>
                        Subscribe to Our Newsletter
                    </p>
                </div>
                <div className='w-full text-center mt-[2vh]'>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px]'>And never miss latest Updates!</p>
                </div>
                <div className='subscribe w-full flex flex-col sm:flex-row items-center justify-center mt-[3vh] gap-[10px]'>
                    <div className="input h-[6vh] sm:h-[7vh] w-[90%]  sm:w-[60%] border">
                        <input
                            type="text"
                            className='w-full h-full pl-[10px] text-[14px] sm:text-[15px] md:text-[16px]'
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="btn lg:mt-0 mt-[2vh]">
                        <button className='bg-[#DCCA87] h-[4vh] p-[5px] lg:h-[6vh] sm:p-[10px] md:p-[12px] text-[14px] sm:text-[15px] md:text-[16px] text-black'>
                            Subscribe Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
