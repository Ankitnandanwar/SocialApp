import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { SocialContext } from '../context/SocialContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { navigate, token, setToken } = useContext(SocialContext)
  const profPath = localStorage.getItem('profPath')

  const logout = () => {
    navigate('/')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('profPath')
    localStorage.removeItem('name')

    setToken('')
  }

  return (
    <div className='flex py-2 px-[4%] sticky top-0 left-0 justify-between items-center bg-white z-50'>
      {/* <img  src={assets.logo} alt="logo" className='w-[max(10%,80px)]' /> */}
      <span className='text-[#3500c5c0] font-bold text-2xl'>Let&apos;s Connected</span>
      <div className='group relative'>
        <div className='w-10 h-10'>
          <img onClick={() => token ? null : navigate('/')} src={profPath} alt="profile_icon" className='w-full h-full rounded-full cursor-pointer object-cover' />
        </div>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-2'>
          <div className='flex flex-col gap-2 w-36 px-5 py-3 font-rubik bg-[#713efdef] text-sm text-white rounded'>
            <p className='cursor-pointer hover:text-gray-200'>My Profile</p>
            <p className='cursor-pointer hover:text-gray-200'>Settings</p>
            <p onClick={logout} className='cursor-pointer hover:text-gray-200'>Logout</p>
          </div>
        </div>

      </div>
      {/* <button className='bg-[#3400c5] text-white px-5 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-rubik'>Logout</button> */}
    </div>
  )
}

export default Navbar