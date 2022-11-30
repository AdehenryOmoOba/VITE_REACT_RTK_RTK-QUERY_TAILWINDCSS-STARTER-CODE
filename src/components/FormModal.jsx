import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import Form from '../Pages/Form'



function FormModal() {
const studentDetails = useSelector((state) => state.editStudentReducer)

   return createPortal(<Form data={studentDetails}/>, document.getElementById("portal")) 
}

export default FormModal
