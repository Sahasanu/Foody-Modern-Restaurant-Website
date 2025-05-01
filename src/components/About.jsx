import React from 'react'
import knife from "../assets/knife.png"
import spoon from "../assets/spoon.svg"

function About() {
    return (

        <div className="aboutconatainer mt-[20vh]">
            <div className="bg"></div>
            <div className="content flex w-[100%] justify-center  items-center ">
                <div className="left w-[30%]  h-[35vh]">
                    <p className='font-[500] text-[#DCCA87] text-[35px] w-[100%] flex justify-end '>About Us</p>
                    <div className='w-[100%] flex justify-end'>
                        <img src={spoon} className='-rotate-180 ' alt="" />
                    </div>
                    <div className="dis">
                        <p className='mt-[4vh]  mr-0 text-[15px] text-gray-400 text-end'>Sit tellus lobortis sed senectus vivamus molestie.
                            Condimentum volutpat morbi facilisis quam scelerisque
                            sapien. Et, penatibus aliquam amet tellus</p>
                    </div>
                    <div className="btn mt-[3vh] flex justify-end"><button className=' bg-[#DCCA87] p-[8px]  text-[15px] text-black'>Know More</button>
                    </div>
                </div>
                <div className="img w-[13%] flex justify-center ">
                    <img src={knife} alt="" />
                </div>
                <div className="right w-[30%] h-[35vh]">
                    <p className='font-[500] text-[#DCCA87] text-[35px] w-[100%] flex  '>About Us</p>
                    <div className='w-[100%] flex '>
                        <img src={spoon} className="" alt="" />
                    </div>
                    <div className="dis">
                        <p className='mt-[4vh]  mr-0 text-[15px] text-gray-400 '>Sit tellus lobortis sed senectus vivamus molestie.
                            Condimentum volutpat morbi facilisis quam scelerisque
                            sapien. Et, penatibus aliquam amet tellus</p>
                    </div>
                    <div className="btn mt-[3vh]  "><button className=' bg-[#DCCA87] p-[8px]  text-[15px] text-black'>Know More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
