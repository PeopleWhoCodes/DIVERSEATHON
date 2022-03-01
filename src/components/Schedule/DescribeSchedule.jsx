import React from 'react'

const DescribeSchedule = ({ data }) => {
    return (
        <div>
            <div className='top flex justify-between items-center'>
                <p className='head text-TextSchedule text-2xl screen3:text-xl'>
                    {data?.cermonyType}
                </p>
                <p className='head text-TextSchedule text-xl screen3:text-lg'>
                    {data?.time}
                </p>
            </div>
            <div className='bottom'>
                <p className='text-TextPassage text-lg screen3:text-sm'>
                    {data?.desc}
                </p>
            </div>
        </div>
    )
}

export default DescribeSchedule
