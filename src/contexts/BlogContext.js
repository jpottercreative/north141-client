import React, { createContext, useContext, useEffect, useState } from 'react'
import http from '../http'

// create context
const BlogContext = createContext()

export const useBlogContext = () => {
    return useContext(BlogContext)
}
// create provider
export const BlogProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [nav_value, set_nav_value] = useState("Home")
    const [postId, setPostId] = useState("")

    //change nav
    const changeNavValue = (value) => {
        set_nav_value(value)
    }
    //get post id
    const getPostId = (id) => {
        setPostId(id)
    }

    useEffect(() => {
        const readAllPosts = async () => {
            const response = await http.get("/api/blogposts?populate=featured_image,tags,display_locations")
            const responseArr = Object.values(response.data.data)
            setPosts(responseArr)
        }
        return readAllPosts
    }, [])
    console.log(posts)

    const value = {
            posts,
            nav_value,
            postId,
            changeNavValue, 
            getPostId, 
        }
    
    return(
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}