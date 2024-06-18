import React from "react";
import { useState , useEffect } from "react";
import axios  from "axios";
import CardComponent from "../UI/cards";
import { Grid  , CircularProgress, Button} from "@mui/material";
import {Link} from 'react-router-dom';


const PostList = () => {
    const [posts , setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // FETCHING DATA USING AXIOS

    useEffect(() => {
      
      const API_URL = process.env.REACT_API_URL || 'http://localhost:3000';
        axios.get(`${API_URL}/api/posts`).then(response => {
            setPosts(response.data);
            setLoading(false);
        }).catch((error) => {
            console.error('Error fetching posts' , error);
            setLoading(false);
        })
    } , [])

    return(<>
       <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div>
            ) : (
                <Grid container spacing={1} justifyContent="center">
                    {Array.isArray(posts) && posts.map(post => (
                        <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
                            <CardComponent post={post}>
                                <Link to={`/post/${post._id}`} style={{ textDecoration: 'none' }}>
                                    <Button size="small">Read More</Button>
                                </Link>
                            </CardComponent>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    </>);
}


export default PostList;