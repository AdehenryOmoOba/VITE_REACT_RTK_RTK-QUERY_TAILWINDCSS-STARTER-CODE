import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useGetStudentQuery } from '../rtk-query/features/studentsSlice'



function StudentDetails() {
  const {id} = useParams()
  const {data} = useGetStudentQuery(id)

    return (
            <div className='w-full md:w-2/3'>
               <Card data={data} details/>
            </div>
    )
}

export default StudentDetails
