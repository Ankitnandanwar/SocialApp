import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


export const SocialContext = createContext();

const SocialContextProvider = (props) => {
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [token, setToken] = useState('')
    const [postData, setPostData] = useState([])
    const [userPostData, setUserPostData] = useState([])

    



    // all feed post
    const feedPost = async (token) => {
        try {
            const res = await axios.get(backendurl + '/api/posts/', { headers: { token } })
            setPostData(res.data)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }



    // all user feed post
    const getUserPost = async (userId, token) => {
        try {
            const res = await axios.get(backendurl + `/api/posts/${userId}/posts`, { headers: { token } })
            setUserPostData(res.data)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const value = {
        backendurl, navigate, token, setToken, postData, setPostData, userPostData, setUserPostData
    }

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            feedPost(localStorage.getItem('token'))
            getUserPost(localStorage.getItem('userId'), localStorage.getItem('token'))
        }
    }, [])



    return (
        <SocialContext.Provider value={value}>
            {props.children}
        </SocialContext.Provider>
    )

}

export default SocialContextProvider;