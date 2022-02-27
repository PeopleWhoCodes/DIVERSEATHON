import React from 'react'
import { LinkedIn, Instagram, YouTube, Twitter } from '@mui/icons-material'

const style = {
    extraLinksPara: `font-medium text-lg cursor-pointer`,
    heading: `text-3xl font-semibold`,
    condition: `text-[#CDCBCB] cursor-pointer`,
}

const Footer = () => {
    return (
        <div className='bg-DarkBack py-10 pb-5 flex flex-col items-center text-white gap-y-6'>
            {/* Top Links */}
            <div className='top-links flex w-full items-center justify-between px-32'>
                <div className='left flex flex-col gap-y-4'>
                    <div className='heading'>
                        <h1 className={style.heading}>Quick Links</h1>
                    </div>
                    <div className='socialLink flex gap-x-3 text-3xl'>
                        <LinkedIn sx={{ fontSize: 30 }} />
                        <Instagram sx={{ fontSize: 30 }} />
                        <YouTube sx={{ fontSize: 30 }} />
                        <Twitter sx={{ fontSize: 30 }} />
                    </div>
                </div>
                <div className='right flex flex-col gap-y-4'>
                    <div className='heading'>
                        <h1 className={style.heading}>More</h1>
                    </div>
                    <ul className='font-light text-lg gap-y-1 flex flex-col'>
                        <li className='cursor-pointer w-min'>Blogs</li>
                        <li className='cursor-pointer w-min'>Volunteers</li>
                    </ul>
                </div>
            </div>
            {/* Extra Links */}
            <div className='extra-links px-32 py-3 flex items-center gap-x-6'>
                <p className={style.extraLinksPara}>About</p>
                <p className={style.extraLinksPara}>Track</p>
                <p className={style.extraLinksPara}>Schedule</p>
                <p className={style.extraLinksPara}>Speakers</p>
                <p className={style.extraLinksPara}>Prizes</p>
                <p className={style.extraLinksPara}>Sponsors</p>
                <p className={style.extraLinksPara}>Team</p>
                <p className={style.extraLinksPara}>FAQs</p>
            </div>
            {/* Line */}
            <div className='line w-full border-t border-[#ffffffd5]'></div>
            {/* Terms&Condition */}
            <div className='terms-codition px-32 py-4 flex gap-x-6'>
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
            <div className='reserved px-32 flex flex-col items-center gap-y-6'>
                <h1 className='text-2xl font-medium'>
                    ALL RIGHTS RESERVED | © 2022 PEOPLEWHO.CODES
                </h1>
                <p className='font-thin'>
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
