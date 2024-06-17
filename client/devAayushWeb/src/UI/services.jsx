import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const ServicesPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Web Development" secondary="Building responsive and scalable web applications" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Mobile App Development" secondary="Creating native and cross-platform mobile apps" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="UI/UX Design" secondary="Crafting intuitive and user-friendly interfaces" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Digital Marketing" secondary="Driving traffic and engagement through digital channels" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Consulting Services" secondary="Providing expert advice and solutions" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default ServicesPage;
