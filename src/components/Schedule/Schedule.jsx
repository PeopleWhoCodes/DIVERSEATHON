import React from 'react'
import ScheduleWrapper from './ScheduleWrapper'

const Schedule = () => {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 bg-DarkBack'>
            <h1 className='text-5xl tracking-widest font-bold text-TextDarkBlue'>
                SCHEDULE
            </h1>
            <p className='text-2xl text-TextPassage w-[70%] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                felis, nisl eleifend mauris, eu nunc tincidunt. Amet et tellus
                accumsan,.
            </p>
            <div className='my-2 flex flex-col items-center gap-y-20'>
                <ScheduleWrapper />
                <ScheduleWrapper />
            </div>
        </div>
    )
}

export default Schedule
