import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { formatDistanceToNow } from 'date-fns';
import axios from 'axios';

const FeedCard = ({ item, token, backendurl, userId }) => {

    const [likeCount, setLikeCount] = useState(Object.keys(item.likes).length);

    const getTimeElapsed = (createdAt) => {
        const createdAtDate = new Date(createdAt);
        return `${formatDistanceToNow(createdAtDate)} ago`;
    };

    const handleLikeClick = async () => {
        try {
            const res = await axios.patch(backendurl + `/api/posts/${item._id}/like`, { userId }, { headers: { token } })
            if (res.data.likes) {
                setLikeCount(Object.keys(res.data.likes).length)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLikeCount(Object.keys(item.likes).length)
    }, [item.likes])


    return (
        <div className='md:m-5 m-3 md:p-5 p-3 w-full bg-white shadow-md rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 md:gap-4 justify-center items-center'>
                    <img src={item.userProfileImg} alt="" className='w-12 h-12 rounded-full object-contain' />
                    <div>
                        <p className='text-sm font-rubik font-medium'>{item.feedName}</p>
                        <p className='text-xs font-rubik text-gray-400'>{getTimeElapsed(item.createdAt)}</p>
                    </div>
                </div>
                <img src={assets.list} alt="list" className='w-8 h-8 object-cover cursor-pointer' />
            </div>
            <div className='mt-2'>
                <p className='font-rubik md:text-[15px] text-sm ml-2 text-gray-700'>{item.description}</p>
            </div>
            <div className='w-full h-[450px] my-2'>
                <img src={item.feedImagePath} alt="" className='w-full h-full object-contain rounded-md' />
            </div>


            <div className='flex gap-5 mt-5'>
                <div className='flex gap-1 items-center cursor-pointer'>
                    <img src={assets.like} alt="" className='w-4 h-4' onClick={handleLikeClick} />
                    <p className='md:text-[13px] text-xs font-rubik text-[#3500c5c0]'>Like</p>
                    <p className='bg-[#f5f1ffc0] rounded-full px-2 py-1 md:text-[12px] text-[#3500c5c0] text-xs font-rubik'>{likeCount}</p>
                </div>

                <div className='flex gap-1 items-center cursor-pointer'>
                    <img src={assets.comment} alt="" className='w-5 h-5' />
                    <p className='md:text-[13px] text-xs font-rubik text-[#3500c5c0]'>Comments</p>
                    <p className='bg-[#f5f1ffc0] rounded-full px-2 py-1 md:text-[12px] text-[#3500c5c0] text-xs font-rubik'>134</p>

                </div>

                <div className='flex gap-1 items-center cursor-pointer'>
                    <img src={assets.share} alt="" className='w-5 h-5' />
                    <p className='md:text-[13px] text-xs font-rubik text-[#3500c5c0]'>Share</p>
                    <p className='bg-[#f5f1ffc0] rounded-md px-2 py-0.5 md:text-[12px] text-[#3500c5c0] text-xs font-rubik'>1</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard