import { Routes, Route } from "react-router-dom"

import About from "./components/about/About"
import Animal from "./components/animal/Animal"
import Cliente from "./components/cliente/Cliente"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Info from "./components/info/Info"
import Pet from "./components/pet/Pet"
import Home from "./components/home/Home"
import Us from "./components/us/Us"
import Articles from "./components/articles/Articles"
import Register from "./components/register/Register"


function App() {

  return (
    <>
      <div className="hero_area ">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* <About />

      <Animal />

      <Pet />

      <Us />

      <Cliente />

      <Contact />

      <Info /> */}

      <Footer />
    </>
  )
}

export default App
