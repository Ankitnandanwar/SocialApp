import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth'
import { app } from '../firebase'
import { toast } from 'react-toastify'
import axios from 'axios'
import { SocialContext } from '../context/SocialContext'

const OAuth = () => {

    const { backendurl, navigate, token, setToken } = useContext(SocialContext)

    const handleSubmit = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log(result)

            const payload = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            };

            const response = await axios.post(backendurl + '/api/user/google', payload)
            console.log(response)
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.rest._id);
                localStorage.setItem('profPath', response.data.rest.profPath);
                localStorage.setItem('name', response.data.rest.name);

                toast.success("Google authentication successful!");
                navigate('/home');
            } else {
                toast.error(response.data.message);
            }


        } catch (error) {
            console.log("could not login with google", error)
            toast.error(error.message)
        }
    }

    return (
        <button type='button' onClick={handleSubmit} className='w-full rounded-sm flex justify-center gap-2 border py-1.5 my-4 cursor-pointer'>
            <img src={assets.google} alt="google_logo" className='w-6 h-6' />
            <p className='font-semibold'>Google</p>
        </button>
    )
}

export default OAuth