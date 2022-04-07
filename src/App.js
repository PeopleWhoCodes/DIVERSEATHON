import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Event from './pages/Events/Event'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Schedule from './pages/Schedule/Schedule'
import Speakers from './pages/Speakers/Speakers'
import Tracks from './pages/Tracks/Tracks'
import Team from './pages/Team/Team'
import Prize from './pages/Prize/Prize'
import { HomePage } from './data/HomePage'
import { SpeakerPage } from './data/SpeakerPage'
import { TeamPage } from './data/TeamPage'
import { PrizePage } from './data/PrizePage'
import { EventPage } from './data/EventPage'
import Schedule1 from './components/Schedule/Schedule1'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route
                    exact
                    path='/events'
                    element={<Event data={EventPage} />}
                />
                <Route exact path='/schedule' element={<Schedule1 />} />
                <Route
                    exact
                    path='/speakers'
                    element={<Speakers data={SpeakerPage} />}
                />
                <Route exact path='/tracks' element={<Tracks />} />
                <Route
                    exact
                    path='/prizes'
                    element={<Prize data={PrizePage} />}
                />
                <Route exact path='/team' element={<Team data={TeamPage} />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
