import React from 'react';
import bottle from "../assets/bottle.png";
import spoon from "../assets/spoon.svg";
import data from '../data/data';

function About() {
    return (
        <div className="aboutconatainer mt-[5vh] sm:mt-[15vh] lg:mt-[20vh] relative text-white">
            {/* Header Section */}
            <div className="head w-[100%] flex flex-col items-center gap-[8px]">
                <p className="text-[18px] sm:text-[17px] md:text-[20px] font-upright">Menu that fits your palate</p>
                <div><img src={spoon} alt="" /></div>
                <p className="text-[45px] sm:text-[40px] md:text-[45px] lg:text-[50px] text-[#DCCA87] font-upright">Today’s Special</p>
            </div>

            {/* Content Section */}
            <div className="content flex flex-col lg:flex-row w-[100%] justify-center gap-[30px] mt-[5vh]">
                {/* Left Section */}
                <div className="left w-[90%] ml-auto mr-auto sm:w-[60%] md:w-[40%] lg:w-[20%]">
                    <ul>
                        <div>
                            <p className="text-center text-[35px] sm:text-[30px] md:text-[35px] font-upright font-bold">Wine & Beer</p>
                        </div>
                        <div className="menus mt-[2vh] flex flex-col gap-[20px]">
                            {data.wines.map((item, index) => (
                                <li key={index} className="flex flex-col gap-[8px]">
                                    <div className="main flex w-[100%] justify-between items-center">
                                        <div className="text-[#DCCA87]">{item.title}</div>
                                        <div className="border w-[30%] h-[1px] bg-[#DCCA87]"></div>
                                        <div>{item.price}</div>
                                    </div>
                                    <div className="text-[#AAAAAA] text-[12px] sm:text-[13px]">{item.tags}</div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>

                {/* Center Image */}
                <div className="img w-full sm:w-[40%] md:w-[30%] lg:w-[20%] flex justify-center">
                    <img src={bottle} alt="bottle" className="w-[70%] sm:w-[80%] md:w-[90%]" />
                </div>

                {/* Right Section */}
                <div className="right w-[90%] ml-auto mr-auto sm:w-[60%] md:w-[40%] lg:w-[20%]">
                    <ul>
                        <div>
                            <p className="text-center text-[35px] sm:text-[30px] md:text-[35px] font-bold font-upright">Cocktail</p>
                        </div>
                        <div className="menus mt-[2vh] flex flex-col gap-[20px]">
                            {data.cocktails.map((item, index) => (
                                <li key={index} className="flex flex-col gap-[8px]">
                                    <div className="main flex w-[100%] justify-between items-center">
                                        <div className="text-[#DCCA87] w-[40%]">{item.title}</div>
                                        <div className="border w-[30%] h-[1px] bg-[#DCCA87]"></div>
                                        <div className='w-[10%]'>{item.price}</div>
                                    </div>
                                    <div className="text-[#AAAAAA] text-[12px] sm:text-[13px]">{item.tags}</div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
