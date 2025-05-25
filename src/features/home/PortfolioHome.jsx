import {
  Box,
  Button,
  Grid,
  Typography,
  Chip,
  Stack,
  Snackbar,
  IconButton,
  Close,
} from "../../lib";
import { useState } from "react";
import { GradientBox } from "../../components/utils/MuiGradients";
import IntroPage from "./IntroPage";
import SkillSection from "./SkillSection";
import ProjectsList from "./ProjectsList";

const PortfolioHome = () => {
  const [open, setOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const handleClose = () => setOpen(false);

  return (
    <GradientBox>
      {/* Hero Section - Full Viewport Height */}
      <IntroPage />

      {/* Highlights Section */}
      <Box sx={{ px: { xs: 4, md: 8 }, py: 1 }}>
        <Typography variant="h3" sx={{ color: "text.primary", mb: 4 }}>
          At a Glance
        </Typography>

        <Grid container spacing={4}>
          <SkillSection setCopiedText={setCopiedText} setOpen={setOpen} />

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

        <ProjectsList />

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            href="/projects"
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
