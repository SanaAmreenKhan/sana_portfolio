import { Box, Typography, Card, Button, useTheme } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import { GradientBox } from "../../components/utils/MuiGradients";

const ElevatorPitch = () => {
  const theme = useTheme();
  return (
    <GradientBox
      sx={{
        p: { xs: 3, md: 8 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "left" }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            background:
              theme.components.MuiTypography.styleOverrides.h1.background,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Value Proposition
        </Typography>

        <Card
          sx={{
            p: { xs: 3, md: 6 },
            textAlign: "left",
          }}
        >
          <Typography variant="h4" sx={{ color: "secondary.main", mb: 3 }}>
            "I transform complex business requirements into scalable web
            applications with measurable performance improvements."
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 2,
              mb: 4,
            }}
          >
            <li>
              <strong>Frontend Specialist:</strong> 4.4 years building
              pixel-perfect UIs with React.js, TypeScript, and advanced
              libraries like Three.js for 3D visualization
            </li>
            <li>
              <strong>Full Stack Transition:</strong> Expanded to
              Node.js/Express.js to deliver complete MERN stack solutions with
              end-to-end ownership
            </li>
            <li>
              <strong>Performance Focus:</strong> Consistently achieve 40-60%
              efficiency gains through optimized code and intelligent
              architecture
            </li>
            <li>
              <strong>Collaborative Leader:</strong> Mentor junior developers
              and conduct code reviews that improve overall team output quality
              by 50%
            </li>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircle />}
              sx={{
                background: "linear-gradient(90deg, #64ffda 0%, #4fd1c5 100%)",
                color: "primary.main",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 12px rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              Watch Video Pitch
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/Sana FullStack Developer-2025.pdf"
              download="Sana-Amreen-Resume.pdf"
            >
              Download Resume
            </Button>
          </Box>
        </Card>
      </Box>
    </GradientBox>
  );
};

export default ElevatorPitch;
