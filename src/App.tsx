import {useState} from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import {Hero} from './pages/Hero'
import {HeroInverse} from './pages/HeroInverse'
import Portfolio from './pages/Portfolio'
import Stack from './pages/Stack'
import NavBar2 from './components/NavBar2'

function App() {
    const [isInverse, setIsInverse] = useState(false)

    return (
        <>
            <NavBar />
            <NavBar2 />
            {isInverse ? <HeroInverse /> : <Hero />}
            <About />
            <Portfolio />
            <Stack />
            <Footer />
        </>
    )
}

export default App
