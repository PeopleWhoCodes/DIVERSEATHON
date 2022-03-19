import React, { useEffect, useState } from 'react'
import HomeCard from '../../components/shared/Cards/HomeCard'
import ImageCard from '../../components/shared/Image/ImageCard'
import Anouncement from '../../components/shared/Text/Anouncement'
import { HomePage } from '../../data/HomePage'

const Speakers = ({ data }) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <HomeCard
                HeadingText={'SPEAKERS'}
                id={'GUIDE'}
                bgImage={'bg-backgroundSpeaker_1'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Speakers}
            />
            <div className='flex flex-wrap gap-x-16 gap-y-10 justify-center px-4 my-20'>
                {data.Speakers.data?.length > 0 ? (
                    data.Speakers.data?.map((speaker) => (
                        <ImageCard
                            key={speaker._id}
                            data={speaker}
                            speakerCard={true}
                        />
                    ))
                ) : (
                    <Anouncement invert />
                )}
            </div>
            <HomeCard
                HeadingText={'JUDGES'}
                bgImage={'bg-backgroundSpeaker_2'}
                id={'GUIDE'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Speakers}
            />
            <div className='flex flex-wrap gap-x-16 gap-y-10 justify-center px-4 my-20'>
                {data.Speakers.data?.length > 0 ? (
                    data.Speakers.data?.map((speaker) => (
                        <ImageCard
                            key={speaker._id}
                            data={speaker}
                            speakerCard={true}
                        />
                    ))
                ) : (
                    <Anouncement invert />
                )}
            </div>
            <HomeCard
                HeadingText={'MENTORS'}
                bgImage={'bg-backgroundSpeaker_3'}
                id={'GUIDE'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Speakers}
            />
            <div className='flex flex-wrap gap-x-16 gap-y-10 justify-center px-4 my-20'>
                {data.Speakers.data?.length > 0 ? (
                    data.Speakers.data?.map((speaker) => (
                        <ImageCard
                            key={speaker._id}
                            data={speaker}
                            speakerCard={true}
                        />
                    ))
                ) : (
                    <Anouncement invert />
                )}
            </div>
        </div>
    )
}

export default Speakers
