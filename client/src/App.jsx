import About from "./components/about/About"
import Animal from "./components/animal/Animal"
import Cliente from "./components/cliente/Cliente"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Info from "./components/info/Info"
import Pet from "./components/pet/Pet"
import Slider from "./components/slider/Slider"
import Us from "./components/us/Us"


function App() {

  return (
    <>
      <div className="hero_area ">
        <Header />
        <Slider />
      </div>

      <About />

      <Animal />

      <Pet />

      <Us />

      <Cliente />

      <Contact />

      <Info />

      <Footer />
    </>
  )
}

export default App
