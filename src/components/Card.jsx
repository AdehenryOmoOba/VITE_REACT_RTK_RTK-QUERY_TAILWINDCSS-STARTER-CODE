import {AiOutlineStar} from "react-icons/ai";
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Card({data, details}) {
  const {textColor} = useSelector((state) => state.themeReducer)
  const navigate = useNavigate()
  const detailInfo = <div className="w-full grid grid-cols-1 p-8 rounded-lg shadow-lg bg-white mt-8">
                     <h5 className="text-gray-900 text-xl font-bold leading-tight mb-2 truncate"><span className="text-sm font-bold">Name:</span> {data.first_name} {data.last_name}</h5>
                     <p className="text-gray-700 text-base mb-4 truncate"><span className="text-sm font-bold">Email:</span> {data.email}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Age:</span> {data.age}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Gender:</span> {data.gender}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Address:</span> {data.address}</p>
                     <div className='flex w-full justify-between items-center'>
                     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => navigate(`/students`)}>Back</button>
                      <AiOutlineStar className={`${textColor} cursor-pointer text-2xl`}/>
                     </div>
                   </div>

 const summaryInfo = <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm min-w-[15rem]">
                      <h5 className="text-gray-900 text-xl font-bold leading-tight mb-2 truncate"><span className="text-sm font-bold">Name:</span> {data.first_name} {data.last_name}</h5>
                      <p className="text-gray-700 text-base mb-4 truncate"><span className="text-sm font-bold">Email:</span> {data.email}</p>
                      <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Age:</span> {data.age}</p>
                      <div className='flex w-full justify-between items-center'>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => navigate(`/students/${data.id}`,{state: data})}>View Details</button>
                       <AiOutlineStar className={`${textColor} cursor-pointer text-2xl`}/>
                      </div>
                     </div>

    return (<>
            {details ? detailInfo  :  summaryInfo}
           </>)
}

export default Card
