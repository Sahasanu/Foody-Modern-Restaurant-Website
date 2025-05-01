import React from 'react'
import bottle from "../assets/bottle.png"
import spoon from "../assets/spoon.svg"

function About() {
    return (

        <div className="aboutconatainer mt-[20vh]  relative text-white">
            <div className="head w-[100%] flex flex-col  items-center  gap-[8px]">
                <p className='text-[17px]'> Menu that fits you palatte</p>
                <div className=""><img src={spoon} alt="" /></div>
                <p className='text-[45px] text-[#DCCA87]'>Today’s Special</p>
            </div>
            <div className="content flex w-[100%] justify-center gap-[20px] mt-[5vh]">
                <div className="left w-[20%]   ">
                    <ul>
                        <div><p className='text-center text-[30px]'>Wine & Beer</p></div>
                        <div className="menus mt-[2vh] flex flex-col gap-[10px]">
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$56</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '> Catena Malbec</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$54</div>
                                </div>
                                <div className='text-gray-500'>AR | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$56</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$44</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$44</div>
                                </div>
                                <div className='text-gray-500'> FR | 750 ml</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Rhino Pale Ale</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$34</div>
                                </div>
                                <div className='text-gray-500'>CA | 750 ml</div>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="img w-[20%]">
                    <img src={bottle} alt="" />
                </div>
                <div className="right w-[20%]   ">
                    <ul>
                        <div><p className='text-center text-[30px]'>Wine & Beer</p></div>
                        <div className="menus mt-[2vh]  flex flex-col gap-[10px]">
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$56</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '> Catena Malbec</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$54</div>
                                </div>
                                <div className='text-gray-500'>AR | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$56</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$44</div>
                                </div>
                                <div className='text-gray-500'>AU | Bottle</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Chapel Hill Shiraz</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$44</div>
                                </div>
                                <div className='text-gray-500'> FR | 750 ml</div>
                            </li>
                            <li className=' flex flex-col gap-[8px]'>
                                <div className="main flex  w-[100%] justify-between items-center">
                                    <div className=' text-[#DCCA87] '>Rhino Pale Ale</div>
                                    <div className='border w-[30%] h-[0]'></div>
                                    <div>$34</div>
                                </div>
                                <div className='text-gray-500'>CA | 750 ml</div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About
