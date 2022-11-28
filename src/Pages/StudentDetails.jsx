import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Card from '../components/Card'

function StudentDetails() {
  const {state} = useLocation()

    return (
            <div className='w-full md:w-2/3'>
               <Card data={state} details/>
            </div>
    )
}

export default StudentDetails
