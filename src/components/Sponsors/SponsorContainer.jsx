import React from 'react'
import SposnorTimeline from './SposnorTimeline'

const SponsorContainer = () => {
    return (
        <div className='sponsor-timeline flex flex-col items-center gap-y-14 mt-16'>
            <SposnorTimeline heading={'Title Sponsor'} id={1} />
            <SposnorTimeline heading={'Associate Sponsor'} id={2} />
            <SposnorTimeline heading={'Diamond Sponsor'} id={3} />
            <SposnorTimeline heading={'Platinum Sponsor'} id={4} />
            <SposnorTimeline heading={'Event & Media Partner'} id={5} />
            <SposnorTimeline heading={'Education Partner'} id={6} />
            <SposnorTimeline heading={'Community Partner'} id={7} />
        </div>
    )
}

export default SponsorContainer
