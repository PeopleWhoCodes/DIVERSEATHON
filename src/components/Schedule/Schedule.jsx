import React from 'react'
import Heading from '../shared/Text/Heading'
import ScheduleWrapper from './ScheduleWrapper'
import Paragraph from './../shared/Text/Paragraph'

const Schedule = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 bg-DarkBack screen2:px-14 screen4:px-10'>
            <Heading text={'SCHEDULE'} invertColor />
            <Paragraph
                text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus accumsan,.'
                }
            />
            <div className='my-2 flex flex-col items-center gap-y-20 screen3:gap-y-12'>
                <ScheduleWrapper />
                <ScheduleWrapper />
            </div>
        </div>
    )
}

export default Schedule
