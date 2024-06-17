// import React from "react";
// import { useState , useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PostDetails = () => {
//     const { id}  = useParams();
//     const [post , setPost] = useState(null);

//     useEffect(() => {
//           const fetchPostDetails = async() => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
//                 setPost(response.data);
//             } catch (error) {
//                  console.log('Error getting post ' , error.message);
//             }
//           }
//           fetchPostDetails();
//     }  , [id])

//     if (!post) {
//       return <div>Post not found</div>;
//     }
  
//     return(<>
//           <div>
//             {post ? (
//                 <div>
//                        <h2>{post.title}</h2>
//                      <p>{post.content}</p>
//                   {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
//                    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
//                 </div>
//             ): (
//                 <p>Loading... Please wait</p>
//             )}
//           </div>
//     </>)
// }
// export default PostDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Paper, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  // backgroundColor: theme.palette.background.paper,
}));

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
});

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error getting post ', error.message);
        setLoading(false);
      }
    };
    fetchPostDetails();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          Post not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <StyledPaper elevation={3}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
          </Grid>
          {post.imageUrl && (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ImageContainer>
                <StyledImage src={post.imageUrl} alt={post.title} />
              </ImageContainer>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              {post.content}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};



export default PostDetails;
