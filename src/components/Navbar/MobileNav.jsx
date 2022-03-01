import React from 'react'
import './Navbar.css'

const MobileNav = ({ closeMobileNav }) => {
    return (
        <div className='bottomMobileNavbar transition ease-in-out delay-150'>
            <div
                id='menu__icons__mobile_navigation'
                className='menuIcons hidden flex-col gap-y-2 items-center justify-items-center bg-[#5b94e317] text-white py-4'
            ></div>
        </div>
    )
}

export default MobileNav
