import {
  Box,
  Typography,
  Card,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const experiences = [
  {
    date: "July 2024 – Dec 2024",
    company: "Kanaka Software Consulting Pvt. Ltd.",
    location: "Pune, India",
    position: "Software Engineer",
    achievements: [
      "Designed scalable frontend apps for structural engineers (60% efficiency boost)",
      "Integrated MSAL authentication for secure access",
      "Enhanced 3D visualization with Three.js (50% error reduction)",
      "Implemented chatbot UI (40% interaction improvement)",
      "code reviews (80% quality improvement)",
    ],
    skills: [
      "React.js",
      "Three.js",
      "MSAL Auth",
      "Recoil",
      "Material-UI",
      "Team Leadership",
    ],
  },
  {
    date: "Oct 2022 – June 2024",
    company: "Kanaka Software Consulting Pvt. Ltd.",
    location: "Pune, India",
    position: "Associate Software Engineer",
    achievements: [
      "Built web apps with React.js/TypeScript",
      "Integrated REST APIs for backend communication",
      "Collaborated with stakeholders on specifications",
      "Maintained technical documentation",
    ],
    skills: ["React.js", "TypeScript", "REST APIs"],
  },
  {
    date: "May 2020 – August 2022",
    company: "Iconic E-Tech Pvt. Ltd.",
    location: "Chennai, India",
    position: "React.js Developer",
    achievements: [
      "Created responsive UIs with React.js",
      "Developed reusable components (50% faster dev)",
      "Integrated REST APIs",
    ],
    skills: ["React.js", "Bootstrap", "REST APIs"],
  },
];

const UserExperience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardStyle = {
    p: 3,
    background: "#112240",
    border: "1px solid rgba(100, 255, 218, 0.1)",
    borderRadius: 2,
    boxShadow: 3,
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  };

  return (
    <Box
      sx={{
        p: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
        Experience
      </Typography>

      {/* Container with relative positioning for the timeline line and dots */}
      <Box sx={{ position: "relative", pl: 2, pr: 2 }}>
        {/* Timeline vertical line in center */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: isMobile ? "4.5%" : "50%",
            transform: "translateX(-1px)", // center 2px line
            width: "2px",
            background: "linear-gradient(to bottom, #64ffda, transparent)",
            zIndex: 0,
          }}
        />

        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              mb: 10,
            }}
          >
            {/* LEFT SIDE */}
            {index % 2 === 0 && !isMobile ? (
              <>
                <Box sx={{ width: "48%", pr: 3 }}>
                  <Card sx={cardStyle}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="h5" sx={{ color: "#64ffda", mb: 1 }}>
                        {exp.position}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#8892b0" }}>
                        <CalendarTodayIcon
                          sx={{
                            fontSize: "16px",
                            verticalAlign: "middle",
                            mr: 1,
                            color: "#64ffda",
                          }}
                        />
                        {exp.date}
                      </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ color: "#ccd6f6", mb: 2 }}>
                      <WorkIcon
                        sx={{
                          fontSize: "18px",
                          verticalAlign: "middle",
                          mr: 1,
                          color: "#8892b0",
                        }}
                      />
                      {exp.company}
                      <LocationOnIcon
                        sx={{
                          fontSize: "18px",
                          verticalAlign: "middle",
                          mx: 1,
                          color: "#8892b0",
                        }}
                      />
                      {exp.location}
                    </Typography>

                    <Divider
                      sx={{ borderColor: "rgba(100, 255, 218, 0.1)", my: 2 }}
                    />

                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#ccd6f6",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#64ffda",
                          mr: 1.5,
                        }}
                      />
                      Key Achievements
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        mb: 3,
                      }}
                    >
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#ccd6f6",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#64ffda",
                          mr: 1.5,
                        }}
                      />
                      Technologies Used
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {exp.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            background: "rgba(100, 255, 218, 0.1)",
                            color: "#64ffda",
                            border: "1px solid rgba(100, 255, 218, 0.3)",
                            borderRadius: "4px",
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                </Box>
                {/* DOT */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "0px",
                    transform: "translateX(-50%)",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "#64ffda",
                    border: "3px solid #112240",
                    zIndex: 1,
                  }}
                />
                <Box sx={{ width: "48%" }} />
              </>
            ) : (
              <>
                <Box sx={{ width: isMobile ? "10%" : "48%" }} />
                {/* DOT */}
                <Box
                  sx={{
                    position: "absolute",
                    left: isMobile ? "0%" : "50%",
                    top: "0px",
                    transform: "translateX(-50%)",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "#64ffda",
                    border: "3px solid #112240",
                    zIndex: 1,
                  }}
                />
                <Box sx={{ width: isMobile ? "100%" : "48%", pl: 3 }}>
                  <Card sx={cardStyle}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="h5" sx={{ color: "#64ffda", mb: 1 }}>
                        {exp.position}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#8892b0" }}>
                        <CalendarTodayIcon
                          sx={{
                            fontSize: "16px",
                            verticalAlign: "middle",
                            mr: 1,
                            color: "#64ffda",
                          }}
                        />
                        {exp.date}
                      </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ color: "#ccd6f6", mb: 2 }}>
                      <WorkIcon
                        sx={{
                          fontSize: "18px",
                          verticalAlign: "middle",
                          mr: 1,
                          color: "#8892b0",
                        }}
                      />
                      {exp.company}
                      <LocationOnIcon
                        sx={{
                          fontSize: "18px",
                          verticalAlign: "middle",
                          mx: 1,
                          color: "#8892b0",
                        }}
                      />
                      {exp.location}
                    </Typography>

                    <Divider
                      sx={{ borderColor: "rgba(100, 255, 218, 0.1)", my: 2 }}
                    />

                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#ccd6f6",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#64ffda",
                          mr: 1.5,
                        }}
                      />
                      Key Achievements
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        mb: 3,
                      }}
                    >
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#ccd6f6",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#64ffda",
                          mr: 1.5,
                        }}
                      />
                      Technologies Used
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {exp.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            background: "rgba(100, 255, 218, 0.1)",
                            color: "#64ffda",
                            border: "1px solid rgba(100, 255, 218, 0.3)",
                            borderRadius: "4px",
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                </Box>
              </>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserExperience;
