import React from 'react'
import spoon from "../assets/spoon.svg"
import hero_image from "../assets/hero_image.jpg"


function Hero() {
    return (
        <div className='herocont w-[100%] text-white flex mt-[5vh]'>
            <div className="div w-[7%]  flex items-center  ml-[4vw]">
                <div className="hastage flex  -rotate-90 gap-[20px] h-[5vh] text-white font-[700]">
                    <p>#SanuSaha</p>
                    <p>#Bar</p>
                </div>
            </div>
            <div className="left w-[34%]  flex items-center ml-[5vw] ">
                <div className="herokey  ">
                    <div className="minitag font-[500] mt-[5vh]">
                        <p> Chase the new Flavour</p>
                        <img src={spoon} alt="" />
                    </div>
                    <div className="boldtag  w-[80%]  text-[80px] p-0">
                        <p className='tagline text-[#DCCA87] m-0 leading-[95px]'>
                            The key to
                            Fine dining</p>
                    </div>
                    <div className="dis">
                        <p className='mt-[4vh]  w-[80%] text-[17px] text-gray-400'>Sit tellus lobortis sed senectus vivamus molestie.
                            Condimentum volutpat morbi facilisis quam scelerisque
                            sapien. Et, penatibus aliquam amet tellus</p>
                    </div>
                    <div className="btn mt-[5vh]"><button className=' bg-[#DCCA87] p-[7px] rounded-[3px] text-[15px] text-black'>Explore Now</button>
                    </div>
                </div>
            </div>
            <div className="right w-[35%] relative overflow-hidden object-center ">
                <div className="absolute top-0 left-0 w-[100%] h-[100%]  z-0">
                    <div className="w-[100%] h-[50%]  flex justify-end">
                        <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                    </div>
                    <div className="w-[100%] h-[60%] ">
                        <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                    </div>
                </div>
                <div className="img w-[100%] h-[100%] relative  flex justify-center items-center z-10 ">
                <img src={hero_image} className="w-[93%] h-[94%]" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero
