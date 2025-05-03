import React from 'react'
import spoon from "../assets/spoon.svg"

function Newsletter() {
    return (
        <div className='NewslletterCont w-[100%] flex justify-center mt-[10vh] text-white'>
            <div className="content w-[65%] border border-amber-400  pb-[5vh]">
                <div className="minitag font-[500] w-[100%]  text-center mt-[5vh]">
                    <p className='text-white font-upright text-[25px]'>Newsletter</p>
                    <div className='w-[100%] flex justify-center mt-[1vh]'><img src={spoon} alt="" /></div>
                </div>
                <div className="boldtag  w-[100%]  text-[40px] p-0 text-center">
                    <p className='tagline text-[#DCCA87] m-0 font-upright text-[50px]'>
                    Subscribe to Our Newsletter</p>
                </div>
                <div className='w-[100%] text-center mt-[2vh]'><p>And never miss latest Updates!</p></div>
                <div className='subscribe w-[100%]  flex items-center justify-center mt-[3vh] gap-[10px]'>
                    <div className="input  h-[7vh] w-[60%] border">
                        <input type="text" className='w-[100%] h-[100%] pl-[10px]' />
                    </div>
                    <div className="btn flex "><button className=' bg-[#DCCA87] h-[6vh] w-[5vw]  text-[13px] text-black'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
