import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About"
import Menu from "./components/Menu"
import Chef from './components/Chef'
import Video from "./components/Video"
import Laurel from './components/Laurel'
import FindUs from './components/FindUs'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <div className="wholecont bg-black  overflow-x-hidden">
        <Navbar />
        <div id="home"><Hero /></div>
        <About />
        <Menu />
        <div id="chef"><Chef /></div>
        <Video />
        <Laurel />
        <Gallery />
        <div id="findus">  <FindUs /></div>
        <div id="newslater"><Newsletter /></div>

        <Footer />
      </div>
    </>
  )
}

export default App
