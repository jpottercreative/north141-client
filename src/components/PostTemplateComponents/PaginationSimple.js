import React, { useEffect, useState } from 'react'
import http from '../../http'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function PaginationSimple( {postMeta} ) {

  // console.log(postMeta)
  // note: tool tip can get a whole child element

  const prevLink = postMeta.prevPost ? `/articles/${postMeta.prevPost.post_slug}` : '/articles'
  const nextLink = postMeta.nextPost ? `/articles/${postMeta.nextPost.post_slug}` : '/articles'

  const prevTitle = postMeta.prevPost ? postMeta.prevPost.title : 'Back to Articles'
  const nextTitle = postMeta.nextPost ? postMeta.nextPost.title : 'Back to Articles'

  return (
    <Box>
        <Paper>
        <NavLink to={prevLink} >
          <Tooltip title={prevTitle} arrow>
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
          </Tooltip>
        </NavLink>
        <NavLink to={nextLink} >
          <Tooltip title={nextTitle} arrow>
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
            </Tooltip>
        </NavLink>
        </Paper>
    </Box>
  )
}

export default PaginationSimple