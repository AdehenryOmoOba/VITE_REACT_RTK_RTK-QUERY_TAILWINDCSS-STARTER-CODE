import React from 'react'
import { Link } from 'react-router-dom'


function SideNav() {
    return (
        <div className="w-[10%] h-full flex mr-4">
        <ul>
          <Link to="/"  className="grid cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm place-items-center">Home</Link>
          <Link to="/about"  className="grid cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm place-items-center">About</Link>
          <Link to="/students"  className="grid cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm place-items-center">Students</Link>
        </ul>
      </div>
    )
}

export default SideNav
