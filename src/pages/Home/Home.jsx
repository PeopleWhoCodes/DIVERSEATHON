import React from 'react'
import { HomePage } from '../../data/HomePage'
import Hero from './../../components/Hero/Hero'
import About from './../../components/About/About'
import Track from './../../components/Track/Track'
import HomeCard from './../../components/shared/Cards/HomeCard'
import Event from './../../components/HomeEvent/Event'
// import Guide from './../../components/Guide/Guide'
import Schedule from './../../components/Schedule/Schedule'
import Speakers from './../../components/Speakers/Speaker'
import Prize from './../../components/Prizes/Prize'
import Sponsors from './../../components/Sponsors/Sponsors'
import Faq from './../../components/Faq/Faq'
// import Contact from './../../components/Contact/Contact'

const Home = () => {
    console.log(HomePage)
    return (
        <>
            <Hero data={HomePage.Hero} />
            <About data={HomePage.About} />
            <Track data={HomePage.Tracks} />
            <HomeCard
                HeadingText={'REGISTERATION'}
                id={'REGISTERATION'}
                text1={'Apply as Participant'}
                text2={'Apply for Mentor'}
                data={HomePage.Registeration}
            />
            <Event data={HomePage.Events} />
            <HomeCard
                HeadingText={'GUIDE & RULES'}
                id={'GUIDE'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={HomePage.Guide}
            />
            <Schedule data={HomePage.Schedule} />
            <Speakers data={HomePage.Speakers} />
            <Prize data={HomePage.Prizes} />
            <Sponsors data={HomePage.Sponsors} />
            <Faq data={HomePage.Faq} />
            <HomeCard
                HeadingText={'CONTACT US'}
                id={'CONTACT'}
                text1={'Mail Us'}
                text2={'Join Discord'}
                data={HomePage.Contact}
            />
        </>
    )
}

export default Home
