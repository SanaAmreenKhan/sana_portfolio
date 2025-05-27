import { Grid, Typography, Card, CardMedia, CardContent } from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";

const featuredProjects = [
  {
    title: "Velvyna",
    description:
      "A modern e-commerce platform built for showcasing and selling apparel. Features include dynamic product filtering, secure checkout, user authentication, and responsive design to enhance shopping experience.",
    techStack: "MongoDB, Express.js, React.js, Node.js (MERN Stack)",
    image: "/velvyna-app.png",
    clickable: true,
    link: "https://velvynacom.vercel.app/",
  },
  {
    title: "Codify Demo",
    description:
      "An interactive web platform showcasing Codify’s IT service capabilities, featuring real-time consultation tools, custom solution previews, and chatbot support for client engagement.",
    techStack: "React.js, TypeScript, Node.js, express.js, MongoDb",
    image: "/codify-app.png",
    clickable: true,
    link: "https://personal-codeify.netlify.app/",
  },
  {
    title: "Project Lightning (3D Visualization Tool)",
    techStack: "React.js, Three.js, Recoil, Material UI",
    description:
      "Built a responsive and interactive 3D visualization interface for internal structural design workflows. Improved performance and user experience through dynamic data rendering and custom views.",
    image: "/placeholder-lightning.jpeg",
    companyNote: `Built during my role at ${personalDetails.companyName}`,
  },
];

const ProjectsList = () => {
  return (
    <Grid container spacing={4}>
      {featuredProjects.map((project, index) => (
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={
            project.link
              ? {
                  background: "#112240",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  },
                }
              : {}
          }
        >
          <Card
            key={index}
            component={project.clickable ? "a" : "div"}
            href={project.clickable ? project.link : undefined}
            target={project.clickable ? "_blank" : undefined}
            rel={project.clickable ? "noopener noreferrer" : undefined}
            sx={{
              cursor: project.clickable ? "pointer" : "default",
              textDecoration: "none",
              color: "inherit",
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
              {project?.companyNote && (
                <Typography variant="caption" sx={{ color: "secondary.main" }}>
                  {project?.companyNote}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsList;
