import { Typography, Grid, useTheme } from "../../lib";
import { GradientBox } from "../../components/utils/MuiGradients";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Emulation Lab",
    description:
      "Web-based simulation platform for engineering workflows with chatbot integration",
    technologies: ["React.js", "TypeScript", "Azure", "Three.js", "Node.js"],
    impact: "Reduced support queries by 30% and improved performance by 80%",
    image: "/placeholder-emulation.jpg",
  },
  {
    title: "Project Lightening",
    description:
      "3D visualization tool for structural engineers with real-time data rendering",
    technologies: [
      "React.js",
      "Three.js",
      "Recoil",
      "Material-UI",
      "Express.js",
    ],
    impact: "Increased user engagement by 40% and reduced design errors by 50%",
    image: "/placeholder-lightning.jpeg",
  },
  {
    title: "Unique Blinds",
    description:
      "E-commerce platform for custom window treatments with responsive UI",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "JWT"],
    impact:
      "Improved conversion rate by 25% through intuitive product visualization",
    image: "/e-commerce.webp",
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <GradientBox
      sx={{
        p: { xs: 3, md: 8 },
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 6,
          background:
            theme.components.MuiTypography.styleOverrides.h1.background,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </GradientBox>
  );
};

export default Projects;
