import React from 'react'

const ImageCard = ({ data }) => {
    return (
        <div className='rounded-full w-52 h-52 screen3:w-48 screen3:h-48'>
            <img
                src={data?.img}
                alt={data?.title}
                className='w-[inherit] h-[inherit] rounded-full object-cover'
            />
        </div>
    )
}

export default ImageCard
