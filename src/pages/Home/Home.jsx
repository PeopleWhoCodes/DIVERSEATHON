import React from 'react'
import { HomePage } from '../../data/HomePage'
import Hero from './../../components/Hero/Hero'
import About from './../../components/About/About'
import Track from './../../components/Track/Track'
import HomeCard from './../../components/shared/Cards/HomeCard'
import Event from './../../components/HomeEvent/Event'
// import Guide from './../../components/Guide/Guide'
// import Schedule from './../../components/Schedule/Schedule'
import Schedule1 from '../../components/Schedule/Schedule1'
import Speakers from './../../components/Speakers/Speaker'
import Prize from './../../components/Prizes/Prize'
import Sponsors from './../../components/Sponsors/Sponsors'
import Faq from './../../components/Faq/Faq'
// import Contact from './../../components/Contact/Contact'

const Home = () => {
    console.log(HomePage)
    return (
        <div className='flex flex-col gap-y-12'>
            <Hero data={HomePage.Hero} />
            <About data={HomePage.About} />
            <Track data={HomePage.Tracks} />
            <HomeCard
                HeadingText={'REGISTERATION'}
                bgImage={'bg-backgroundHomeCard'}
                id={'REGISTERATION'}
                text1={'Apply as Participant'}
                text2={'Apply for Mentor'}
                data={HomePage.Registeration}
            />
            <Event data={HomePage.Events} />
            {/* <Schedule data={HomePage.Schedule} /> */}
             <Schedule1/>
            <HomeCard
                HeadingText={'GUIDE & RULES'}
                bgImage={'bg-backgroundHomeCard2'}
                id={'GUIDE'}
                text1={'For Participants'}
                text2={'For Mentors'}
                data={HomePage.Guide}
            />
            <Speakers data={HomePage.Speakers} />
            <Prize data={HomePage.Prizes} />
            <Sponsors data={HomePage.Sponsors} />
            <Faq data={HomePage.Faq} />
        </div>
    )
}

export default Home
