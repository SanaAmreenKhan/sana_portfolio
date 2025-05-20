import { Box, Typography, Card, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";

const ElevatorPitch = () => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
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
            background: "linear-gradient(90deg, #ccd6f6 0%, #64ffda 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Value Proposition
        </Typography>

        <Card
          sx={{
            p: { xs: 3, md: 6 },
            background: "#112240",
            border: "1px solid rgba(100, 255, 218, 0.1)",
            textAlign: "left",
          }}
        >
          <Typography variant="h4" sx={{ color: "#64ffda", mb: 3 }}>
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
                color: "#0a192f",
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
              sx={{
                borderColor: "#64ffda",
                color: "#64ffda",
                "&:hover": {
                  background: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ElevatorPitch;