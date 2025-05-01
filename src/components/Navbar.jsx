import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="navcont flex text-white w-[100%] justify-between h-[6vh] items-center bg-black">
        <div className="logo ml-[7vh] font-bold text-[30px] ">Sanu Saha</div>
        <div className="opts  w-[30%]">
            <ul className='flex  w-[100%] justify-around font-[600]'>
                <li className='hover:font-[900]'>Home</li>
                <li className='hover:font-[900]'>Pages</li>
                <li className='hover:font-[900]'>Contact Us</li>
                <li className='hover:font-[900]'>Blog</li>
                <li className='hover:font-[900]'>Landing</li>
            </ul>
        </div>
        <div className="rght   flex w-[20%]   justify-between mr-[4vw]  ">
        <div className="signup w-[60%]  font-[600] border-r-[2px] ">
            <div className="links  "><a href="" className='hover:font-[900]'>Log in</a>  / <a href="" className='hover:font-[900]'>Registration</a></div>
        </div>
        <div className="book font-[600] w-[40%] text-center hover:font-[900] ">Book Table</div></div>
      </div>
    </div>
  )
}

export default Navbar
