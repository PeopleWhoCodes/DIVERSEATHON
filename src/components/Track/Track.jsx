import React from 'react'
import TrackBox from './TrackBox'

const Track = () => {
    return (
        <div className='px-5'>
            <div className='innerTrackBox px-20 py-14 shadow bg-TrackBack rounded-lg min-h-[600px] flex flex-col items-center gap-y-14'>
                <h1 className='text-5xl tracking-widest font-bold text-Primary'>
                    TRACKS
                </h1>
                <p className='text-2xl text-TextPassage w-[70%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet
                    et tellus accumsan,.
                </p>
                <div className='flex gap-x-24 flex-wrap items-center justify-center gap-y-10'>
                    <TrackBox />
                    <TrackBox />
                    <TrackBox />
                    <TrackBox />
                </div>
            </div>
        </div>
    )
}

export default Track
