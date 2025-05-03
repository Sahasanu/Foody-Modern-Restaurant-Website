import React from 'react'
import spoon from "../assets/spoon.svg"
import gp1 from "../assets/gp1.png"
import gp2 from "../assets/gp2.png"
import gp3 from "../assets/gp3.png"
import gp4 from "../assets/gp4.png"

function Gallery() {
    return (
        <div className='gallerycont flex mt-[10vh]'>
            <div className="left w-[30%]  flex items-center ml-[5vw] ">
                <div className="herokey  ">
                    <div className="minitag font-[500]">
                        <p className='text-white font-upright text-[20px] '> instagram</p>
                        <img src={spoon} alt="" />
                    </div>
                    <div className="boldtag  w-[80%]  text-[40px] p-0">
                        <p className='tagline text-[#DCCA87] m-0 font-upright text-[50px] font-[700]'>
                            Photo Gallery</p>
                    </div>
                    <div className="dis">
                        <p className='mt-[4vh]  w-[80%] text-[15px] text-[#AAAAAA]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem ducimus asperiores!</p>
                    </div>
                    <div className="btn mt-[3vh] flex"><button className=' bg-[#DCCA87] p-[8px]  text-[15px] text-black'>Know More</button>
                    </div>
                </div>
            </div>
            <div className="right  w-[70%] flex  border-white gap-[30px]">
                <div className="image 1 w-[20vw] h-[45vh] ">
                    <img src={gp1} alt="" className='w-[100%] h-[100%] border-[2px] border-yellow-600' />
                </div>
                <div className="image 2 w-[20vw] h-[45vh] ">
                    <img src={gp2} alt="" className='w-[100%] h-[100%] border-[2px] border-yellow-600' />
                </div>
                <div className="image 3 w-[20vw] h-[45vh] ">
                    <img src={gp3} alt="" className='w-[100%] h-[100%] border-[2px] border-yellow-600' />
                </div>
                <div className="image 4 w-[20vw] h-[45vh] ">
                    <img src={gp4} alt="" className='w-[100%] h-[100%] border-[2px] border-yellow-600' />
                </div>
            </div>

        </div>
    )
}

export default Gallery
