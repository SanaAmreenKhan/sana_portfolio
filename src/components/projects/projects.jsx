import { Box, Typography, Grid, Card, CardMedia, Chip } from "@mui/material";
import { Code, Storage } from "@mui/icons-material";

const projects = [
  {
    title: "Emulation Lab",
    description:
      "Web-based simulation platform for engineering workflows with chatbot integration",
    technologies: ["React.js", "TypeScript", "Azure", "Three.js", "Node.js"],
    impact: "Reduced support queries by 30% and improved performance by 80%",
    image: "/emulation-lab.jpg",
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
    image: "/project-lightening.jpg",
  },
  {
    title: "Unique Blinds",
    description:
      "E-commerce platform for custom window treatments with responsive UI",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "JWT"],
    impact:
      "Improved conversion rate by 25% through intuitive product visualization",
    image: "/unique-blinds.jpg",
  },
  {
    title: "Offilms",
    description: "Movie streaming platform with cross-device compatibility",
    technologies: ["React.js", "React Bootstrap", "REST APIs", "Jest", "AWS"],
    impact: "Achieved 99.8% uptime and seamless playback across devices",
    image: "/offilms.jpg",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 6,
          background: "linear-gradient(90deg, #ccd6f6 0%, #64ffda 100%)",
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
                background: "#112240",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                },
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
                <Typography variant="h4" sx={{ color: "#64ffda", mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#8892b0", mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Storage sx={{ color: "#64ffda", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "#ccd6f6" }}>
                    <strong>Impact:</strong> {project.impact}
                  </Typography>
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#ccd6f6",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Code sx={{ color: "#64ffda", mr: 1 }} />
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: "rgba(100, 255, 218, 0.1)",
                          color: "#64ffda",
                          border: "1px solid rgba(100, 255, 218, 0.3)",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
