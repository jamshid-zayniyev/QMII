import React, { useState } from 'react'

// icons 
import { ImCancelCircle } from "react-icons/im";
import { FaBarsStaggered } from "react-icons/fa6";

// logo image 
import logo from "../assets/logo.png"

const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  const navItems = ['Home','About','Blog','Courses','Contact']

  return (
    <div className='containerr fixed w-full bg-[white] flex justify-between items-center h-[80px] md:h-[100px] shadow-lg'>

        {/* logo  */}
        <div className='md:w-[200px] w-[150px]'>
            <img src={logo} alt="logo" />
        </div>

        {/* navItems  */}
        <div className='text-[#0a2050] text-[16px] lg:text-[20px] font-bold '>
                <ul className={`flex flex-col md:flex-row gap-5 md:static  absolute top-[80px] transition-[1s]  ${toggle ? 'left-0' : 'left-[-100%]'}  p-5  backdrop-blur w-[50%]`}>

                  {navItems.map((item,key)=>(
                    <li key={key} className='hover:text-[#e0e05f]' onClick={()=>setToggle(!toggle)}><a href="#">{item}</a></li>
                  ))}

                </ul>
        </div>

        {/* Bars  */}
        <div className='block md:hidden text-[25px]' onClick={()=>setToggle(!toggle)}>
          {toggle ? <span><ImCancelCircle/></span> : <span><FaBarsStaggered/></span>}
        </div>

    </div>
  )
}

export default Navbar