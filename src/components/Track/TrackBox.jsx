import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const TrackBox = () => {
    return (
        <div className='w-[480px] h-[300px] flex bg-CardBack shadow-xl rounded-lg shadow-[#BBE8E6]'>
            {/* Left Image */}
            <img
                src={sideImg}
                alt='img'
                className='h-[inherit] w-[200px] object-cover rounded-l-lg'
            />
            {/* Right Content */}
            <div className='flex items-center justify-center w-full h-full'>
                <h1 className='text-4xl font-bold text-ButtonBg'>Fintech</h1>
            </div>
        </div>
    )
}

export default TrackBox
