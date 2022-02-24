import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar w-full h-20 flex items-center justify-between px-5 py-3'>
            {/* left */}
            <div className='left'>
                <img src={logo} alt='PWC' className='w-[45px] h-[45px]' />
            </div>
            {/* center */}
            <div className='center flex items-center justify-between w-1/2'>
                <TopLink title={'About'} />
                <TopLink title={'Tracks'} />
                <TopLink title={'Schedule'} />
                <TopLink title={'Speakers'} />
                <TopLink title={'Sponsors'} />
                <TopLink title={'Team'} />
                <TopLink title={'FAQs'} />
            </div>
            {/* right */}
            <div className='right'>
                <button className='px-5 py-1 rounded-full bg-ButtonBg text-white text-xl'>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar

const TopLink = ({ title }) => {
    return <p className='text-xl font-medium cursor-pointer'>{title}</p>
}
