// About.js
import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'HTML',
  'CSS',
  'SCSS',
  'Material-UI',
  'Chakra UI',
  'Bootstrap',
  'Git',
  'Postman',
  'Figma',
  'Adobe XD',
];

const About = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{xs:12,md:8}} >
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I am a software developer with 4.4 years of experience building interactive, scalable frontends and expanding into full-stack MERN applications. I am passionate about continuous learning, improving performance, and contributing to end-to-end project lifecycles.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
