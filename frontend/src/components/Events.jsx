import React from 'react'
import { assets } from '../assets/assets'

const Events = () => {
    return (
        <div className='w-64 bg-white mt-5 shadow-md rounded-md md:p-4 p-3 font-rubik sticky top-[13.5%]'>
            <h3>Your Upcoming Event</h3>
            <div className='flex items-center gap-3 my-3'>
                <div className='w-10 h-10 shadow-md rounded-full p-2.5'>
                    <img src={assets.barbeque} alt="events-logo" className='w-full h-full object-contain' />
                </div>

                <div>
                    <h4 className='text-sm'>Garden BBQ</h4>
                    <p className='text-xs text-gray-500'>Sat 16 June, Tom's Garden</p>
                </div>
            </div>

            <hr />

            <div className='flex items-center gap-3 my-3'>
                <div className='w-10 h-10 shadow-md rounded-full p-2.5'>
                    <img src={assets.political} alt="events-logo" className='w-full h-full object-contain' />
                </div>

                <div>
                    <h4 className='text-sm'>City Council Vote</h4>
                    <p className='text-xs text-gray-500'>Sat 16 June, Town Hall</p>
                </div>
            </div>

            <hr />


            <div className='flex items-center gap-3 my-3'>
                <div className='w-10 h-10 shadow-md rounded-full p-2.5'>
                    <img src={assets.confetti} alt="events-logo" className='w-full h-full object-contain' />
                </div>

                <div>
                    <h4 className='text-sm'>Post-punk Festival</h4>
                    <p className='text-xs text-gray-500'>Sat 16 June, Tom's Garden</p>
                </div>
            </div>

            <hr />

            <div className='flex items-center gap-3 my-3'>
                <div className='w-10 h-10 shadow-md rounded-full p-2.5'>
                    <img src={assets.flight} alt="events-logo" className='w-full h-full object-contain' />
                </div>

                <div>
                    <h4 className='text-sm'>Goa's Tour</h4>
                    <p className='text-xs text-gray-500'>Sat 16 June, Tom's Garden</p>
                </div>
            </div>


        </div>
    )
}

export default Events