
// // CardComponent.jsx
// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActions, Button  } from '@mui/material';
// import post from '../components/PostList';
// // import PostList from '../components/PostList';

// const CardComponent = ({ post , children }) => {
//   if (!post || !post.imageUrl || !post.title || !post.content || !post.createdAt) return null;

//   return (
    
//     <Card sx={{ maxWidth: 300 , margin: 1 , display: 'inline-grid'}}>
//       {post.imageUrl && (
//         <CardMedia
//           sx={{ height: 140,  width: '150px'}}
//           image={post.imageUrl}
//           title={post.title}
//         />
//       )}
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {post.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {post.content.substring(0, 100)}...
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(post.createdAt).toLocaleDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
       
//         {children}
//       </CardActions>
//     </Card>
//   );
// };

// export default CardComponent;

// CardComponent.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';

const CardComponent = ({ post, children }) => {
  if (!post || !post.imageUrl || !post.title || !post.content || !post.createdAt) return null;

  return (
    <Card sx={{ maxWidth: 300, margin: 1, display: 'inline-grid' }}>
      {post.imageUrl && (
        <CardMedia
          component="img" // Ensure it's treated as an img element
          sx={{ height: '300', width: '100%', paddingTop: '0' }} // Maintain aspect ratio
          image={post.imageUrl}
          title={post.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content.substring(0, 100)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(post.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
};

export default CardComponent;
