import './App.css'
import About from './components/About'
import Events from './components/Events'
import { Footer } from './components/Footer'
import { Glimpses } from './components/Glimpses'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ViewCard from './components/ViewCard'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import EventWinnersDisplay from './components/EventWinnersDisplay'
import { eventWinnersData } from './components/Winnersdata'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'
          element={  <>
              <HeroSection/>
                    <About/>
                      <Events />
                  {/* <Glimpses /> */}
          </>
          } />
        <Route path="/:id" element={<ViewCard />} />
        {/* <Route path="/winners/:id" element={<EventWinnersDisplay data={eventWinnersData} />} /> */}
        {/* <Route path="/register/:id/:title" element={<Register/>}/> */}
      </Routes>
    
      <Footer />

    </>
  )
}

export default App
