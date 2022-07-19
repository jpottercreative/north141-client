import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function ArticleSearch( { filter, setFilter } ) {

    // const [filter, setFilter] = useState({
    //     filterType: 'text',
    //     filterText: '',
    //     filteredPosts: [],
    //   })
    
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Box>
  )
}

export default ArticleSearch