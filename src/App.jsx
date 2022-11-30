import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import Students from "./Pages/Students"
import { useSelector } from 'react-redux'
import StudentDetails from "./Pages/StudentDetails"
import FormModal from "./components/FormModal"

function App() {
  const isOpen = useSelector((state) => state.modalReducer)
   const {homeBgColor} = useSelector((state) => state.themeReducer)

   return (
      <main className={`w-screen h-screen p-10 overflow-x-hidden ${homeBgColor}`}>
        <Header />
        <div className="w-full grid items-center">
        <Routes>
          <Route path="/" element={<Students />}/>
          <Route path="/students/:id" element={<StudentDetails />}/>
        </Routes>
        </div>
        {isOpen && <FormModal />} 
      </main>
  )
}

export default App
