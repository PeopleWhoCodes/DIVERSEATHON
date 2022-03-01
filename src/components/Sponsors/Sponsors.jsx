import React from 'react'
import HomeCard from '../shared/Cards/HomeCard'
import SponsorContainer from './SponsorContainer'

const Sponsors = ({ data }) => {
    return (
        <HomeCard
            HeadingText={'SPONSORS'}
            id={'SPONSORS'}
            text1={'Sponsor Us'}
            text2={'Become Community Partner'}
            data={data}
            Children={SponsorContainer}
        />
    )
}

export default Sponsors
