import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import PostListItem from './PostListItem'
// data
import { useBlogContext } from '../contexts/BlogContext';

// icons
import {
    PersonOutline,
    PetsOutlined,
    LocationOn,
    PunchClockOutlined,
    TransgenderOutlined,
} from '@mui/icons-material';

export default function PostList() {
    const { posts } = useBlogContext();
    
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {
                    posts && posts.map(
                        ({id, attributes: {title, date}}, i)=>(
                        <PostListItem
                            key={i}
                            id={id}
                            petFieldData={[
                                {icon: <PersonOutline/>, attrib: title},
                                {icon: <PetsOutlined/>, attrib: date},
                            ]}
                        />
                    ))
                }
            </List>

        </Box>
    );
};