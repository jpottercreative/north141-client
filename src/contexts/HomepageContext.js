import React, { createContext, useContext, useEffect, useState } from 'react'
import http from '../http'

//create context
const HomepageContext = createContext()

export const useHomepageContext = () => {
    return useContext(HomepageContext)
}

//create provider
export const HomepageProvider = ({children}) => {
    const [homepageData, setHomepageData] = useState({})

    //get homepageData

    useEffect(() => {
        const getHomepage = async () => {
            const response = await http.get("/api/homepage?populate=*")
            console.log(`getHomepagedata response: ${response}`)
            // const responseArr = await Object.values(response.data.data)
            
        }
        return getHomepage
    }, [])
    
    //what we are returning
    const value = {
        homepageData
    }
    
    // return
    return(
        <HomepageContext.Provider value={value}>
            {children}
        </HomepageContext.Provider>
    )
}