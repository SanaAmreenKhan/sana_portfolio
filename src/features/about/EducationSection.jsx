import { Box, Typography, Card } from "../../lib";

const EducationSection = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Education
      </Typography>
      <Card
        sx={{
          p: 3,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" color="secondary.main">
            Matoshri Pratishthan COE, Nanded
          </Typography>
          <Typography variant="body1">B.E. (CGPA: 9.18) • 2015-2018</Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="secondary.main">
            Govt. Polytechnic College Nanded
          </Typography>
          <Typography variant="body1">Diploma (77%) • 2011-2014</Typography>
        </Box>
      </Card>
    </>
  );
};

export default EducationSection;
