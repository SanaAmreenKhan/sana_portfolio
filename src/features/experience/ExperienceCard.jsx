import {
  Box,
  Typography,
  Card,
  Divider,
  Chip,
  useTheme,
  ExperienceIcon,
  LocationOn,
  CalendarToday,
} from "../../lib";

const ExperienceCard = ({
  position,
  date,
  company,
  location,
  skills,
  achievements,
}) => {
  const theme = useTheme();

  const cardStyle = {
    p: 3,
    borderRadius: 2,
    boxShadow: 3,
  };

  return (
    <Card sx={cardStyle}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5" sx={{ color: "secondary.main", mb: 1 }}>
          {position}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <CalendarToday
            sx={{
              fontSize: "16px",
              verticalAlign: "middle",
              mr: 1,
            }}
          />
          {date}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
        <ExperienceIcon
          sx={{
            fontSize: "18px",
            verticalAlign: "middle",
            mr: 1,
            color: "text.secondary",
          }}
        />
        {company}
        <LocationOn
          sx={{
            fontSize: "18px",
            verticalAlign: "middle",
            mx: 1,
            color: "text.secondary",
          }}
        />
        {location}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="subtitle1"
        sx={{
          color: "text.primary",
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
            background: theme.palette.secondary.main,
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
        {achievements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          color: "text.primary",
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
            background: theme.palette.secondary.main,
            mr: 1.5,
          }}
        />
        Technologies Used
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            size="small"
            sx={{
              borderRadius: "4px",
            }}
          />
        ))}
      </Box>
    </Card>
  );
};

export default ExperienceCard;
