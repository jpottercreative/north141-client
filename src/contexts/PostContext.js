import React, { createContext, useContext, useEffect, useState } from 'react'
import http from '../http'

// create context
const PostContext = createContext()

export const usePostContext = () => {
    return useContext(PostContext)
}
// create provider
export const PostProvider = ({children}) => {
    const [postData, setPostData] = useState({  })
    const [postSlug, setPostSlug] = useState("")

    //get post
    const getPost = async (slug) => {
        // setPostSlug(slug)
        // const response = await http.get(`/api/blogpost/${slug}`)
        // const data = await response.data.data.attributes
        setPostSlug(slug)
        findPost()
        // console.log(response)
    }

    const findPost = async () => {
        const response = await http.get(`/api/blogpost/${postSlug}`)
        const data = await response.data.data.attributes
        setPostData(data)
    }



    const value = {
            postData,
            getPost
    }
    
    return(
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}