import {AiOutlineStar} from "react-icons/ai";
import React from 'react'
import { useSelector } from 'react-redux'



function Card({name, email, age}) {
  const {textColor} = useSelector((state) => state.themeReducer)

    return (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm min-w-[15rem]">
             <h5 className="text-gray-900 text-xl font-bold leading-tight mb-2">{name}</h5>
             <p className="text-gray-700 text-base mb-4">{email}</p>
             <p className="text-gray-700 text-base mb-4">{age}</p>
             <div className='flex w-full justify-between items-center'>
             <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Details</button>
              <AiOutlineStar className={`${textColor} cursor-pointer text-2xl`}/>
             </div>
          </div>
    )
}

export default Card
