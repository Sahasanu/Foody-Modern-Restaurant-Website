import React from 'react'
import findus from "../assets/findus.png"
import spoon from "../assets/spoon.svg"
import semi from "../assets/semi.png"
import sign from "../assets/sign.png"
function Chef() {
    return (
        <div className='Chefcont w-[100%] mt-[20vh]'>
            <div className="maincont  flex w-[70%]  ml-auto mr-auto">
                <div className="left w-[50%]  flex items-center ml-[5vw] ">
                    <div className="herokey  ">
                        <div className="minitag font-[500]">
                            <p className='text-white font-upright text-[20px]'> contact</p>
                            <img src={spoon} alt="" />
                        </div>
                        <div className="boldtag  w-[80%]  text-[40px] p-0">
                            <p className='tagline text-[#DCCA87] m-0 font-upright mt-[10px] font-[700] text-[50px]'>
                                Find Us</p>
                        </div>
                        <div className="dis">
                            <p className='mt-[4vh]  w-[90%] text-[17px] text-[#AAAAAA]'>
                                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                        </div>
                        <div className="chefname mt-[5vh]">
                            <div className="name text-[#DCCA87] font-upright font-[500] text-[20px]">Opening Ours</div>
                            <div className='text-white flex-col flex gap-[10px] mt-[10px] font-[200] text-[15px]'>
                                <p> Mon Fri: 10:00 am 02:00 am</p>
                                <p> Sat Sun: 10:00 am 03:00 am</p>
                            </div>
                        </div>
                        <div className="btn mt-[3vh] flex"><button className=' bg-[#DCCA87] p-[8px]  text-[15px] text-black'>Know More</button>
                    </div>
                    </div>
                </div>
                <div className="right w-[50%] relative overflow-hidden object-center ">
                    <div className="absolute top-0 left-0 w-[100%] h-[100%]  z-0">
                        <div className="w-[100%] h-[50%]  flex justify-end">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                        <div className="w-[100%] h-[60%] ">
                            <div className="w-[50%] h-full bg-[#DCCA87]"></div>
                        </div>
                    </div>
                    <div className="img w-[100%] h-[100%] relative  flex justify-center items-center z-10 ">
                        <img src={findus} className="w-[93%] h-[94%]" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chef
