import React from 'react'
import SposnorTimeline from './SposnorTimeline'

const SponsorContainer = ({ data }) => {
    return (
        <div className='sponsor-timeline flex flex-col items-center gap-y-14 mt-16'>
            {data?.map((sponsor) => (
                <SposnorTimeline
                    heading={sponsor.title}
                    id={sponsor._id}
                    key={sponsor._id}
                    data={sponsor.sponsors}
                />
            ))}
        </div>
    )
}

export default SponsorContainer
