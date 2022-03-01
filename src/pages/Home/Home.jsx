import React from 'react'
import Hero from './../../components/Hero/Hero'
import About from './../../components/About/About'
import Track from './../../components/Track/Track'
import HomeCard from './../../components/shared/Cards/HomeCard'
import Event from './../../components/HomeEvent/Event'
import Guide from './../../components/Guide/Guide'
import Schedule from './../../components/Schedule/Schedule'
import Speakers from './../../components/Speakers/Speaker'
import Prize from './../../components/Prizes/Prize'
import Sponsors from './../../components/Sponsors/Sponsors'
import Faq from './../../components/Faq/Faq'
import Contact from './../../components/Contact/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Track />
            <HomeCard
                HeadingText={'REGISTERATION'}
                text1={'Apply as Participant'}
                text2={'Apply for Mentor'}
            />
            <Event />
            <HomeCard
                HeadingText={'GUIDE & RULES'}
                text1={'For Participants'}
                text2={'For Mentors'}
            />
            <Schedule />
            <Speakers />
            <Prize />
            <Sponsors />
            <Faq />
            <HomeCard
                HeadingText={'CONTACT US'}
                text1={'Mail Us'}
                text2={'Join Discord'}
            />
        </>
    )
}

export default Home
