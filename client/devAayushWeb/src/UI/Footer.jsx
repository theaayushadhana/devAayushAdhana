// import React from "react"

// const Footer = () =>{ 
//   return(<>
//   <footer style={{backgroundColor: 'black', height: '200px'}}>

//     <p style={{color: 'white', textAlign: 'center'}}>&copy; 2024, All Rights Reserved</p>
    
//   </footer>
//   </>)
// }
// export default Footer;


// Footer.jsx
import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import { GitHub, Twitter, Facebook, LinkedIn, Instagram } from '@mui/icons-material'; // Import icons from Material-UI

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px', height: '200px' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Connect with us
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Link href="https://github.com/your_github_profile" target="_blank" rel="noopener noreferrer" color="inherit">
            <GitHub />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer" color="inherit">
            <Twitter />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer" color="inherit">
            <Facebook />
          </Link>
        </Grid>
        <Grid item>
          <Link href="www.linkedin.com/in/ayush-adhana-489104254" target="_blank" rel="noopener noreferrer" color="inherit">
            <LinkedIn />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com/theaayushadhana/" target="_blank" rel="noopener noreferrer" color="inherit">
            <Instagram />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
