import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  useTheme,
} from "@mui/material";
import { Code, Storage } from "@mui/icons-material";
import { GradientBox } from "../../components/utils/MuiGradients";

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
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
              <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "secondary.main", mb: 1 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Storage sx={{ mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    <strong>Impact:</strong> {project.impact}
                  </Typography>
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.primary",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Code sx={{ mr: 1 }} />
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </GradientBox>
  );
};

export default Projects;
