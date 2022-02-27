import React from 'react'
import sideImg from '../../assets/img/hero2.svg'

const SpeakerInfo = () => {
    return (
        <div className='rounded-full w-40 h-40'>
            <img
                src={sideImg}
                alt='speaker'
                className='w-[inherit] h-[inherit] rounded-full object-cover'
            />
        </div>
    )
}

export default SpeakerInfo
