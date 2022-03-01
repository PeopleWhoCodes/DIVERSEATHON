import React from 'react'
import Heading from '../shared/Text/Heading'
import ScheduleWrapper from './ScheduleWrapper'
import Paragraph from './../shared/Text/Paragraph'
import Anouncement from './../shared/Text/Anouncement'

const Schedule = ({ data }) => {
    return (
        <div
            id='SCHEDULE'
            className='flex flex-col gap-y-8 items-center justify-center py-20 px-20 bg-DarkBack screen2:px-14 screen4:px-10'
        >
            <Heading text={'SCHEDULE'} invertColor />
            <Paragraph text={data?.Info} />
            <div className='my-2 flex flex-col items-center gap-y-20 screen3:gap-y-12'>
                {data?.data.length > 0 ? (
                    data?.data.map((sch) => (
                        <ScheduleWrapper data={sch} key={sch._id} />
                    ))
                ) : (
                    <Anouncement />
                )}
            </div>
        </div>
    )
}

export default Schedule
