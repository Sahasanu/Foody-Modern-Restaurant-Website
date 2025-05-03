import React from 'react';
import findus from "../assets/findus.png";
import spoon from "../assets/spoon.svg";

function FindUs() {
    return (
        <div className='Chefcont w-full mt-[10vh] sm:mt-[15vh] lg:mt-[20vh]'>
            <div className="maincont flex flex-col lg:flex-row w-[90%] lg:w-[70%] ml-auto mr-auto gap-[5vh] lg:gap-[10vw]">

                <div className="left w-full lg:w-[50%] flex items-center ">
                    <div className="herokey">
                        <div className="minitag font-[500] w-[100%] flex lg:inline flex-col items-center">
                            <p className='text-white font-upright text-[18px] sm:text-[20px] md:text-[22px]'>Contact</p>
                            <img src={spoon} alt="Spoon" />
                        </div>
                        <div className="boldtag w-full lg:w-[80%] text-[30px] sm:text-[40px] md:text-[50px] p-0 ">
                            <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-center lg:text-left'>
                                Find Us
                            </p>
                        </div>
                        <div className="dis">
                            <p className='mt-[2vh] lg:mt-[4vh] w-[80%] ml-auto mr-auto lg:ml-0 lg:mr-0 lg:w-[80%] text-[14px] sm:text-[16px] md:text-[17px] text-[#AAAAAA] text-center lg:text-left'>
                                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                            </p>
                        </div>
                        <div className="chefname mt-[3vh] lg:mt-[5vh] text-center lg:text-left">
                            <div className="name text-[#DCCA87] font-upright font-[500] text-[18px] sm:text-[20px] md:text-[22px]">
                                Opening Hours
                            </div>
                            <div className='text-white flex flex-col gap-[10px] mt-[10px] font-[200] text-[14px] sm:text-[15px] md:text-[16px]'>
                                <p>Mon - Fri: 10:00 am - 02:00 am</p>
                                <p>Sat - Sun: 10:00 am - 03:00 am</p>
                            </div>
                        </div>
                        <div className="btn mt-[3vh] flex justify-center lg:justify-start">
                            <button className='bg-[#DCCA87] p-[8px] sm:p-[10px] md:p-[12px] text-[14px] sm:text-[15px] md:text-[16px] text-black'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="right w-full lg:w-[50%] lg:min-h-[80vh] relative overflow-hidden object-center  pt-[2vh] lg:pt-0 pb-[2vh] lg:pb-0">
                    <div className="absolute top-0 left-0 w-full h-full z-0">
                        <div className="w-full h-[50%] flex justify-end">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                        <div className="w-full h-[60%]">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                    </div>
                    <div className="img w-full h-full relative flex justify-center items-center z-10">
                        <img src={findus} className="w-[90%] sm:w-[93%] lg:h-[94%]" alt="Chef" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindUs;
