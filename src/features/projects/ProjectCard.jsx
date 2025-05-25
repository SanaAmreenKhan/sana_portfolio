import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  Code,
  Storage,
} from "../../lib";

const ProjectCard = ({ project }) => (
  <Card
    component={project.clickable ? "a" : "div"}
    href={project.clickable ? project.link : undefined}
    target={project.clickable ? "_blank" : undefined}
    rel={project.clickable ? "noopener noreferrer" : undefined}
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
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
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Typography variant="h4" sx={{ color: "secondary.main", mb: 1 }}>
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
);

export default ProjectCard;
