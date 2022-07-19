import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function ArticleSearch( { postFilter, setPostFilter } ) {

    // const [filter, setFilter] = useState({
      // type: 'text',
      // text: '',
      // posts: [],
    //   })
    const handleTextChange = (e) => {
      // console.log(e.target.value)
      setPostFilter({
        type: 'text',
        text: e.target.value,
        posts: [],
      })
    }
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '100%' },
    }}
    noValidate
    autoComplete="on"
    onSubmit={(e)=> {e.preventDefault()}}
  >
    <TextField onChange={handleTextChange} value={postFilter.text} id="search" label="Search" variant="outlined" />
  </Box>
  )
}

export default ArticleSearch