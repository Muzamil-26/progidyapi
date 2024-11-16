import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black gap-10 px-[30px] text-white py-12">
           <div className="main-footer w-full h-full flex flex-col items-center justify-center">
                <NavLink to={"https://github.com/Muzamil-26"} > Made By Muzamil Khan <span className="text-red-500">♥</span>.</NavLink>
           </div>
    </div>
  )
}

export default Footer


    