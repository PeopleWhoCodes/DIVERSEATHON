import React from 'react'
import EventBox from '../shared/Event/EventBox'
import Heading from '../shared/Text/Heading'
import Button from './../shared/Buttons/Button'
import Paragraph from './../shared/Text/Paragraph'

const Event = () => {
    return (
        <div>
            <div className='px-5'>
                <div className='innerTrackBox px-20 py-14 shadow bg-Primary rounded-lg min-h-[600px] flex flex-col items-center gap-y-14 screen2:px-14 screen4:px-4'>
                    <Heading text={'EVENTS'} invertColor />
                    <Paragraph
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                        }
                    />
                    <div className='flex w-full gap-x-16 flex-wrap items-center justify-center gap-y-10'>
                        <EventBox />
                        <EventBox />
                        <EventBox />
                        <EventBox />
                        <EventBox />
                    </div>
                    <Button text={'View More'} more />
                </div>
            </div>
        </div>
    )
}

export default Event
