// Portfolios.js
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StarIcon from "@mui/icons-material/Star";

const ExperienceData = [
  {
    role: "Software Engineer",
    company: "Kanaka Software Consulting Pvt. Ltd.",
    duration: "July 2024 – Jan 2025",
    details: [
      "Designed scalable frontend apps for engineers, boosting efficiency by 60%",
      "Integrated MSAL auth and enhanced 3D visuals via Three.js",
      "Led mentorship & improved code quality by 50%",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Kanaka Software Consulting Pvt. Ltd.",
    duration: "Oct 2022 – June 2024",
    details: [
      "Built apps in React/TS, integrated RESTful APIs",
      "Developed ERP modules & maintained docs",
    ],
  },
  {
    role: "React Developer",
    company: "Iconic E-Tech Pvt. Ltd.",
    duration: "May 2020 – Aug 2022",
    details: [
      "Developed responsive UI using React, Redux",
      "Created reusable components, integrated APIs",
    ],
  },
];

const Projects = [
  {
    title: "Emulation Lab",
    stack: "React.js, MUI, Recoil, Axios, Azure",
    description: [
      "Developed scalable UI components",
      "Improved performance by 80%",
    ],
  },
  {
    title: "Project Lightening",
    stack: "React.js, Three.js, Azure",
    description: ["3D data rendering, enhanced engagement by 40%"],
  },
  {
    title: "Unique Blinds",
    stack: "React.js, REST API",
    description: ["Brand-consistent UI from custom wireframes"],
  },
  {
    title: "Offilms",
    stack: "React, Redux, Bootstrap",
    description: ["Built reusable, dynamic components"],
  },
];

const Portfolios = () => {
  return (
    <Box p={4} bgcolor="#121212" color="#f0f0f0">
      <Typography variant="h3" gutterBottom textAlign="center">
        <CodeIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Portfolio Projects
      </Typography>
      <Grid container spacing={4}>
        {Projects.map((project, index) => (
          <Grid  size={{xs:12,md:6}} key={index}>
            <Card sx={{ backgroundColor: "#1f1f1f", color: "#fff" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Stack: {project.stack}
                </Typography>
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>
                      <Typography variant="body2">{desc}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Portfolios;
