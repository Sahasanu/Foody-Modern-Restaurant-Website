import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About"
import Menu from "./components/Menu"
import Chef from './components/Chef'
function App() {


  return (
    <>
      <div className="wholecont bg-black  overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Chef/>
      </div>
    </>
  )
}

export default App
