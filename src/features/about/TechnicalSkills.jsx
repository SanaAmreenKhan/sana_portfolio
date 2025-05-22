import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Code,
  Storage,
  Dns,
  Palette,
  Build,
  Cloud,
  Security,
  DesignServices,
  GitHub,
  Api,
  BugReport,
  DataObject,
} from "../../lib";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette />,
      skills: ["React.js", "TypeScript", "Material-UI", "Three.js", "Redux"],
      iconMap: {
        "React.js": <Code />,
        TypeScript: <DataObject />,
        "Material-UI": <DesignServices />,
        "Three.js": <DesignServices />,
        Redux: <Storage />,
      },
    },
    {
      title: "Backend",
      icon: <Dns />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
      iconMap: {
        "Node.js": <Code />,
        "Express.js": <Api />,
        MongoDB: <Storage />,
        "REST APIs": <Api />,
        JWT: <Security />,
      },
    },
    {
      title: "Tools & Platforms",
      icon: <Build />,
      skills: ["Git", "Azure DevOps", "Postman", "Figma", "Jest"],
      iconMap: {
        Git: <GitHub />,
        "Azure DevOps": <Cloud />,
        Postman: <Api />,
        Figma: <DesignServices />,
        Jest: <BugReport />,
      },
    },
  ];

  return (
    <>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Technical Skills
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {skillCategories.map((category, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                height: "100%",
                p: 3,
                background: "rgba(15, 23, 42, 0.7)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "secondary.main",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {category.icon}
                {category.title}
              </Typography>

              <Stack spacing={1}>
                {category.skills.map((skill, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      pl: 1,
                    }}
                  >
                    {category.iconMap[skill]}
                    <Typography variant="body1" sx={{ color: "text.primary" }}>
                      {skill}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TechnicalSkills;
