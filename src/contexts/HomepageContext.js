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
            // const response = await http.get("/api/homepage?fields[0]=attributes&populate[homepage_body][populate]=%2A")
            const response = await http.get("/api/landing-pages/home")
            
            // console.log(response.data.data.attributes)
            response.status >= 200 ? console.log('homepage res okay') : console.log('nono')
            setHomepageData(response.data.data.attributes)
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