import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import heroImage from '../assets/developer.jpg'; // Importing a hero image
import about from '../assets/about.png'
import services from '../assets/services.png'
import contact from '../assets/contact.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.7; // Adjust as needed for trigger point

      if (scrollTop > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
     const url = 'http://localhost:5173/home';
  return (
    <div>
      
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Developer AayushWeb
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Transforming Ideas into Digital Reality
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to={url} >
            Get Started
          </Button>
        </Container>
      </HeroSection>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* About Me Card */}
          <Grid item xs={12} md={4}>
            <AnimatedPaper elevation={3} isVisible={isVisible}>
              <Avatar sx={{ width: 100, height: 100, mb: 2, mx: 'auto' }}><img src={about}></img></Avatar>
              <Typography variant="h5" gutterBottom>
                About me
              </Typography>
              <Typography variant="body1">
                Welcome to Developer AayushWeb, where innovation meets excellence in web development. Our mission is to
                deliver cutting-edge solutions that transform businesses and create lasting impact.
              </Typography>
            </AnimatedPaper>
          </Grid>

          {/* Services Card */}
          <Grid item xs={12} md={4}>
            <AnimatedPaper elevation={3} isVisible={isVisible} delay={100}>
              <Avatar sx={{ width: 100, height: 100, mb: 2, mx: 'auto' }}><img src={services}></img></Avatar>
              <Typography variant="h5" gutterBottom>
                Services
              </Typography>
              <Typography variant="body1">
                I offer full stack web development services as well as free web development and other tech skills
                courses for our YouTube subscribers. If you have not subscribe to our youtube channel , then subscribe and stay updated
              </Typography>
            </AnimatedPaper>
          </Grid>

          {/* Contact Us Card */}
          <Grid item xs={12} md={4}>
            <AnimatedPaper elevation={3} isVisible={isVisible} delay={200}>
              <Avatar sx={{ width: 100, height: 100, mb: 2, mx: 'auto' }}><img src={contact}></img></Avatar>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1">
                Feel free for any queries or any suggestion or about a project
                just mail us. We will contact you as soon as possible
                 Email : developeraayush145@gmail.com
                 
              </Typography>
            </AnimatedPaper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

// Styled Components
const HeroSection = styled('section')({
  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage}) center/cover no-repeat fixed`,
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '100px 0',
  textAlign: 'center',
});

const AnimatedPaper = styled(Paper)(({ isVisible, delay }) => ({
  transition: 'transform 0.5s ease, opacity 0.5s ease',
  transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
  opacity: isVisible ? 1 : 0,
  transitionDelay: `${delay || 0}ms`,
  '&:hover': {
    transform: 'translateY(-10px)', // Lift up effect on hover
  },
}));

export default HomePage;

