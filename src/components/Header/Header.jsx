import React from 'react'
import logo from "../../assets/main-logo-512.png";

const Header = () => {
    return (
        <div className='header flex justify-between items-center py-2 px-4 bg-[#F1F1F1] text-[#676767] text-[25px]'>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src={logo} alt="" />
                <p>Al-Jabr</p>
            </div>
            <div>
                <h1>Murojatlar</h1>
            </div>
        </div>
    )
}

export default Header
