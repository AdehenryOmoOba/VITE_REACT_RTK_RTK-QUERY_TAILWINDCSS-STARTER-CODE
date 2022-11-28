import React from 'react'
import Card from '../components/Card'
import { useGetallStudentsQuery } from '../rtk-query/features/studentsSlice'


function Students() {
  const {data,isFetching,isError} = useGetallStudentsQuery()

  if (isError) return <div className='w-full'><h2 className='text-black text-xl text-center'>Something went wrong 😏</h2></div>
  if (isFetching) return <div className='w-full'><h2 className='text-black text-xl text-center'>Loading...</h2></div>

    return (
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-4'>
              {data?.map((student) => (<Card key={student.id} data={student}/>))}
            </div>
    )
}

export default Students
