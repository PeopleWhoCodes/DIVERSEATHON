import React from 'react'
import { LinkedIn, Instagram, YouTube, Twitter } from '@mui/icons-material'
import { HashLink } from 'react-router-hash-link'

const style = {
    extraLinksPara: `font-medium text-lg cursor-pointer`,
    heading: `text-3xl font-semibold`,
    condition: `text-[#CDCBCB] cursor-pointer screen5:text-sm text-center`,
    socialLinks: `hover:text-[#ccc] cursor-pointer transition-color delay-200`,
}

const Footer = () => {
    return (
        <div className='bg-DarkBack py-10 pb-5 flex flex-col items-center text-white gap-y-6 screen4:gap-y-4 screen5:gap-y-2 screen5:pt-7'>
            {/* Top Links */}
            <div className='top-links flex w-full items-center justify-between px-32 screen6:w-[90%] screen6:px-0'>
                <div className='left flex flex-col gap-y-4'>
                    <div className='heading'>
                        <h1 className={style.heading}>Quick Links</h1>
                    </div>
                    <div className='socialLink flex gap-x-3 text-3xl'>
                        <LinkedIn
                            sx={{ fontSize: 30 }}
                            className={style.socialLinks}
                        />
                        <Instagram
                            sx={{ fontSize: 30 }}
                            className={style.socialLinks}
                        />
                        <YouTube
                            sx={{ fontSize: 30 }}
                            className={style.socialLinks}
                        />
                        <Twitter
                            sx={{ fontSize: 30 }}
                            className={style.socialLinks}
                        />
                    </div>
                </div>
            </div>
            {/* Extra Links */}
            <div className='extra-links py-3 flex items-center gap-x-6 screen2:gap-x-3 screen4:hidden'>
                <HashLink to='/#ABOUT' className={style.extraLinksPara}>
                    About
                </HashLink>
                <HashLink to='/#TRACK' className={style.extraLinksPara}>
                    Track
                </HashLink>
                <HashLink to='/#SCHEDULE' className={style.extraLinksPara}>
                    Schedule
                </HashLink>
                <HashLink to='/#SPEAKERS' className={style.extraLinksPara}>
                    Speakers
                </HashLink>
                <HashLink to='/#PRIZE' className={style.extraLinksPara}>
                    Prizes
                </HashLink>
                <HashLink to='/#SPONSORS' className={style.extraLinksPara}>
                    Sponsors
                </HashLink>
                {/* <HashLink to='/#' className={style.extraLinksPara}>Team</HashLink> */}
                <HashLink to='/#FAQ' className={style.extraLinksPara}>
                    FAQs
                </HashLink>
            </div>
            {/* Line */}
            <div className='line w-full border-t border-[#ffffffd5] screen4:hidden'></div>
            {/* Terms&Condition */}
            <div className='terms-codition py-4 flex gap-x-6 screen2:gap-x-3 screen2:px-8 screen5:px-4'>
                <p className={style.condition}>Terms and conditions</p>
                <span className='line bg-[#CDCBCB] w-[1px]'></span>
                <p className={style.condition}>Community Guidelines</p>
                <span className='line bg-[#CDCBCB] w-[1px]'></span>
                <p className={style.condition}>Privacy Policy</p>
                <span className='line bg-[#CDCBCB] w-[1px]'></span>
                <p className={style.condition}>Branding Guidelines</p>
            </div>
            {/* Line */}
            <div className='line w-full border-t border-[#ffffffd5]'></div>
            {/* Reserved */}
            <div className='reserved flex flex-col items-center gap-y-6'>
                <h1 className='text-2xl font-medium text-center screen5:text-xl'>
                    ALL RIGHTS RESERVED | © 2022 PEOPLEWHO.CODES
                </h1>
                <p className='font-thin screen5:text-sm'>
                    BUILT WITH ❤️ BY{' '}
                    <b className='text-ButtonBg font-normal'>
                        TEAM PEOPLEWHO.CODES
                    </b>
                </p>
            </div>
        </div>
    )
}

export default Footer
