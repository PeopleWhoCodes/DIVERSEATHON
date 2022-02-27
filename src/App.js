import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Event from './components/HomeEvent/Event'
import Navbar from './components/Navbar/Navbar'
import Registeration from './components/Registeration/Registeration'
import Track from './components/Track/Track'
import Guide from './components/Guide/Guide'
import Prize from './components/Prizes/Prize'
import Sponsors from './components/Sponsors/Sponsors'
import Contact from './components/Contact/Contact'
import Schedule from './components/Schedule/Schedule'
import Speakers from './components/Speakers/Speaker'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Track />
            <Registeration />
            <Event />
            <Guide />
            <Schedule />
            <Speakers />
            <Prize />
            <Sponsors />
            <Faq />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
