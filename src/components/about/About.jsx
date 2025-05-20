import { Box, Typography, Grid, Chip, Avatar, Card } from "@mui/material";

const About = () => {
  const skills = {
    frontend: ["React.js", "TypeScript", "Material-UI", "Three.js", "Redux"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    tools: ["Git", "Azure DevOps", "Postman", "Figma", "Jest"],
  };

  return (
    <Box
      sx={{
        p: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={6}>
        {/* Profile Section */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              position: "sticky",
              top: "100px",
              textAlign: "center",
              p: 4,
              background: "#112240",
              borderRadius: 2,
              border: "1px solid rgba(100, 255, 218, 0.1)",
            }}
          >
            <Avatar
              src="/sana-profile.jpg"
              sx={{
                width: 150,
                height: 150,
                mb: 3,
                border: "3px solid #64ffda",
                mx: "auto",
              }}
            />
            <Typography variant="h4" sx={{ color: "#ccd6f6", mb: 1 }}>
              Sana Amreen Khan
            </Typography>
            <Typography variant="h6" sx={{ color: "#64ffda", mb: 3 }}>
              Full Stack MERN Developer
            </Typography>

            <Box sx={{ textAlign: "left", mb: 3 }}>
              <Typography variant="body1" sx={{ color: "#8892b0", mb: 1 }}>
                <strong>Location:</strong> Jeddah, Saudi Arabia
              </Typography>
              <Typography variant="body1" sx={{ color: "#8892b0", mb: 1 }}>
                <strong>Experience:</strong> 4.4+ Years
              </Typography>
              <Typography variant="body1" sx={{ color: "#8892b0", mb: 1 }}>
                <strong>Specialization:</strong> Scalable Web Apps
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Chip
                label="Available for Hire"
                sx={{
                  background: "rgba(100, 255, 218, 0.1)",
                  color: "#64ffda",
                  border: "1px solid #64ffda",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Bio Section */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              background: "linear-gradient(90deg, #ccd6f6 0%, #64ffda 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          <Card
            sx={{
              p: 4,
              mb: 4,
              background: "#112240",
              border: "1px solid rgba(100, 255, 218, 0.1)",
            }}
          >
            <Typography variant="body1" sx={{ color: "#8892b0", mb: 2 }}>
              Innovative Full Stack Developer with 4.4 years of experience
              building scalable applications using modern JavaScript frameworks.
              Recently upskilled in backend development to complement my strong
              frontend expertise, now specializing in end-to-end MERN stack
              solutions.
            </Typography>
            <Typography variant="body1" sx={{ color: "#8892b0", mb: 2 }}>
              My passion lies in creating efficient, maintainable code and
              optimizing user experiences. I've successfully delivered projects
              with measurable performance improvements, including 60% efficiency
              gains and 50% error reductions through advanced UI
              implementations.
            </Typography>
            <Typography variant="body1" sx={{ color: "#8892b0" }}>
              When not coding, I stay updated with emerging technologies through
              continuous learning platforms like Frontend Masters and Udemy.
            </Typography>
          </Card>

          {/* Tech Stack */}
          {/* <TechStack skills={skills} /> */}

          {/* Education */}
          <Typography variant="h3" sx={{ color: "#ccd6f6", mt: 6, mb: 3 }}>
            Education
          </Typography>
          <Card sx={{ p: 3, background: "#112240" }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ color: "#64ffda" }}>
                Matoshri Pratishthan COE, Nanded
              </Typography>
              <Typography variant="body1" sx={{ color: "#8892b0" }}>
                B.E. (CGPA: 9.18) • 2015-2018
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: "#64ffda" }}>
                Govt. Polytechnic College Nanded
              </Typography>
              <Typography variant="body1" sx={{ color: "#8892b0" }}>
                Diploma (77%) • 2011-2014
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
