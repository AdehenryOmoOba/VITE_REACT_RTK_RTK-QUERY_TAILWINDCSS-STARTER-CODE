import React from 'react'

function Header() {
    return (
           <header className="flex w-full justify-between items-center h-[7vh]">
           <div>
             <h1>Adehenry.</h1>
           </div>
           <div>
             <button className="text border-gray-400 border py-2 px-4 rounded-full bg-black hover:bg-slate-800 text-sm">Light / Dark</button>
           </div>
         </header>
    )
}

export default Header
