import React from 'react'

const TrackBox = ({ data }) => {
    return (
        <div className='w-[200px] h-[250px] flex bg-CardBack rounded-lg shadow-[#BBE8E6] screen4:w-[320px] screen4:h-[150px] screen5:w-[100%]'>
            {/* Left Image */}
            {/* <img
                src={data.img}
                alt={data.title}
                className='h-[inherit] w-[200px] screen4:w-[140px] object-cover rounded-l-lg'
            /> */}
            <div className='h-[inherit] w-[200px] screen4:w-[140px] object-cover rounded-lg bg-[#C4C4C4]'></div>
            {/* Right Content */}
            {/* <div className='flex items-center justify-center w-full h-full'>
                <h1 className='text-4xl font-bold text-ButtonBg screen4:text-2xl'>
                    {data.title}
                </h1>
            </div> */}
        </div>
    )
}

export default TrackBox
