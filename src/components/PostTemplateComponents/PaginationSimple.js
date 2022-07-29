import React, { useEffect, useState } from 'react'
import http from '../../http'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';


function PaginationSimple( {currentId} ) {
    const [prev, setPrev] = useState({id: "1"})
    const [next, setNext] = useState({id: "3"})
    // fetch two posts around us, and give a tool-tip with the title pls
    // api.north141.com/api/blogposts/?filters[id][$eq]=1
    console.log(`current id: ` + currentId)
    const waitForId = async () => {
        let response = await currentId
        console.log(response)
        // let current = 0
        // const getPrev = async () => {
        //     const response = await http.get(`/api/blogposts/?filters[id][$eq]=${current - 1}`)
        //     const data = await response.data.data
        //     setPrev(data)
        //   }
        // const getNext = async () => {
        //     const response = await http.get(`/api/blogposts/?filters[id][$eq]=${current + 1}`)
        //     const data = await response.data.data
        //     setNext(data)
        //   }
        // getPrev()
        // getNext()
    }
    // console.log(`prev: `)
    // console.log(prev)
    // console.log(`next: `)
    // console.log(next)

    useEffect(() => {
        waitForId()
    }, [prev, next])

    // useEffect(() => {
        // const getPrev = async () => {
        //     const response = await http.get(`/api/blogposts/?filters[id][$eq]=${prev.id}`)
        //     const data = await response.data.data
        //     setPrev(data)
        //   }
        // const getNext = async () => {
        //     const response = await http.get(`/api/blogposts/?filters[id][$eq]=${next.id}`)
        //     const data = await response.data.data
        //     setNext(data)
        //   }
        // getPrev()
        // getNext()
    // }, [next, prev])

  return (
    <Box>
        <Paper>
        <NavLink to={"/articles/"+prev.page_slug} >
              <IconButton
                name={prev.title}
                size="large"
                edge="start"
                color="inherit"
                aria-label={prev.title}
                sx={{ mr: 2 }}
                
              >
                <ArrowLeftIcon name={prev.title}/>
              </IconButton>
            </NavLink>
        <NavLink to={"/articles/"+next.page_slug} >
              <IconButton
                name={next.title}
                size="large"
                edge="start"
                color="inherit"
                aria-label={next.title}
                sx={{ mr: 2 }}
                
              >
                <ArrowRightIcon name={next.title}/>
              </IconButton>
            </NavLink>
        </Paper>
    </Box>
  )
}

export default PaginationSimple