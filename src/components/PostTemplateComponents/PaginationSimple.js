import React, { useEffect, useState } from 'react'
import http from '../../http'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';


function PaginationSimple( {postMeta} ) {

console.log(postMeta)

const prevLink = postMeta.prevPost ? `/articles/${postMeta.prevPost.post_slug}` : '/articles'
const nextLink = postMeta.nextPost ? `/articles/${postMeta.nextPost.post_slug}` : '/articles'

  return (
    <Box>
        <Paper>
        <NavLink to={prevLink} >
              <IconButton
                name='previous'
                size="large"
                edge="start"
                color="inherit"
                aria-label='previous'
                sx={{ mr: 2 }}
                
              >
                <ArrowLeftIcon name='previous'/>
              </IconButton>
            </NavLink>
        <NavLink to={nextLink} >
              <IconButton
                name='next'
                size="large"
                edge="start"
                color="inherit"
                aria-label='next'
                sx={{ mr: 2 }}
                
              >
                <ArrowRightIcon name='next'/>
              </IconButton>
            </NavLink>
        </Paper>
    </Box>
  )
}

export default PaginationSimple