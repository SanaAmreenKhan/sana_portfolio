// UserExperience.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kanaka Software Consulting Pvt. Ltd.',
    duration: 'July 2024 – Jan 2025',
    responsibilities: [
      'Designed and developed scalable frontend applications for structural engineers, optimizing efficiency by 60%.',
      'Integrated MSAL authentication to ensure secure access, improving security compliance.',
      'Enhanced 3D visualization using Three.js and advanced UI interactions, reducing design errors by 50%.',
      'Implemented chatbot UI to improve real-time user interaction by 40%.',
      'Led code reviews and mentorship, enhancing code quality by 50%.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Kanaka Software Consulting Pvt. Ltd.',
    duration: 'Oct 2022 – June 2024',
    responsibilities: [
      'Designed and developed scalable web applications using React.js and TypeScript.',
      'Integrated RESTful APIs for seamless backend communication.',
      'Implemented customizable ERP modules to align with business workflows.',
      'Conducted requirement analysis and collaborated with stakeholders to define technical specifications.',
      'Created and maintained technical documentation for system design and development.',
    ],
  },
  {
    role: 'React.js Developer',
    company: 'Iconic E-Tech Pvt. Ltd.',
    duration: 'May 2020 – August 2022',
    responsibilities: [
      'Built responsive UIs using React.js, Redux, and Bootstrap, ensuring seamless cross-device experiences.',
      'Developed reusable and scalable UI components, reducing development time.',
      'Integrated REST APIs, improving application responsiveness.',
    ],
  },
];

const UserExperience = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{xs:12,md:8}} >
          <Typography variant="h4" gutterBottom>
            Professional Experience
          </Typography>
          {experiences.map((exp, index) => (
            <Card key={index} sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6">
                  {exp.role} at {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {exp.duration}
                </Typography>
                <ul>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserExperience;
