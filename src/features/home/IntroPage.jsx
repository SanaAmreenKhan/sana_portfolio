import {
  Box,
  Button,
  Typography,
  Stack,
  useTheme,
  DownloadForOffline,
} from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";

const IntroPage = () => {
  const theme = useTheme();
  return (
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
        <Typography variant="subtitle1" sx={{ color: "secondary.main", mb: 2 }}>
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
          {personalDetails.name}
        </Typography>
        <Typography variant="h4" sx={{ color: "text.secondary", mb: 4 }}>
          {personalDetails.role} specializing in MERN stack applications
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, maxWidth: "600px" }}>
          I build scalable web applications with measurable performance
          improvements. {personalDetails.experience} experience delivering
          40-60% efficiency gains through optimized code.
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
  );
};

export default IntroPage;
