import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/Notfound"
import Blog from "./components/Blog"
import Post from "./components/Post"


function App() {

  

  return (
    <div className="min-h-screen  p-5" >

       <Header />

       <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/blog" element={<Blog />}  />
        <Route path="/blog/:id" element={<Post />}  />
        <Route path="*" element={<NotFound />}  />
       </Routes>

    </div>
  )
}

export default App

