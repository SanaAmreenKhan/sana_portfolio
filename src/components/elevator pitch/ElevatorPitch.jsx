// ElevatorPitch.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const ElevatorPitch = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid  size={{xs:12,md:8}}>
          <Typography variant="h4" gutterBottom>
            Elevator Pitch
          </Typography>
          <Typography variant="body1" paragraph>
            Hi, I’m Sana, a full stack developer specializing in React and Node. I build fast, accessible, scalable applications that solve real problems. With 4.4 years of experience, I’ve optimized UIs, built ERP systems, and led teams to deliver results.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="https://www.linkedin.com/in/er-sana-khan"
            target="_blank"
          >
            Connect on LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ElevatorPitch;
