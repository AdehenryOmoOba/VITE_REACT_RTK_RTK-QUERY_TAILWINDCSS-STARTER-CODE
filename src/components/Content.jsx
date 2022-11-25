import React from 'react'

function Content({content}) {
    return (
    <div className=" w-2/3">
       <section className="grid place-items-center bg-blue-600 h-10 my-10 w-full">
       <h1 className='text-center'>{content}</h1>
       </section>
       <section className="grid place-items-center bg-blue-600 h-10 my-10">
       <h1 className='text-center'>{content}</h1>
       </section>
       <section className="grid place-items-center bg-blue-600 h-10 my-10">
       <h1 className='text-center'>{content}</h1>
       </section>
    </div>
    )
}

export default Content
