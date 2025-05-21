import {
  Box,
  Button,
  Grid,
  Typography,
  Chip,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Snackbar,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  LocationOn,
  Work,
  Email,
  LinkedIn,
  Badge,
  AssignmentInd,
  Close,
  DownloadForOffline,
} from "@mui/icons-material";
import { useState } from "react";
import { GradientBox } from "../utils/MuiGradients";

const featuredProjects = [
  {
    title: "Project Lightning (3D Visualization Tool)",
    techStack: "React.js, Three.js, Recoil, Material UI",
    description:
      "Built a responsive and interactive 3D visualization interface for internal structural design workflows. Improved performance and user experience through dynamic data rendering and custom views.",
    image: "/placeholder-lightning.jpeg",
    companyNote: "Built during my role at Kanaka Software Consulting Pvt. Ltd.",
  },
  {
    title: "Emulation Lab (Web-Based Simulation UI)",
    techStack: "React.js, Recoil, Material UI, Azure DevOps",
    description:
      "Developed a modular UI for simulating engineering scenarios, integrated with REST APIs and chatbot interface with websockets integration. Reduced support queries by 30% through intuitive user guidance.",
    image: "/placeholder-emulation.jpg",
    companyNote: "Built during my role at Kanaka Software Consulting Pvt. Ltd.",
  },
];

const PortfolioHome = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setOpen(true);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <GradientBox>
      {/* Hero Section - Full Viewport Height */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          px: { xs: 4, md: 8 },
          pt: { xs: 8, md: 0 },
        }}
      >
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "secondary.main", mb: 2 }}
          >
            Hi, I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              background:
                theme.components.MuiTypography.styleOverrides.h1.background,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sana Amreen Khan
          </Typography>
          <Typography variant="h4" sx={{ color: "text.secondary", mb: 4 }}>
            Full Stack Developer specializing in MERN stack applications
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, maxWidth: "600px" }}>
            I build scalable web applications with measurable performance
            improvements. 4.4+ years experience delivering 40-60% efficiency
            gains through optimized code.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              href="/Sana FullStack Developer-2025.pdf"
              download="Sana-Amreen-Resume.pdf"
              startIcon={<DownloadForOffline />}
              sx={{
                background: "linear-gradient(90deg, #64ffda 0%, #4fd1c5 100%)",
                color: "primary.main",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              Download Resume
            </Button>
            <Button variant="outlined" href="/contact">
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Highlights Section */}
      <Box sx={{ px: { xs: 4, md: 8 }, py: 1 }}>
        <Typography variant="h3" sx={{ color: "text.primary", mb: 4 }}>
          At a Glance
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 4 }}>
              {[
                { icon: <LocationOn />, label: "Jeddah, Saudi Arabia" },
                { icon: <Work />, label: "4.4+ Years Experience" },
                {
                  icon: <Email />,
                  label: "er.sanaamreenkhan@gmail.com",
                  copy: "er.sanaamreenkhan@gmail.com",
                },
                {
                  icon: <LinkedIn />,
                  label: "linkedin.com/in/er-sana-khan",
                  copy: "https://linkedin.com/in/er-sana-khan",
                },
                {
                  icon: <Badge />,
                  label: "Iqama: 2597845953",
                  copy: "2597845953",
                },
                {
                  icon: <AssignmentInd />,
                  label: "Passport: T7585719",
                  copy: "T7585719",
                },
              ].map((item, index) => (
                <Chip
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  onClick={item.copy ? () => handleCopy(item.copy) : null}
                  clickable={!!item.copy}
                  sx={{
                    "&:hover": {
                      background: item.copy
                        ? "rgba(100, 255, 218, 0.2)"
                        : undefined,
                    },
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ color: "text.primary", mb: 2 }}>
              Technical Expertise
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "TypeScript",
                "Material UI",
                "Three.js",
                "REST APIs",
                "JWT",
                "Azure DevOps",
                "Git",
                "Figma",
              ].map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Projects */}
      <Box
        sx={{
          px: { xs: 4, md: 8 },
          py: 8,
          background: "rgba(15, 23, 42, 0.5)",
        }}
      >
        <Typography variant="h3" sx={{ color: "text.primary", mb: 6 }}>
          Featured Projects
        </Typography>

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
                  <Typography
                    variant="h5"
                    sx={{ color: "secondary.main", mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "secondary.main", mb: 2 }}
                  >
                    {project.techStack}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "secondary.main" }}
                  >
                    {project.companyNote}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            href="/portfolio"
            sx={{
              px: 4,
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`Copied: ${copiedText}`}
        action={
          <IconButton size="small" color="inherit" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            border: "1px solid #64ffda",
          },
        }}
      />
    </GradientBox>
  );
};

export default PortfolioHome;
