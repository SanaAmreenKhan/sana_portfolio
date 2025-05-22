import { Grid } from "../../lib";
import AboutMe from "./AboutMe";
import EducationSection from "./EducationSection";
import TechnicalSkills from "./TechnicalSkills";

const BioSection = () => {
  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <AboutMe />

      {/* Skills Section */}
      <TechnicalSkills />

      {/* Education */}
      <EducationSection />
    </Grid>
  );
};

export default BioSection;
