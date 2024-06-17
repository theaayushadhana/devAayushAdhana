import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/explore.jpg'; // Replace with your background image

// Styled container for the animated text
const AnimatedTextContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; /* Adjust height as needed */
  background: url(${backgroundImage}) center/cover no-repeat fixed; /* Background image */
  background-color: rgba(0, 0, 0, 0.7); /* Overlay background color */
  color: #fff; /* Text color */
  text-align: center;
  padding: 20px; /* Adjust padding as needed */
  
`;

const AnimatedText = () => {
  return (
    <AnimatedTextContainer maxWidth="100%">
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '50px', marginTop: '100px' }}>
        Welcome to Developer AayushWeb
      </Typography>
      {/* Add more text or description here */}
    </AnimatedTextContainer>
  );
};

export default AnimatedText;
