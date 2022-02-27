import React from 'react'
import SpeakerInfo from './SpeakerInfo'

const Speakers = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20'>
            <h1 className='text-5xl tracking-widest font-bold text-Primary'>
                SPEAKERS
            </h1>
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='speaker-wrapper flex items-center justify-center gap-x-10 gap-y-8 flex-wrap my-10'>
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
                <SpeakerInfo />
            </div>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white'>
                <button className='px-8 font-medium rounded-full py-1 bg-ButtonBg text-xl'>
                    View More
                </button>
            </div>
        </div>
    )
}

export default Speakers
