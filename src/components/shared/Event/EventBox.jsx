import React from 'react'

const EventBox = ({ data }) => {
    return (
        <div>
            <div className='w-[380px] h-[] flex flex-col bg-CardBack shadow-xl rounded-lg shadow-[#13181F] screen4:w-[320px] screen5:w-full screen5:shadow'>
                {/* Left Image */}
                <div className='overflow-hidden h-[200px] screen4:h-[150px]'>
                    <img
                        src={data?.img}
                        alt={data?.title}
                        className='h-full w-full object-cover rounded-t-lg transition-transform hover:scale-125'
                    />
                </div>
                {/* Right Content */}
                <div className='flex flex-col pb-6 pt-2 px-4 w-full h-full gap-y-1'>
                    <h3>{data?.date}</h3>
                    <h1 className='text-xl font-bold text-ButtonBg'>
                        {data?.title}
                    </h1>
                    <h3 className='italic font-medium'>View Event</h3>
                </div>
            </div>
        </div>
    )
}

export default EventBox
