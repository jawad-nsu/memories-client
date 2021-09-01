import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts)
    return (
       !posts.length ? <CircularProgress/> : (
           <Grid>

           </Grid>
       )
    );
}

export default Posts;