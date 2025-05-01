import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About"
import Menu from "./components/Menu"
import Chef from './components/Chef'
import Laurel from './components/Laurel'
import FindUs from  './components/FindUs'
import Gallery from  './components/Gallery'
function App() {


  return (
    <>
      <div className="wholecont bg-black  overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Chef/>
        <Laurel/>
        <Gallery/>
        <FindUs/>
       
      </div>
    </>
  )
}

export default App
