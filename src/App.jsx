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
        {/* <Route path="/register/:id/:title" element={<Register/>}/> */}
      </Routes>
    
      <Footer />

    </>
  )
}

export default App
