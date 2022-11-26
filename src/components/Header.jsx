import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blue,green,red } from '../rtk/features/theme/themeSlice'

function Header() {
  const dispatch = useDispatch()

  const {logoColor} = useSelector((state) => state.themeReducer)

    return (
           <header className="flex w-full justify-between items-center h-[7vh]">
           <div>
             <h1 className={`tracking-widest ${logoColor} text-3xl`}>Adehenry.</h1>
           </div>
           <div>
             <button className={`text-red-300 border-gray-400 border p-2 mx-2 h-10 w-10 rounded-full bg-red-700 hover:bg-slate-800 text-sm`} onClick={() => dispatch(red())}>R</button>
             <button className={`text-blue-300 border-gray-400 border p-2 mx-2 h-10 w-10 rounded-full bg-blue-700 hover:bg-slate-800 text-sm`} onClick={() => dispatch(blue())}>B</button>
             <button className={`text-green-300 border-gray-400 border p-2 mx-2 h-10 w-10 rounded-full bg-green-700 hover:bg-slate-800 text-sm`} onClick={() => dispatch(green())}>G</button>
           </div>
         </header>
    )
}

export default Header
