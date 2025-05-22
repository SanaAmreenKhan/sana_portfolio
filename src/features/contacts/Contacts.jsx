import {
  Typography,
  Grid,
  Card,
  Link,
  useTheme,
  ContactMail,
  LinkedIn,
} from "../../lib";
import { GradientBox } from "../../components/utils/MuiGradients";

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
                  </strong>{" "}
                  Sana Amreen
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Email:
                  </strong>{" "}
                  er.sanaamreenkhan@gmail.com
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
                  Jeddah, Saudi Arabia
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "secondary.main", fontWeight: 500 }}
                >
                  Professional Details
                </Typography>
                <Typography variant="body1" color="text.primary" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    LinkedIn:
                  </strong>{" "}
                  <Link
                    href="https://linkedin.com/in/er-sana-khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: theme.palette.text.primary, // Lighter color on hover
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationColor: theme.palette.secondary.main,
                      },
                    }}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <LinkedIn sx={{ fontSize: "1.4rem" }} />
                    linkedin.com/in/er-sana-khan
                  </Link>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Iqama No:
                  </strong>{" "}
                  2597845953 | Expiry: 24/11/25
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: theme.palette.text.primary }}>
                    Passport No:
                  </strong>{" "}
                  T7585719
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </GradientBox>
  );
};

export default Contacts;
