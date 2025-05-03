import React from 'react';
import knife from "../assets/knife.png";
import spoon from "../assets/spoon.svg";

function About() {
    return (
        <div className="aboutconatainer  mt-[10vh] lg:mt-[20vh] relative">
            {/* Background Letter */}
            <div className="bg font-[500]  text-[350px] sm:text-[250px] md:text-[350px] lg:text-[450px] text-[#272727] absolute top-0 left-0 w-[100%] h-[50vh] lg:h-[100%] z-0 justify-center items-center flex ">
                S
            </div>
            {/* Content Section */}
            <div className="content flex  lg:flex-row w-[100%] justify-center items-center z-10 relative ">
                {/* Left Section */}
                <div className="left w-[45%] lg:w-[30%] h-auto lg:h-[35vh]  lg:mb-0">
                    <p className="font-[500] text-[#DCCA87] text-[25px] sm:text-[30px] md:text-[35px] w-[100%] flex justify-center lg:justify-end font-upright">
                        About Us
                    </p>
                    <div className="w-[100%] flex justify-center lg:justify-end">
                        <img src={spoon} className="-rotate-180" alt="spoon" />
                    </div>
                    <div className="dis">
                        <p className="mt-[4vh] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#AAAAAA] text-center lg:text-end">
                            Sit tellus lobortis sed senectus vivamus molestie.
                            Condimentum volutpat morbi facilisis quam scelerisque
                            sapien. Et, penatibus aliquam amet tellus
                        </p>
                    </div>
                    <div className="btn mt-[3vh] flex justify-center lg:justify-end">
                        <button className="bg-[#DCCA87] p-[8px] sm:p-[10px] md:p-[12px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-black">
                            Know More
                        </button>
                    </div>
                </div>

                {/* Center Image */}
                <div className="img w-[10%] h-[50vh] lg:h-auto sm:w-[20%] md:w-[15%] lg:w-[13%] flex justify-center mb-[5vh] lg:mb-0">
                    <img src={knife} alt="knife" />
                </div>

                {/* Right Section */}
                <div className="right w-[45%] lg:w-[30%] h-auto lg:h-[35vh]">
                    <p className="font-[500] text-[#DCCA87] text-[25px] sm:text-[30px] md:text-[35px] w-[100%] flex justify-center lg:justify-start font-upright">
                        Our History
                    </p>
                    <div className="w-[100%] flex justify-center lg:justify-start">
                        <img src={spoon} alt="spoon" />
                    </div>
                    <div className="dis">
                        <p className="mt-[4vh] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#AAAAAA] text-center lg:text-start">
                            Sit tellus lobortis sed senectus vivamus molestie.
                            Condimentum volutpat morbi facilisis quam scelerisque
                            sapien. Et, penatibus aliquam amet tellus
                        </p>
                    </div>
                    <div className="btn mt-[3vh] flex justify-center lg:justify-start">
                        <button className="bg-[#DCCA87] p-[8px] sm:p-[10px] md:p-[12px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-black">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
