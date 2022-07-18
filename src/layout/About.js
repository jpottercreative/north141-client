import React, { useState, useEffect } from 'react'
import http from '../http'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageListStandard from '../components/ImageListStandard';

function About() {
    const [pageData, setPageData] = useState({})
    const [imageArray, setImageArray] = useState([])
    useEffect(() => {
        const getPageData = async () => {
            const response = await http.get("/api/about?populate=*")
            const asyncData = await response
            // console.log(asyncData.data.data.attributes.images.data[0].attributes.formats.medium.url)
            setPageData(asyncData.data.data.attributes)
            setImageArray(asyncData.data.data.attributes.images.data)
        }
        return getPageData
    }, [])
    console.log(imageArray)
  return (
    <Paper elevation={0}>
        <Container component="main" maxWidth="md" >

            <Box
            sx={{
                height: 'auto',
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            className={'thing'}
            >
                <Paper elevation={5} sx={{m: 5}}>
                    <Box
                    sx={{m: 5, height: 'auto'}}>
                        
                        <Typography variant="h2" component="p">About {pageData.title}</Typography>
                        <Typography variant="p">{pageData.about_copy}</Typography>
                        <ImageListStandard images={imageArray}/>
                    </Box>
                </Paper>
            </Box>
        </Container>
      </Paper>
  )
}

export default About