import React from 'react'

const Testimonials = () => {
  return(        <div className='flex flex-col items-center overflow-x-scroll  w-full  px-20 justify-center gap-2 min-h-screen bg-bg-white '>
            <div className='flex flex-col items-center justify-center gap-2 w-full py-16 px-32'>
                <p className='text-xs font-light text-center w-full max-w-2xl'>Testimonials</p>
                <h1 className='text-3xl font-bold'>What our Customers says...</h1>

            </div>

            <div className='w-full rounded-3xl min-h-[80vh] min-w-6xl object-cover' style={
                {
                    backgroundImage: 'url(/testimonials.png',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',


                }
            }>

            </div>
        </div>
    )
}



export default Testimonials
