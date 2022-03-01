import React from 'react'
import HomeCard from '../shared/Cards/HomeCard'
import SponsorContainer from './SponsorContainer'

const Sponsors = () => {
    return (
        <HomeCard
            HeadingText={'SPONSORS'}
            text1={'Sponsor Us'}
            text2={'Become Community Partner'}
            Children={SponsorContainer}
        />
    )
}

export default Sponsors
