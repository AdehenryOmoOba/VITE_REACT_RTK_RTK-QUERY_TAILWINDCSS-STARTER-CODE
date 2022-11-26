import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Home from "./Pages/Home"
import { useSelector } from 'react-redux'

function App() {
   const {homeBgColor} = useSelector((state) => state.themeReducer)

   return (
      <main className={`w-screen h-screen p-10 overflow-x-hidden ${homeBgColor}`}>
        <Header />
        <div className="flex w-full justify-between h-auto">
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
