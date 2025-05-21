// MuiTheme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a192f", // Navy
    },
    secondary: {
      main: "#64ffda", // Teal
    },
    background: {
      paper: "#112240", // Slightly lighter navy for cards
    },
    text: {
      primary: "#ccd6f6", // Soft white-blue
      secondary: "#8892b0", // Gray-blue
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "4px",
          textTransform: "none",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #64ffda 0%, #4fd1c5 100%)",
          color: "#0a192f",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(100, 255, 218, 0.3)",
          },
        },
        outlined: {
          borderColor: "#64ffda",
          color: "#64ffda",
          "&:hover": {
            backgroundColor: "rgba(100, 255, 218, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#112240",
          border: "1px solid rgba(100, 255, 218, 0.1)",
          borderRadius: "8px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          background: "linear-gradient(90deg, #ccd6f6 0%, #64ffda 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        h2: {
          fontWeight: 600,
          color: "#ccd6f6",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: 0,
            width: "60px",
            height: "3px",
            background: "#64ffda",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(100, 255, 218, 0.1)",
          border: "1px solid rgba(100, 255, 218, 0.3)",
          color: "#64ffda",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(100, 255, 218, 0.1)",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#64ffda",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h3: { fontWeight: 600, color: "#ccd6f6" },
    h4: { fontWeight: 500, color: "#ccd6f6" },
    body1: { color: "#8892b0", lineHeight: 1.6 },
  },
});

export default theme;
