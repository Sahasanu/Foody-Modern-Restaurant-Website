import React from 'react';
import spoon from "../assets/spoon.svg";
import hero_image from "../assets/hero_image.jpg";

function Hero() {
    return (
        <div className='herocont w-full'>
            <div className='w-[100%] flex lg:w-[90%]  text-white  flex-col lg:flex-row mt-[2vh] lg:mt-[5vh] ml-auto mr-auto  '>
                <div className=' w-[100%] lg:w-[50%] flex right gap-[5px] '>
                    <div className="w-[5%] lg:w-[15%]  flex justify-center items-center   ">
                        <div className="hastage pt-[10px] lg:pt-0  flex  gap-[20px]  -rotate-90 h-[3vh] lg:h-[5vh] text-white font-[400] font-upright text-[16px] sm:text-[18px] md:text-[20px]">
                            <p>#FoodyGuy</p>
                            <p>#Bar</p>
                        </div>
                    </div>

                    <div className="left w-[90%]  lg:w-[90%] flex items-center lg:ml-[5vw] mb-[3vh] lg:mb-0">
                        <div className="herokey">
                            <div className="minitag font-[500] lg:mt-[5vh]">
                                <p className='font-upright text-center lg:text-left text-[18px] sm:text-[20px] md:text-[22px]'>Chase the new Flavour</p>
                                <img src={spoon} alt="" className="mx-auto lg:mx-0" />
                            </div>
                            <div className="boldtag w-full lg:w-[80%] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] p-0">
                                <p className='tagline text-[#DCCA87] m-0 leading-[50px] sm:leading-[70px] md:leading-[85px] lg:leading-[95px] font-upright text-center lg:text-left'>
                                    The key to
                                    Fine dining
                                </p>
                            </div>
                            <div className="dis">
                                <p className='mt-[2vh] lg:mt-[4vh] w-full lg:w-[80%] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#AAAAAA] text-center lg:text-left'>
                                    Sit tellus lobortis sed senectus vivamus molestie.
                                    Condimentum volutpat morbi facilisis quam scelerisque
                                    sapien. Et, penatibus aliquam amet tellus
                                </p>
                            </div>
                            <div className="btn  mt-[3vh] lg:mt-[5vh] flex justify-center lg:justify-start">
                                <button className='bg-[#DCCA87] p-[7px] sm:p-[10px] md:p-[12px] rounded-[3px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-black font-upright'>Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right w-[90%] ml-auto mr-auto lg:w-[35%] relative overflow-hidden object-center mt-[3vh] lg:mt-0 pt-[2vh] lg:pt-0 pb-[2vh] lg:pb-[0vh]">
                    <div className="absolute top-0 left-0 w-full h-full z-0  ">
                        <div className="w-full h-[50%] flex justify-end">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                        <div className="w-full h-[60%]">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                    </div>
                    <div className="img w-full h-full relative  flex justify-center items-center z-10">
                        <img src={hero_image} className="w-[90%]  lg:w-[93%]  lg:h-[94%]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
