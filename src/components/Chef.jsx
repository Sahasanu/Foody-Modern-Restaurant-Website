import React from 'react';
import chef from "../assets/chef.jpg";
import spoon from "../assets/spoon.svg";
import semi from "../assets/semi.png";
import sign from "../assets/sign.png";

function Chef() {
    return (
        <div className='Chefcont w-full mt-[10vh] sm:mt-[15vh] lg:mt-[20vh] mb-[3vh] lg:mb-[10vh]'>
            <div className="maincont flex flex-col lg:flex-row w-[90%] lg:w-[80%] ml-auto mr-auto gap-[5vh] lg:gap-[10vw]  ">
                <div className="left w-full lg:w-[35%] relative overflow-hidden object-center  pt-[2vh] lg:pt-0 pb-[2vh] lg:pb-0">
                    <div className="absolute top-0 left-0 w-full h-full z-0">
                        <div className="w-full h-[50%] flex justify-end">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                        <div className="w-full h-[60%]">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                    </div>
                    <div className="img w-full h-full relative flex justify-center items-center z-10">
                        <img src={chef} className="w-[90%] sm:w-[93%] lg:h-[94%]" alt="Chef" />
                    </div>
                </div>

                <div className="right w-full lg:w-[50%] flex items-center">
                    <div className="herokey">
                        <div className="minitag font-[500]  w-[100%] flex-col flex items-center lg:inline  ">
                            <p className='text-white  font-upright text-[18px] sm:text-[20px] md:text-[22px]'>Chef’s Word</p>
                            <div><img src={spoon} alt="Spoon" /></div>
                        </div>
                        <div className="boldtag w-full lg:w-[80%] text-[30px] sm:text-[35px] md:text-[40px] p-0">
                            <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-center lg:text-left'>
                                What We Believe In
                            </p>
                        </div>
                        <div className="dis">
                            <p className='mt-[4vh] w-full lg:w-[80%] text-[14px] sm:text-[16px] md:text-[17px] font-upright text-[#AAAAAA] text-center lg:text-left'>
                                <img src={semi} alt="Quote" className='inline-block w-[20px] sm:w-[30px] md:w-[35px]' />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
                                Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
                                scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
                                Congue iaculis integer curabitur semper sit nunc.
                            </p>
                        </div>
                        <div className="chefname mt-[3vh] lg:mt-[5vh] text-center lg:text-left">
                            <div className="name text-[#DCCA87] font-upright font-[100] text-[20px] sm:text-[25px] md:text-[28px]">
                                Kevin Luo
                            </div>
                            <div className='text-[14px] sm:text-[15px] md:text-[16px]'>Chef & Founder</div>
                        </div>
                        <div className="sign w-[50%] sm:w-[40%] md:w-[30%] lg:mt-[5vh] mx-auto lg:mx-0">
                            <img src={sign} alt="Signature" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chef;
