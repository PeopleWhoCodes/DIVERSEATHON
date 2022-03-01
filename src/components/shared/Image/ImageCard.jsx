import React from 'react'
import sideImg from '../../../assets/img/hero2.svg'

const ImageCard = () => {
    return (
        <div className='rounded-full w-52 h-52 screen3:w-48 screen3:h-48'>
            <img
                src={sideImg}
                alt='speaker'
                className='w-[inherit] h-[inherit] rounded-full object-cover'
            />
        </div>
    )
}

export default ImageCard
