import React, { useState, useContext, useEffect } from 'react'
import OAuth from '../components/OAuth'
import axios from 'axios'
import { SocialContext } from '../context/SocialContext'
import { toast } from 'react-toastify'

const SignIn = () => {

    const { backendurl, navigate, token, setToken } = useContext(SocialContext)
    const [currentState, setCurrentState] = useState('Login')

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const res = await axios.post(backendurl + '/api/user/register', { name, email, password })
                if (res.data.success) {
                    setToken(res.data.token)
                    localStorage.setItem('token', res.data.token)
                } else {
                    toast.error(res.data.message)
                }
            } else {
                const res = await axios.post(backendurl + '/api/user/login', { email, password })
                if (res.data.success) {
                    console.log(res.data.user.profPath)
                    setToken(res.data.token)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userId', res.data.user._id)
                    localStorage.setItem('profPath', res.data.user.profPath)
                    localStorage.setItem('name', res.data.user.name)


                } else {
                    toast.error(res.data.message)
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/home')
        }
    }, [token])

    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-900">
            <div className="pb-80 pt-16 sm:pb-10">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">

                        <div className='bg-white h-full shadow-md rounded-lg px-8 py-6 md:max-w-sm'>
                            <h1 className='text-2xl font-bold mb-4 text-center'>Social App</h1>
                            {
                                currentState === 'Login' ?
                                    <p className='text-gray-500 text-sm'>SignIn to our app</p> :
                                    <p className='text-gray-500 text-sm'>SignUp to our app</p>
                            }


                            <OAuth />

                            <div className='w-full flex items-center justify-center gap-1'>
                                <hr className='w-1/2' />
                                <p className='font-rubik'>OR</p>
                                <hr className='w-1/2' />
                            </div>

                            <form onSubmit={onSubmitHandler}>
                                {
                                    currentState === 'Login' ? '' :
                                        <div className='mb-4 min-w-72'>
                                            <p className='text-sm font-bold text-gray-700 mb-1.5'>UserName</p>
                                            <input onChange={(e) => setName(e.target.value)} value={name}
                                                className='rounded-sm w-full px-3 py-1.5 border border-gray-300 outline-none'
                                                type="text" placeholder="Username" required />
                                        </div>
                                }
                                <div className='mb-4 min-w-72'>
                                    <p className='text-sm font-bold text-gray-700 mb-1.5'>Email Address</p>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                                        className='rounded-sm w-full px-3 py-1.5 border border-gray-300 outline-none'
                                        type="email" placeholder="Email" required />
                                </div>

                                <div className='mb-4 min-w-72'>
                                    <p className='text-sm font-bold text-gray-700 mb-1.5'>Password</p>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password}
                                        className='rounded-sm w-full px-3 py-1.5 border border-gray-300 outline-none'
                                        type="password" placeholder="Password" required />
                                </div>

                                <button type='submit' className='w-full mt-2 py-2 px-4 rounded-md text-white bg-black'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
                                {
                                    currentState === 'Login' ?
                                        <div className='mt-4 flex items-center justify-center gap-1'>
                                            <p className='text-sm text-gray-500'>Dont have an account?</p>
                                            <p onClick={() => setCurrentState('Sign Up')} className='text-sm font-bold text-blue-700 cursor-pointer'>SignUp</p>
                                        </div>
                                        :
                                        <div className='mt-4 flex items-center justify-center gap-1'>
                                            <p className='text-sm text-gray-500'>Already have an account?</p>
                                            <p onClick={() => setCurrentState('Login')} className='text-sm font-bold text-blue-700 cursor-pointer'>SignIn</p>
                                        </div>
                                }
                            </form>
                        </div>

                    </div>
                    <div>
                        <div className="mt-10 hidden md:block">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/cute-couple-have-rest-summer-forest_1157-36824.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/medium-shot-smiley-friends-with-smartphone_23-2150233613.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/good-friends-have-nice-time-autumn-forest-they-use-map-find-best-place-walking_613910-3755.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/young-people-taking-selfie-camera_23-2147846956.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/friends-enjoying-their-holiday-together_23-2149277258.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/group-happy-people-playing-summer-sunset-nature_1150-9110.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://img.freepik.com/free-photo/beach-party-dinner-friendship-happiness-summer-concept_53876-31587.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignIn