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

function App() {
    return (
        <div className='pb-10'>
            <Navbar />
            <Hero />
            <About />
            <Track />
            <Registeration />
            <Event />
            <Guide />
            <Prize />
            <Sponsors />
            <Contact />
        </div>
    )
}

export default App
