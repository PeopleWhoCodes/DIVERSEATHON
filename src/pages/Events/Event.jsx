import React from 'react'
import HomeCard from './../../components/shared/Cards/HomeCard'
import { HomePage } from './../../data/HomePage'
import EventBox from './../../components/shared/Event/EventBox'

const Event = ({ data }) => {
    return (
        <>
            <HomeCard
                HeadingText={'EVENTS'}
                id={'EVENTS'}
                bgImage={'bg-backgroundEvent_1'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Event}
            />
            <div className='flex flex-wrap gap-x-6 gap-y-6 justify-center px-5 my-20'>
                {data.Event.data.map((value, index) => {
                    return <EventBox key={index} />
                })}
            </div>
        </>
    )
}

export default Event
