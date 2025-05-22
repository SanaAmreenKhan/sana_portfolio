import { Box, Typography, Grid, Chip, Avatar } from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";
import { KeyValueOfPersonalDetail } from "../../components/common/CommonTypography";

const MainProfile = () => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Box
        sx={(theme) => ({
          position: "sticky",
          top: "100px",
          textAlign: "center",
          p: 4,
          background: theme.palette.background.paper,
          borderRadius: 2,
          border: theme.components.MuiCard.styleOverrides.root.border,
          height: "100%",
        })}
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
        <Typography variant="h4" sx={{ mb: 1 }}>
          {personalDetails.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main", mb: 3 }}>
          Full Stack MERN Developer
        </Typography>

        <Box sx={{ textAlign: "left", mb: 3 }}>
          {KeyValueOfPersonalDetail("Location", personalDetails.address)}
          {KeyValueOfPersonalDetail("Experience", personalDetails.experience)}
          {KeyValueOfPersonalDetail("Specialization", "Scalable Web Apps")}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Chip
            label="Available for Hire"
            sx={{
              color: "secondary.main",
              border: "1px solid #64ffda",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default MainProfile;
