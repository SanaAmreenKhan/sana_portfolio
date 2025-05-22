import { Typography, Card, useTheme } from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <>
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
        About Me
      </Typography>

      <Card
        sx={{
          p: 4,
          mb: 4,
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Innovative {personalDetails.role} with 4.4 years of experience
          building scalable applications using modern JavaScript frameworks.
          Recently upskilled in backend development to complement my strong
          frontend expertise, now specializing in end-to-end MERN stack
          solutions.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          My passion lies in creating efficient, maintainable code and
          optimizing user experiences. I've successfully delivered projects with
          measurable performance improvements, including 60% efficiency gains
          and 50% error reductions through advanced UI implementations.
        </Typography>
        <Typography variant="body1">
          When not coding, I stay updated with emerging technologies through
          continuous learning platforms like Frontend Masters and Udemy.
        </Typography>
      </Card>
    </>
  );
};

export default AboutMe;
