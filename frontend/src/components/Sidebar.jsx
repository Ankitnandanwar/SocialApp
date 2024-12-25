import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border border-r-1 fixed left-0 bg-white'>
            <div className='flex flex-col gap-1 pt-6 pl-[10%] text-[15px]'>

                <NavLink to="/home" className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.home} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Home</p>
                </NavLink>


                <NavLink to='/profile/:userId' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.profile} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Profile</p>
                </NavLink>

            </div>
            
            <hr className='mx-2 my-2'/>
            <p className='pl-[15%] mt-3 font-normal font-rubik'>Favorites</p>

            <div className='flex flex-col gap-1 pt-1 pl-[10%] text-[15px]'>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.comment} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Messages</p>
                </a>


                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.friend} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Friends</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.feed} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Feeds</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.Stories} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Stories</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.event} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Events</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5' src={assets.Memories} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Memories</p>
                </a>

            </div>

            <hr className='mx-2 my-2'/>
            <p className='pl-[15%] mt-3 font-normal font-rubik'>Groups</p>

            <div className='flex flex-col gap-1 pt-1 pl-[10%] text-[15px]'>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5 rounded-full' src={assets.dogz} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600 '>Dogz Lovers</p>
                </a>


                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5 rounded-full' src={assets.gamerz} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Gamer ZxZxZx</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5 rounded-full' src={assets.travelz} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Travel Boyz</p>
                </a>

                <a href='#' className='flex items-center gap-3 px-3 py-2 rounded-l'>
                    <img className='w-5 h-5 rounded-full' src={assets.catz} alt="" />
                    <p className='md:block hidden font-rubik text-gray-600'>Cat Memes</p>
                </a>
            </div>
        </div>
    )
}

export default Sidebar