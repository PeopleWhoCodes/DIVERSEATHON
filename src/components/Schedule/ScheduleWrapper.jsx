import React from 'react'
import DescribeSchedule from './DescribeSchedule'

const ScheduleWrapper = () => {
    return (
        <div className='flex flex-col items-center'>
            {/* Heading */}
            <div className='text-TextDarkBlue italic text-4xl font-bold before:bg-[#202833] before:h-[35px] before:w-[37%] before:absolute before:mt-4 before:-ml-3 z-[10] before:z-[-1]'>
                <p>DAY 1 - Saturday, May 15, 2022</p>
            </div>
            {/* Sub Heading */}
            <div className='subHeading flex flex-col text-white mt-8 gap-y-5'>
                <DescribeSchedule />
                <DescribeSchedule />
                <DescribeSchedule />
            </div>
        </div>
    )
}

export default ScheduleWrapper
