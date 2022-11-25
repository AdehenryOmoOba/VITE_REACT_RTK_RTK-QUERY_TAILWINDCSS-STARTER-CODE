import React from 'react'
import { Link } from 'react-router-dom'


function SideNav() {
    return (
        <div className="w-1/4 h-full flex">
        <ul>
          <Link to="/"  className="block cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm">Home</Link>
          <Link to="/about"  className="block cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm">About</Link>
          <Link to="/blogs"  className="block cursor-pointer my-10 border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm">Blogs</Link>
        </ul>
      </div>
    )
}

export default SideNav
