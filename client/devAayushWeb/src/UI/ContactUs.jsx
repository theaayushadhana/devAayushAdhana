import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import WebIcon from '@mui/icons-material/Web'; // Importing an example icon
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'; // Importing an example icon
import GraphicEqIcon from '@mui/icons-material/GraphicEq'; // Importing an example icon

const ServicesPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Web Development"
              secondary="Crafting responsive and scalable web applications to elevate your digital presence."
              sx={{ display: 'flex', alignItems: 'center' }}
            />
            <Box ml={2}>
              <WebIcon sx={{ fontSize: 36 }} />
            </Box>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Mobile App Development"
              secondary="Building native and cross-platform mobile apps for seamless user experiences."
              sx={{ display: 'flex', alignItems: 'center' }}
            />
            <Box ml={2}>
              <MobileFriendlyIcon sx={{ fontSize: 36 }} />
            </Box>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="UI/UX Design"
              secondary="Designing intuitive interfaces that captivate users and drive engagement."
              sx={{ display: 'flex', alignItems: 'center' }}
            />
            <Box ml={2}>
              <GraphicEqIcon sx={{ fontSize: 36 }} />
            </Box>
          </ListItem>
          <Divider />
        </List>
      </Paper>
    </Container>
  );
};

export default ServicesPage;
