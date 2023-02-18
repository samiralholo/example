import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Collaborative from './components/Collaborative'
import Service from './components/Service'
import Bannner from './components/Bannner'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Collaborative />
      <Service />
      <Bannner />
      <Footer />
    </div>
  )
}

export default App
