import React from 'react';
import itemlog from "../assets/itemlog.png";
import luarel from "../assets/laurel.png";
import spoon from "../assets/spoon.svg";
import food from "../assets/food.png";
import data from '../data/data';

function Laurel() {
    return (
        <div className='maincont text-white w-full flex flex-col lg:flex-row mt-[5vh] sm:mt-[10vh] lg:mt-[15vh] gap-[5vh] lg:gap-0'>
            <div className='  flex flex-col lg:flex-row  w-full lg:w-[90%]  '>
                <div className='flex  lg:w-[70%]   justify-between lg:flex-row flex-col'>
                    <div className="logocont hidden w-full sm:w-[30%] lg:w-[20%] h-[15vh] lg:inline justify-center    ">
                        <img src={itemlog} alt="" className='w-[50%] sm:w-[70%] lg:w-[60%] h-full' />
                    </div>
                    <div className="luarelscont  sm:w-[70%] lg:w-[80%]  lg:mt-[15vh]  ">
                        <div className="head">
                            <div className="minitag font-[500]  w-[100%] flex flex-col items-center lg:inline">
                                <p className='text-white text-[16px] sm:text-[18px] md:text-[20px] font-upright'>Awards & recognition</p>
                                <div><img src={spoon} alt="" /></div>
                            </div>
                            <div className="boldtag w-full lg:w-[80%] text-[30px] sm:text-[35px] md:text-[40px] p-0">
                                <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-center lg:text-left'>
                                    Our Laurels
                                </p>
                            </div>
                        </div>
                        <div className="laurels w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[2vh] lg:mt-[5vh]">
                            {data.awards.map((item, index) => (
                                <div key={index} className="lourel flex gap-[10px] h-auto items-center">
                                    <div className='image invert w-[20%] lg:w-[30%] sm:w-[25%] relative'>
                                        <div className="bg font-[500] text-[45px] sm:text-[30px] md:text-[35px] text-[#070707b3] absolute bottom-2 left-0 w-full h-full z-10 flex justify-center items-center">
                                            {index + 1}
                                        </div>
                                        <img src={luarel} alt="" />
                                    </div>
                                    <div className='lourelname w-[70%]'>
                                        <p className='text-[#DCCA87] font-[500] font-upright text-[20px] sm:text-[16px] md:text-[18px]'>{item.title}</p>
                                        <p className='text-[#AAAAAA] text-[14px] sm:text-[14px] md:text-[15px]'>{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="foodimg w-full sm:w-[70%] lg:w-[30%] relative mt-[5vh] lg:mt-[10vh]">
                    <div className="bg font-[500] text-[450px] sm:text-[350px] md:text-[450px] text-[#a4a4a2b3] absolute top-0 left-0 w-full h-full z-0 flex  items-center">
                        S
                    </div>
                    <div className="image w-[75%] sm:w-[70%] md:w-[60%] lg:w-[80%] mx-auto">
                        <img src={food} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Laurel;
