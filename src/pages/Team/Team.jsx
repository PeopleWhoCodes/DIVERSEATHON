import React from 'react'
import HomeCard from '../../components/shared/Cards/HomeCard'
import ImageCard from '../../components/shared/Image/ImageCard'
import Anouncement from '../../components/shared/Text/Anouncement'

const Team = ({ data }) => {
    return (
        <div>
            <HomeCard
                HeadingText={'TEAM'}
                id={'GUIDE'}
                bgImage={'bg-backgroundTeam_1'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Team}
            />
            <div className='flex flex-wrap gap-x-16 gap-y-10 justify-center px-4 my-20'>
                {data.Team.data?.length > 0 ? (
                    data.Team.data?.map((speaker) => (
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

export default Team
