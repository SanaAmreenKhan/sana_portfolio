import { Typography, Grid, Card, useTheme, ContactMail } from "../../lib";
import { GradientBox } from "../../components/utils/MuiGradients";
import { personalDetails } from "../../components/utils/commonNamed";
import PersonalContacts from "./PersonalContacts";

const Contacts = () => {
  const theme = useTheme();
  return (
    <GradientBox
      sx={{
        p: { xs: 3, md: 8 },
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="center">
        <Grid>
          <Card
            sx={{
              p: 4,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h2"
              textAlign="left"
              gutterBottom
              sx={{ mb: 4 }}
            >
              <ContactMail
                sx={{
                  mr: 1,
                  verticalAlign: "middle",
                  color: "secondary.main",
                  fontSize: "2.5rem",
                }}
              />
              Contact
            </Typography>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "secondary.main", fontWeight: 500 }}
                >
                  Personal Details
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Name:
                  </strong>
                  Sana Amreen
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Email:
                  </strong>{" "}
                  {personalDetails.emailID}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Mobile:
                  </strong>{" "}
                  +966-575943210 (KSA), +91-9156736738 (India)
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Location:
                  </strong>{" "}
                  {personalDetails.address}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <PersonalContacts />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </GradientBox>
  );
};

export default Contacts;
