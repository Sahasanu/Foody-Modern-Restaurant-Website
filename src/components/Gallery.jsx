import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import spoon from "../assets/spoon.svg";
import gp1 from "../assets/gp1.png";
import gp2 from "../assets/gp2.png";
import gp3 from "../assets/gp3.png";
import gp4 from "../assets/gp4.png";

function Gallery() {
    const images = [gp1, gp2, gp3, gp4];

    return (
        <div className='gallerycont flex flex-col lg:flex-row mt-[10vh] gap-[5vh] lg:gap-0'>
            {/* Left Section */}
            <div className="left w-full lg:w-[30%] flex items-center justify-center lg:justify-start lg:ml-[5vw]">
                <div className="herokey">
                    <div className="minitag font-[500] flex flex-col lg:inline w-[100%] items-center">
                        <p className='text-white font-upright text-[30px] sm:text-[25px] md:text-[30px]'>Instagram</p>
                        <div><img src={spoon} alt="Spoon" /></div>
                    </div>
                    <div className="boldtag w-full lg:w-[80%] text-[30px] sm:text-[40px] md:text-[50px] p-0">
                        <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-center lg:text-left'>
                            Photo Gallery
                        </p>
                    </div>
                    <div className="dis">
                        <p className='mt-[3vh] lg:mt-[4vh] w-[80%] mr-auto ml-auto lg:mr-0 lg:ml-0 lg:w-[80%] text-[14px] sm:text-[15px] md:text-[16px] text-[#AAAAAA] text-center lg:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem ducimus asperiores!
                        </p>
                    </div>
                    <div className="btn mt-[3vh] flex justify-center lg:justify-start">
                        <button className='bg-[#DCCA87] p-[8px] sm:p-[10px] md:p-[12px] text-[14px] sm:text-[15px] md:text-[16px] text-black'>
                            Know More
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="right w-full lg:w-[70%] block lg:hidden">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="image w-[90%] mx-auto h-[55vh]">
                                <img src={img} alt={`Gallery ${index + 1}`} className='w-full h-full object-cover border-[2px] border-yellow-600 rounded-md' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            
            <div className="right w-full  lg:w-[70%] hidden lg:flex flex-wrap justify-between gap-[20px]  border-amber-100">
                {images.map((img, index) => (
                    <div key={index} className="image w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh]">
                        <img src={img} alt={`Gallery ${index + 1}`} className='w-full h-full object-cover border-[2px] border-yellow-600' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
