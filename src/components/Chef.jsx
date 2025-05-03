import React from 'react'
import chef from "../assets/chef.jpg"
import spoon from "../assets/spoon.svg"
import semi from "../assets/semi.png"
import sign from "../assets/sign.png"
function Chef() {
    return (
        <div className='Chefcont w-[100%] mt-[20vh]'>
            <div className="maincont  flex w-[70%]  ml-auto mr-auto">
                <div className="left w-[55%] relative overflow-hidden object-center ">
                    <div className="absolute top-0 left-0 w-[100%] h-[100%]  z-0">
                        <div className="w-[100%] h-[50%]  flex justify-end">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                        <div className="w-[100%] h-[60%] ">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                    </div>
                    <div className="img w-[100%] h-[100%] relative  flex justify-center items-center z-10 ">
                        <img src={chef} className="w-[93%] h-[94%]" alt="" />
                    </div>
                </div>
                <div className="right w-[50%]  flex items-center ml-[5vw] ">
                    <div className="herokey  ">
                        <div className="minitag font-[500]">
                            <p className='text-white font-upright'> Chef’s Word</p>
                            <img src={spoon} alt="" />
                        </div>
                        <div className="boldtag  w-[80%]  text-[40px] p-0">
                            <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-[40px]'>
                                What We belive In</p>
                        </div>
                        <div className="dis">
                            <p className='mt-[4vh]  w-[80%] text-[17px] text-[#AAAAAA]'>
                                <img src={semi} alt="" className=' inline-block w-[35px]' />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
                                scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
                                Congue iaculis integer curabitur semper sit nunc.</p>
                        </div>
                        <div className="chefname mt-[5vh]">
                            <div className="name text-[#DCCA87] font-upright font-[100] text-[28px]">Kevin Luo</div>
                            <div className='text-[#AAAAAA]'>Chef & Founder</div>
                        </div>
                        <div className="sign w-[30%] mt-[5vh]"><img src={sign} alt="" className='w-[100%]' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef
