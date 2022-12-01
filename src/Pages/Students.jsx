import React from 'react'
import Card from '../components/Card'
import { useGetallStudentsQuery } from '../rtk-query/features/studentsSlice'
import { MdAdd } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { openModal } from '../rtk/features/modal/modalSlice'
import { resetStudentDetails } from '../rtk/features/editStudent/editStudentSlice'

function Students() {
  const {data,isFetching,isError} = useGetallStudentsQuery()
  const dispatch = useDispatch()

  const handleAddStudent = () => {
    dispatch(resetStudentDetails())
    dispatch(openModal())
  }

  if (isError) return <div className='w-full'><h2 className='text-black text-xl text-center'>Something went wrong 😏</h2></div>
  if (isFetching) return <div className='w-full'><h2 className='text-black text-xl text-center'>Loading...</h2></div>

    return (
            <div className='w-full grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-4'>
              {data?.map((student) => (<Card key={student.id} data={student}/>))}
              <div className='grid absolute h-10 w-10 rounded-full bg-blue-600 place-content-center bottom-4 right-4 cursor-pointer' onClick={handleAddStudent}>
                 <MdAdd className='text-white text-2xl'/>
              </div>
            </div>
    )
}

export default Students
