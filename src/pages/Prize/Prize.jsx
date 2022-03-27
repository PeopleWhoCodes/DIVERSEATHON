import React from 'react'
import HomeCard from '../../components/shared/Cards/HomeCard'
import ImageCard from '../../components/shared/Image/ImageCard'
import Anouncement from '../../components/shared/Text/Anouncement'

const Prize = ({ data }) => {
    return (
        <div className='flex flex-col gap-y-5'>
            <HomeCard
                HeadingText={'OUR PRIZES'}
                id={'GUIDE'}
                bgImage={'bg-backgroundPrize_1'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Prize}
            />
            <div className='flex flex-wrap gap-x-8 gap-y-10 justify-center px-4 my-20'>
                {data.Prize.data?.length > 0 ? (
                    data.Prize.data?.map((speaker) => (
                        <PrizeCard
                            key={speaker._id}
                            data={speaker}
                            speakerCard={true}
                        />
                    ))
                ) : (
                    <Anouncement />
                )}
            </div>
            <HomeCard
                HeadingText={'PARTNERS TRACKS'}
                id={'GUIDE'}
                bgImage={'bg-backgroundPrize_2'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={data.Partners}
            />
            <div className='flex flex-wrap gap-x-8 gap-y-10 justify-center px-4 my-20'>
                {data.Partners.data?.length > 0 ? (
                    data.Partners.data?.map((speaker) => (
                        <PartnerCard
                            key={speaker._id}
                            data={speaker}
                            speakerCard={true}
                        />
                    ))
                ) : (
                    <Anouncement />
                )}
            </div>
        </div>
    )
}

export default Prize

const PrizeCard = () => {
    return <div className='h-[380px] w-[250px] bg-white rounded-md'></div>
}

const PartnerCard = () => {
    return <div className='h-[180px] w-[250px] bg-white rounded-md'></div>
}
