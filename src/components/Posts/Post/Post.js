import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Buttin, Typography, Button } from '@material-ui/core';
import ThumpUpAltIcon from '@material-ui/icons/ThumbUpAl';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';

const Post = ({ post }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} img={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=> `#${tag} `)}</Typography> {/*here this line 9.02*/}
            </div>
        </Card>
    )
}

export default Post;