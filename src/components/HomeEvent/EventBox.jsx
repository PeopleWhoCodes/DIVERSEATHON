import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const EventBox = () => {
    return (
        <div>
            <div className='w-[380px] h-[] flex flex-col bg-CardBack shadow-xl rounded-lg shadow-[#13181F]'>
                {/* Left Image */}
                <div className='overflow-hidden h-[200px]'>
                    <img
                        src={sideImg}
                        alt='img'
                        className='h-full w-full object-cover rounded-t-lg transition-transform hover:scale-125'
                    />
                </div>
                {/* Right Content */}
                <div className='flex flex-col pb-6 pt-2 px-4 w-full h-full gap-y-1'>
                    <h3>15 March, 2022</h3>
                    <h1 className='text-xl font-bold text-ButtonBg'>
                        Portfolio Development Bootcamp
                    </h1>
                    <h3 className='italic font-medium'>View Event</h3>
                </div>
            </div>
        </div>
    )
}

export default EventBox
