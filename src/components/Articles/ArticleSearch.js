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
    <Box sx={{width: 'auto', m: '3em'}}>
      <Box
      // sx={{width: '100%'}}
      component="form"
      noValidate
      autoComplete="on"
      onSubmit={(e)=> {e.preventDefault()}}
    >
      <TextField onChange={handleTextChange} value={postFilter.text} id="search" label="Search" variant="outlined" />
    </Box>
  </Box>
  )
}

export default ArticleSearch