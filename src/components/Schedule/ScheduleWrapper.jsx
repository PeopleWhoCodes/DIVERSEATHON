import React from 'react'
import DescribeSchedule from './DescribeSchedule'

const ScheduleWrapper = ({ data }) => {
    return (
        <div className='flex flex-col items-center'>
            {/* Heading */}
            <div className='text-TextDarkBlue italic text-4xl font-bold before:bg-[#202833] before:h-[35px] before:w-schedule1 before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1] screen3:text-2xl screen3:before:w-schedule1_1 screen3:before:-ml-1 screen3:before:h-[20px] screen5:before:hidden'>
                <p>{data?.scheduleTitle}</p>
            </div>
            {/* Sub Heading */}
            <div className='subHeading flex flex-col text-white mt-8 gap-y-5 screen3:mt-6'>
                {data?.timingData.map((timing) => (
                    <DescribeSchedule key={timing._id} data={timing} />
                ))}
            </div>
        </div>
    )
}

export default ScheduleWrapper
