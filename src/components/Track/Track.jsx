import React from 'react'
import Heading from '../shared/Text/Heading'
import Paragraph from '../shared/Text/Paragraph'
import TrackBox from './TrackBox'

const Track = () => {
    return (
        <div className='px-5'>
            <div className='innerTrackBox px-20 py-14 shadow bg-TrackBack rounded-lg min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'>
                <Heading text={'TRACKS'} />
                <Paragraph
                    text={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                    }
                />
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
