import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { assets } from '../assets/assets'
import FeedCard from '../components/FeedCard'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SocialContext } from '../context/SocialContext'
import axios from 'axios'
import Events from '../components/Events'

const Home = () => {

  const { backendurl, navigate, postData, setPostData, token } = useContext(SocialContext)

  const userId = localStorage.getItem('userId')
  const profPath = localStorage.getItem('profPath')

  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPicture(selectedFile);
    setFileName(selectedFile?.name || '');
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (description === "") {
      toast.error("Please enter a description");
    } else if (fileName === "") {
      toast.error("Please select a file");
    }
    else {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('description', description);
      formData.append('picture', picture);

      try {
        const res = await axios.post(backendurl + '/api/posts/createfeed', formData, { headers: { token } })
        setPostData([...postData, res.data])
        toast.success('Post created successfully', {
          position: "top-right",
        })
        setDescription('')
        setPicture(null)
        setFileName('')
        postData
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  }




  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex w-full'>
        <Sidebar />
        <div className='md:w-[40%] w-[75%] mx-auto ml-[18%] my-4 text-gray-600 text-base'>
          <div className='md:m-5 m-3 md:p-5 p-3 w-full bg-white shadow-md rounded-md'>

            <form className='w-full' onSubmit={onSubmitHandler}>

              <div className=''>
                <div className='flex md:gap-4 gap-2'>
                  <img src={profPath} alt="prof" className='w-12 h-12 rounded-full object-cover' />
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='outline-none w-full md:text-[14.5px] text-xs font-rubik rounded-full pl-4 bg-gray-100'
                    type="text" placeholder='What&apos;s on your mind ?' />
                </div>
              </div>

              <hr className='mt-4' />
              <div className='flex justify-between items-center'>
                <div className='my-4 flex items-center gap-10 md:gap-10'>
                  <div className='md:flex gap-1 items-center justify-center'>

                    <label className="flex items-center gap-2 cursor-pointer">
                      {fileName && (
                        <span className="text-xs md:text-sm font-rubik text-gray-500">
                          {fileName}
                        </span>
                      )}
                      <img src={assets.camera} className="md:w-5 md:h-5 w-4 h-4" alt="camera" />
                      <p className="text-xs md:text-sm font-rubik text-gray-500 mt-0.5 md:mt-0">Photos</p>
                      <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>

                  <div className='md:flex gap-1 items-center justify-center'>
                    <img src={assets.video} className='md:w-5 md:h-5 w-4 h-4' alt="video" />
                    <div>
                      <input type="file" id='photoid' className='hidden cursor-pointer' />
                      <label htmlFor='photoid' className='cursor-pointer'>
                        <p className='text-xs md:text-sm font-rubik text-gray-500 mt-0.5 md:mt-0'>Videos</p>
                      </label>
                    </div>
                  </div>


                  <div className='md:flex gap-1 items-center justify-center'>
                    <img src={assets.tags} className='md:w-5 md:h-5 w-4 h-4' alt="tags" />
                    <div>
                      <input type="text" className='hidden cursor-pointer' />
                      <label className='cursor-pointer'>
                        <p className='text-xs md:text-sm font-rubik text-gray-500 mt-0.5 md:mt-0'>Tags</p>
                      </label>
                    </div>
                  </div>

                  <div className='md:flex gap-1 items-center justify-center'>
                    <img src={assets.feelings} className='md:w-5 md:h-5 w-4 h-4' alt="feelings" />
                    <div>
                      <input type="text" className='hidden cursor-pointer' />
                      <label className='cursor-pointer'>
                        <p className='text-xs md:text-sm font-rubik text-gray-500 mt-0.5 md:mt-0'>Feelings</p>
                      </label>
                    </div>
                  </div>


                </div>
                <button type='submit' className='md:px-4 px-2 py-1.5 text-sm bg-[#3400c5] text-white rounded-md font-rubik'>Post</button>

              </div>
            </form>
          </div>
          {
            postData.map((item, index) => (
              <FeedCard item={item} key={index} token={token} backendurl={backendurl} userId={userId}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home