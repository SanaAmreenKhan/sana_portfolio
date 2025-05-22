import { Grid } from "../../lib";
import { GradientBox } from "../../components/utils/MuiGradients";
import MainProfile from "./MainProfile";
import BioSection from "./BioSection";

const About = () => {
  return (
    <GradientBox
      sx={{
        p: { xs: 3, md: 8 },
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={6}>
        {/* Profile Section */}
        <MainProfile />

        {/* Bio Section */}
        <BioSection />
      </Grid>
    </GradientBox>
  );
};

export default About;
