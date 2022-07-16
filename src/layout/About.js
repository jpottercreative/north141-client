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
            setPageData(response.data.data.attributes)
            
        }
        return getPageData
    }, [])

    useEffect(() => {
        const safeLogger = async () => {
            const response = await pageData;
            console.log(response.images)
        }
        return  safeLogger
    }, [pageData])

  return (
    <Paper >
        <Container component="main" maxWidth="sm" >

            <Box
            sx={{
                height: '100vh',
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Paper elevation={3} sx={{mt: 5}}>
                <Box
                sx={{m: 5}}>
                    <Typography variant="h2" component="p">{pageData.title}</Typography>
                    <Typography variant="p">{pageData.about_copy}</Typography>
                    <ImageListStandard />
                </Box>
            </Paper>
        </Box>
        </Container>
      </Paper>
  )
}

export default About