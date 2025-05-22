import { Box, Typography, useTheme, useMediaQuery } from "../../lib";
import { GradientBox } from "../../components/utils/MuiGradients";
import ExperinceCardList from "./ExperinceCardList";

const UserExperience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <GradientBox
      sx={{
        p: { xs: 3, md: 8 },
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
            transform: "translateX(-1px)",
            width: "2px",
            background: "linear-gradient(to bottom, #64ffda, transparent)",
            zIndex: 0,
          }}
        />

        <ExperinceCardList />
      </Box>
    </GradientBox>
  );
};

export default UserExperience;
