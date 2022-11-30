import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../rtk/features/modal/modalSlice'

function Form({data}) {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(data?.first_name || "")
  const [lastName, setLastName] = useState(data?.last_name || "")
  const [email, setEmail] = useState(data?.email || "")
  const [gender, setGender] = useState(data?.gender || "")
  const [address, setAddress] = useState(data?.address || "")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({firstName, lastName,email,gender,address})
  }

    return (
        <div className='md:ml-4 lg:ml-0 absolute grid place-content-center bg-black/30 w-screen h-screen inset-0 backdrop-blur-sm' data-overlay="overlay" onClick={(e) => e.target.dataset.overlay && dispatch(closeModal()) }>
            <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
                 <div className='lg:flex'>
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="w-full mb-6 px-3">
                    <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                 </div>
                  <div className="w-full mb-6 px-3">
                    <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="grid-email">
                     Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-email" type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="w-full mb-6 px-3">
                     <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="grid-gender">
                     Gender
                     </label>
                     <div className="relative">
                       <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="prefer not to say">Prefer Not To Say</option>
                       </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                       </div>
                     </div>
                 </div>
                  <div className="w-full mb-6 px-3">
                    <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="grid-address">
                      Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-address" type="address" placeholder="1234 Brightton Road, London" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className='flex w-full justify-between md:justify-end items-center mb-6 px-3'>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => dispatch(closeModal())}>Cancel</button>
                      <button type="submit" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-4">Submit</button>
                 </div>
           </form>
        </div>
    )
}

export default Form
