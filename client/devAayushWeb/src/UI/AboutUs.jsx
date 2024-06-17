import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import developerImage from '../assets/developer.jpg'; // Importing an example image
import AnimatedText from './intro';
const AboutUsPage = () => {
  return (
   
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={developerImage} alt="Developer" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Welcome to Developer AayushWeb, where innovation meets excellence in web development. Our mission is to
              deliver cutting-edge solutions that transform businesses and create lasting impact. With a dedicated team
              of experts, we specialize in building scalable web applications and digital experiences tailored to your
              unique needs.
            </Typography>
            <Typography variant="body1">
              Partner with us to leverage technology for growth and success. Let's embark on a journey to redefine your
              digital presence and achieve remarkable results together.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutUsPage;
