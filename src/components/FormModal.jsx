import React from 'react'
import { createPortal } from 'react-dom'
import Form from '../Pages/Form'



function FormModal() {
   return createPortal(<Form />, document.getElementById("portal")) 
}

export default FormModal
