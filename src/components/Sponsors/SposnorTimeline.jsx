import React from 'react'
import SponsorCard from './SponsorCard'
import styles from './Sponsor.module.css'

const SposnorTimeline = ({ heading, headingWidth }) => {
    return (
        <div className='sponsorCardWrapper flex items-center justify-center mt-14 flex-wrap gap-x-8 gap-y-5'>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
        </div>
    )
}

export default SposnorTimeline
