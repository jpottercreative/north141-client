import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function RichTextComp( { comp } ) {
  console.log(comp)
  const sectionTitle = comp.section_title ? comp.sectionTitle : null
  return (
    <Box>
      <Paper>
        <Typography variant="h3" gutterBottom component="h3">{sectionTitle}</Typography>
        {comp.richtext_block}  
      </Paper>
    </Box>
  )
}

export default RichTextComp