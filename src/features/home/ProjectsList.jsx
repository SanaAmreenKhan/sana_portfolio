import { Grid, Typography, Card, CardMedia, CardContent } from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";

const featuredProjects = [
  {
    title: "Project Lightning (3D Visualization Tool)",
    techStack: "React.js, Three.js, Recoil, Material UI",
    description:
      "Built a responsive and interactive 3D visualization interface for internal structural design workflows. Improved performance and user experience through dynamic data rendering and custom views.",
    image: "/placeholder-lightning.jpeg",
    companyNote: `Built during my role at ${personalDetails.companyName}`,
  },
  {
    title: "Emulation Lab (Web-Based Simulation UI)",
    techStack: "React.js, Recoil, Material UI, Azure DevOps",
    description:
      "Developed a modular UI for simulating engineering scenarios, integrated with REST APIs and chatbot interface with websockets integration. Reduced support queries by 30% through intuitive user guidance.",
    image: "/placeholder-emulation.jpg",
    companyNote: `Built during my role at ${personalDetails.companyName}`,
  },
];

const ProjectsList = () => {
  return (
    <Grid container spacing={4}>
      {featuredProjects.map((project, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Card
            sx={{
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ color: "secondary.main", mb: 1 }}>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "secondary.main", mb: 2 }}
              >
                {project.techStack}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary", mb: 2 }}>
                {project.description}
              </Typography>
              <Typography variant="caption" sx={{ color: "secondary.main" }}>
                {project.companyNote}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsList;
