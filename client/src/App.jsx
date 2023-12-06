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
import ArticleCreate from "./components/article-create/ArticleCreate"
import Login from "./components/login/Login"


function App() {

  return (
    <>
      <div className="hero_area ">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/articles/create" element={<ArticleCreate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
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
