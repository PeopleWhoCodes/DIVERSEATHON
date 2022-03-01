import React from 'react'
import './Navbar.css'
import { HashLink } from 'react-router-hash-link'

const MobileNav = ({ closeMobileNav }) => {
    return (
        <div className='bottomMobileNavbar transition ease-in-out delay-150'>
            <div
                id='menu__icons__mobile_navigation'
                className='menuIcons hidden flex-col gap-y-1 items-center justify-items-center bg-Primary text-white py-4'
            >
                <TopLink
                    title={'About'}
                    id={'ABOUT'}
                    closeMobileNav={closeMobileNav}
                />
                <TopLink
                    title={'Tracks'}
                    id={'TRACK'}
                    closeMobileNav={closeMobileNav}
                />
                <TopLink
                    title={'Schedule'}
                    id={'SCHEDULE'}
                    closeMobileNav={closeMobileNav}
                />
                <TopLink
                    title={'Speakers'}
                    id={'SPEAKERS'}
                    closeMobileNav={closeMobileNav}
                />
                <TopLink
                    title={'Sponsors'}
                    id={'SPONSORS'}
                    closeMobileNav={closeMobileNav}
                />
                {/* <TopLink title={'Team'} id={'ABOUT'} closeMobileNav={closeMobileNav}/> */}
                <TopLink
                    title={'FAQs'}
                    id={'FAQ'}
                    closeMobileNav={closeMobileNav}
                />
            </div>
        </div>
    )
}

export default MobileNav

const TopLink = ({ title, id, closeMobileNav }) => {
    return (
        <HashLink
            to={`/#${id}`}
            className='text-xl font-medium cursor-pointer  w-full px-6 py-2 '
            onClick={() => closeMobileNav()}
        >
            {title}
        </HashLink>
    )
}
