import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { openModal } from "../rtk/features/modal/modalSlice";
import { setStudentDetails } from "../rtk/features/editStudent/editStudentSlice";
import { useDeleteStudentMutation, useUpdateStudentMutation } from "../rtk-query/features/studentsSlice";


function Card({data, details}) {
  const dispatch = useDispatch()
  const {textColor} = useSelector((state) => state.themeReducer)
  const navigate = useNavigate()
  const [deleteStudent] = useDeleteStudentMutation()
  const [updateStudent] = useUpdateStudentMutation()

  const handleEdit = () => {
     dispatch(setStudentDetails(data))
     dispatch(openModal())
  }

  const handleFavorite = () => {
  console.log("clicked me")
  const isFavorite = data.favorite === "false" ? "true" : "false"
  updateStudent({...data, favorite: isFavorite})
  }

  const handleDelete = () => {
   const isConfirm = confirm(`Are you sure you want to delete record for ${data.first_name} ${data.last_name}`)
   isConfirm && deleteStudent(data.id)
  }

  const handleViewDetails = () => {
     navigate(`/students/${data.id}`)
  }
  
  const detailInfo = <div className="w-full relative grid grid-cols-1 p-6 rounded-lg shadow-lg bg-white hover:bg-white/50 mt-8 group">
                     <div className="absolute hidden  right-[1.2rem] cursor-pointer group-hover:flex  justify-between top-6">
                        <p className="p-1 rounded-full bg-blue-400/80 w-[2.2rem] h-[2.2rem] grid place-content-center" onClick={handleEdit}>🖊️</p>
                      </div>
                     <h5 className="text-gray-900 text-xl font-bold leading-tight mb-2 truncate"><span className="text-sm font-bold">Name:</span> {data?.first_name} {data?.last_name}</h5>
                     <p className="text-gray-700 text-base mb-4 truncate"><span className="text-sm font-bold">Email:</span> {data?.email}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Age:</span> {data?.age}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold capitalize">Gender:</span> {data?.gender}</p>
                     <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Address:</span> {data?.address}</p>
                     <div className='flex w-full justify-between items-center'>
                     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => navigate(`/`)}>Back</button>
                      <div onClick={handleFavorite}>
                      {data?.favorite === "false" ? <AiOutlineStar className={`${textColor} cursor-pointer text-2xl`}/> : <AiFillStar className={`${textColor} cursor-pointer text-2xl`}/>}
                      </div>
                     </div>
                   </div>

 const summaryInfo = <div className="block relative p-6 rounded-lg shadow-lg bg-white hover:bg-white/50 max-w-sm min-w-[15rem] group">
                      <div className="absolute hidden right-[1.2rem] cursor-pointer group-hover:flex justify-between">
                        <p className="p-1 rounded-full bg-blue-400/80 w-[2.2rem] h-[2.2rem] grid place-content-center" onClick={handleEdit}>🖊️</p>
                        <p className="p-1 rounded-full bg-blue-400/80 ml-4 w-[2.2rem] h-[2.2rem] grid place-content-center" onClick={handleDelete}>🗑️</p>
                      </div>
                      <h5 className="text-gray-900 text-xl font-bold leading-tight mb-2 truncate"><span className="text-sm font-bold">Name:</span> {data?.first_name} {data?.last_name}</h5>
                      <p className="text-gray-700 text-base mb-4 truncate"><span className="text-sm font-bold">Email:</span> {data?.email}</p>
                      <p className="text-gray-700 text-base mb-4"><span className="text-sm font-bold">Age:</span> {data?.age}</p>
                      <div className='flex w-full justify-between items-center'>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleViewDetails}>View Details</button>
                      <div onClick={handleFavorite}>
                      {data?.favorite === "false" ? <AiOutlineStar className={`${textColor} cursor-pointer text-2xl`}/> : <AiFillStar className={`${textColor} cursor-pointer text-2xl`}/>}
                      </div>
                      </div>
                     </div>

    return (<>
            {details ? detailInfo  :  summaryInfo}
           </>)
}

export default Card
