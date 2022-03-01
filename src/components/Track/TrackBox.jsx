import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const TrackBox = () => {
    return (
        <div className='w-[400px] h-[200px] flex bg-CardBack shadow-xl rounded-lg shadow-[#BBE8E6] screen4:w-[320px] screen4:h-[150px] screen5:w-[100%]'>
            {/* Left Image */}
            <img
                src={sideImg}
                alt='img'
                className='h-[inherit] w-[200px] screen4:w-[140px] object-cover rounded-l-lg'
            />
            {/* Right Content */}
            <div className='flex items-center justify-center w-full h-full'>
                <h1 className='text-4xl font-bold text-ButtonBg screen4:text-2xl'>
                    Fintech
                </h1>
            </div>
        </div>
    )
}

export default TrackBox
