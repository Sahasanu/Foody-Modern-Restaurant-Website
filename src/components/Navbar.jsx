import React, { useState } from 'react';
import menuicon from "../assets/menuicon.svg"
import closeicon from "../assets/close.svg"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }

  return (
    <div>
      <div className="navcont flex text-white w-[100%] justify-between h-[9vh] items-center bg-black">
        <div className="logo ml-[3vw] lg:ml-[7vh] font-bold text-[40px] font-upright">Foody</div>
        <div className="opts hidden md:flex w-[30%]">
          <ul className="flex w-[100%] justify-around font-[400] text-[13px]">
            <li onClick={() => { scrollto("home") }} className="hover:font-[900]">Home</li>
            <li className="hover:font-[900]">Pages</li>
            <li onClick={() => { scrollto("findus") }} className="hover:font-[900]">Find us</li>
            <li onClick={() => { scrollto("newslater") }} className="hover:font-[900]">Newslater</li>
            <li onClick={() => { scrollto("chef") }} className="hover:font-[900]">Chef</li>
          </ul>
        </div>
        <div className="rght hidden md:flex w-[20%] justify-between mr-[4vw]">
          <div className="signup w-[60%] h-[100%] font-[600] border-r-[2px]">
            <div className="links text-[13px] font-[400]">
              <a href="" className="hover:font-[900]">Log in</a> / <a href="" className="hover:font-[900]">Registration</a>
            </div>
          </div>
          <div className="book  w-[40%] text-center hover:font-[900] text-[13px] font-[400]">Book Table</div>
        </div>

        <div
          className="hamburger md:hidden mr-[4vw] cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? closeicon : menuicon} alt="" />
        </div>
      </div>

      <div className={`mobile-menu bg-[#05040493] text-white w-[100%] p-[20px] md:hidden absolute z-12 ${isMenuOpen ? 'inline-block' : 'hidden'}`}>
        <ul className="flex flex-col gap-[20px] font-[500] text-[13px] items-center">
          <li onClick={() => { scrollto("home") }} className="hover:font-[900]">Home</li>
          <li className="hover:font-[900]">Pages</li>
          <li onClick={() => { scrollto("findus") }} className="hover:font-[900]">Find us</li>
          <li onClick={() => { scrollto("newslater") }} className="hover:font-[900]">Newslater</li>
          <li onClick={() => { scrollto("chef") }} className="hover:font-[900]">Chef</li>
          <li className="hover:font-[900]">Log in / Registration</li>
          <li className="hover:font-[900]">Book Table</li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
