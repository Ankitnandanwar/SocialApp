import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { ToastContainer } from 'react-toastify'
import { assets } from '../assets/assets'
// import FeedCard from '../components/FeedCard'
import { SocialContext } from '../context/SocialContext'
import FeedCard from '../components/FeedCard'
import Modal from '../components/Modal'



const Profile = () => {
  const profPath = localStorage.getItem('profPath')
  const name = localStorage.getItem('name')
  const { userPostData } = useContext(SocialContext)


  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [uploadImage, setUploadImage] = useState(false);
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("")

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault()
    console.log(uploadImage, userName, userBio)
  }


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex w-full'>
        <Sidebar />
        <div className='md:w-[80%] w-screen mx-auto ml-[18%] text-gray-600 text-base font-rubik z-0'>
          <div className='md:m-5 m-3 md:p-5 p-3 h-[250px] w-full relative'>
            <img src={assets.cloudy} alt="cloudy" className='w-full h-full object-cover rounded-md' />
            <div className='w-28 h-28 absolute bottom-[-45px] border rounded-full left-10'>
              <img src={profPath} alt="prof" className='w-full h-full p-0.5 object-cover rounded-full' />
            </div>
            <p className='absolute left-40 text-xl mt-1'>{name}</p>
            <p className='absolute left-40 text-sm mt-8 text-gray-400'>Aspiring adventurer with a passion for exploring new horizons. Coffee lover, tech enthusiast, and storyteller in the making.</p>
            {/* <button onClick={toggleModal} className='absolute right-5 bg-[#3500c5c0] px-4 py-2 mt-1 text-white cursor-pointer rounded-md'>Update</button> */}
          </div>

          {/* <FeedCard/> */}
          <div className='md:w-[40%] w-[75%] mt-16'>
            {
              userPostData.map((item, index) => (
                <FeedCard item={item} key={index} />
              ))
            }
          </div>
        </div>
        {
          isModalOpen && (<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white w-[90%] md:w-[30%] rounded-md p-5 shadow-lg'>
              <h2 className='text-lg font-bold mb-3'>Update Post</h2>
              <form onSubmit={onHandleSubmit}>
                <div>
                  <div className='flex flex-col justify-center items-center'>
                    <label htmlFor='uploadImg' className='border rounded-full cursor-pointer p-0.5'>
                      <img src={!uploadImage ?  assets.upload : URL.createObjectURL(uploadImage)} alt="upload" className='w-24 h-24 object-cover rounded-full' />
                      <input onChange={(e)=>setUploadImage(e.target.files[0])} type="file" id='uploadImg' className='hidden' />
                    </label>
                    <p className='font-rubik'>Upload Image</p>
                  </div>

                  <div>
                    <label>Enter Username</label>
                    <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className='w-full p-1.5 rounded-sm border border-gray-400 outline-none'/>
                  </div>

                  <div className='flex flex-col'>
                    <label>Enter Bio</label>
                    <textarea onChange={(e)=>setUserBio(e.target.value)} value={userBio} className='border border-gray-400 p-1.5 outline-none rounded-sm'></textarea>
                  </div>
                </div>
                <div className='flex justify-end gap-3 mt-4'>
                  <button
                    onClick={toggleModal}
                    className='bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400'
                  >
                    Cancel
                  </button>
                  <button type='submit' className='bg-[#3500c5c0] px-4 py-2 text-white rounded-md hover:bg-[#25008e]'>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>)
        }
      </div>

    </div>
  )
}

export default Profile