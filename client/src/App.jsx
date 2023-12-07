import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Articles from "./components/articles/Articles"
import Register from "./components/register/Register"
import ArticleCreate from "./components/article-create/ArticleCreate"
import Login from "./components/login/Login"
import ArticleDetails from "./components/article-details/ArticleDetails"


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
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
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
