import React from 'react'
import itemlog from "../assets/itemlog.png"
import luarel from "../assets/laurel.png"
import spoon from "../assets/spoon.svg"
import food from "../assets/food.png"
import data from '../data/data'; 

function Laurel() {
    return (
        <div className='maincont text-white w-[100%] flex  mt-[5vh]'>
            <div className="logocont w-[15%] h-[20vh]  flex justify-center"><img src={itemlog} alt="" className='' /></div>
            <div className="luarelscont w-[45%]  mt-[20vh]">
                <div className="head">
                    <div className="minitag font-[500]">
                        <p className='text-white text-[18px] font-upright'> Awards & recognition</p>
                        <img src={spoon} alt="" />
                    </div>
                    <div className="boldtag  w-[80%]  text-[40px] p-0">
                        <p className='tagline text-[#DCCA87] m-0 font-upright font-[700] text-[40px]'>
                            Our Laurels</p>
                    </div>
                </div>
                <div className="laurels w-[80%]  grid grid-cols-2 gap-[10px] mt-[5vh]">
                    {data.awards.map((item, index) => (
                        <div key={index} className="lourel 1 flex gap-[10px]  h-[15vh] ">
                        <div className='image invert w-[35%] relative'>
                            <div className="bg font-[500] text-[35px] text-[#070707b3] absolute top-0 left-0  w-[100%] h-[100%]  z-11 justify-center flex ">{index+1}</div>
                            <img src={luarel} alt="" />
                        </div>
                        <div className='lourelname w-[80%]'>
                            <p className='text-[#DCCA87] font-[500]  font-upright'>{item.title}</p>
                            <p className='text-[#AAAAAA]'>{item.subtitle}</p>
                        </div>
                    </div>
                    ))}
                    
                   
                </div>
            </div>
            <div className="foodimg w-[30%]  relative">
                <div className="bg font-[500] text-[450px] text-[#a4a4a2b3] absolute top-0 left-0   w-[20%] h-[100%]  z-11 justify-center flex ">S</div>
                <div className="image w-[80%]">
                    <img src={food} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Laurel
