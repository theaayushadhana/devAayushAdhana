import React from "react";
import { useState , useEffect } from "react";
import axios  from "axios";
import CardComponent from "../UI/cards";
import { Grid  , CircularProgress, Button} from "@mui/material";
import {Link} from 'react-router-dom';


const PostList = () => {
    const [posts , setPosts] = useState([]);

    // FETCHING DATA USING AXIOS

    useEffect(() => {
        axios.get('http://localhost:3000/api/posts').then(response => {
            setPosts(response.data);
        }).catch((error) => {
            console.error('Error fetching posts' , error);
        })
    } , [])

    return(<>
       <div>
   {/* {CircularProgress ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress /> {/* Display loading spinner */}
        </div>
      {/* ) : ( */} 
  <Grid container spacing={1} justifyContent="center">
      {Array.isArray(posts) && posts.map(post => (
        <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
          <CardComponent post={post} >
            <Link to={`/post/${post._id}`} style={{textDecoration: 'none'}}>
            <Button size="small">Read More</Button>
            </Link>
          </CardComponent>

        </Grid>
      ))}
    </Grid>
      {/* )} */}
{/* </div> */}

    </>);
}


export default PostList;