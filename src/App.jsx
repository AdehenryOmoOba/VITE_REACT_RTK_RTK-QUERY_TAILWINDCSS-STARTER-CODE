import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import About from "./Pages/About"
import Students from "./Pages/Students"
import Home from "./Pages/Home"
import { useSelector } from 'react-redux'
import StudentDetails from "./Pages/StudentDetails"


function App() {
   const {homeBgColor} = useSelector((state) => state.themeReducer)

   return (
      <main className={`w-screen h-screen p-10 overflow-x-hidden ${homeBgColor}`}>
        <Header />
        <div className="flex w-full justify-between h-auto">
        <SideNav />
        <div className="w-[90%] grid items-center">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/students/:id" element={<StudentDetails />}/>
        </Routes>
        </div>
        </div>
      </main>
  )
}

export default App
