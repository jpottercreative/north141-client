import React, { createContext, useContext, useEffect, useState } from 'react'
import http from '../http'

// create context
const ArticleContext = createContext()

export const useArticleContext = () => {
    return useContext(ArticleContext)
}
// create provider
export const ArticleProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    // const [postId, setPostId] = useState("")

    // //get post id
    // const getPostId = (id) => {
    //     setPostId(id)
    // }


    useEffect(() => {
        const getAllPosts = async () => {
            const response = await http.get("/api/blogposts?populate=*")
            response.status >= 200 ? console.log('res okay') : console.log('nono')
            const responseArr = await Object.values(response.data.data)
            setPosts(responseArr)
        }
        return getAllPosts
    }, [])

    // console.log(posts)
    // console.log(posts)

    const value = {
            posts,
            // postId, 
            // getPostId,
    }
    
    return(
        <ArticleContext.Provider value={value}>
            {children}
        </ArticleContext.Provider>
    )
}