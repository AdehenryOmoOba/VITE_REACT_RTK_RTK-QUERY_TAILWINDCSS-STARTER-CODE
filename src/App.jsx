import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Home from "./Pages/Home"


function App() {
  return (
      <main className="bg-blue-900/10 w-screen h-screen px-10 overflow-x-hidden">
        <Header />
        <div className="flex w-full justify-between h-[90vh]">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={<Blogs />}/>
        </Routes>
        </div>
      </main>
  )
}

export default App
