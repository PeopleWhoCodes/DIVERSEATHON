import React from 'react'
import ImageCard from '../shared/Image/ImageCard'
import Button from './../shared/Buttons/Button'
import Heading from '../shared/Text/Heading'
import Paragraph from './../shared/Text/Paragraph'

const Speakers = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 screen2:px-14 screen4:px-10'>
            <Heading text={'SPEAKERS'} />
            <Paragraph
                text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                }
            />
            <div className='speaker-wrapper flex items-center justify-center gap-x-14 gap-y-8 flex-wrap my-10'>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>
            <div className='buttonWrapper flex px-12 gap-x-8 text-white screen5:px-0 screen5:w-full'>
                <Button text={'View More'} more />
            </div>
        </div>
    )
}

export default Speakers
