import React from 'react'
import { useSelector } from 'react-redux'


function Content({content}) {
    const {textColor, bgColor} = useSelector((state) => state.themeReducer)

    return (
    <div className=" w-2/3">
       <section className={`grid place-items-center h-10 my-10 ${textColor} ${bgColor}`}>
       <h1 className='text-center'>{content}</h1>
       </section>
       <section className={`grid place-items-center h-10 my-10 ${textColor} ${bgColor}`}>
       <h1 className='text-center'>{content}</h1>
       </section>
       <section className={`grid place-items-center h-10 my-10 ${textColor} ${bgColor}`}>
       <h1 className='text-center'>{content}</h1>
       </section>
    </div>
    )
}

export default Content
