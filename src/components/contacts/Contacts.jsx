import { Box, Typography, Grid, Card, Link } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contacts = () => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="center">
        <Grid>
          <Card
            sx={{
              p: 4,
              background: "#112240",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h2"
              textAlign="left"
              gutterBottom
              sx={{ mb: 4 }}
            >
              <ContactMailIcon
                sx={{
                  mr: 1,
                  verticalAlign: "middle",
                  color: "#64ffda",
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
                  sx={{ color: "#64ffda", fontWeight: 500 }}
                >
                  Personal Details
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Name:</strong> Sana
                  Amreen
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Email:</strong>{" "}
                  er.sanaamreenkhan@gmail.com
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Mobile:</strong>{" "}
                  +966-575943210 (KSA), +91-9156736738 (India)
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Location:</strong>{" "}
                  Jeddah, Saudi Arabia
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#64ffda", fontWeight: 500 }}
                >
                  Professional Details
                </Typography>
                <Typography variant="body1" color="#ccd6f6" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>LinkedIn:</strong>{" "}
                  <Link
                    href="https://linkedin.com/in/er-sana-khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#64ffda",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#ccd6f6", // Lighter color on hover
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationColor: "#64ffda", // Underline with teal color
                      },
                    }}
                    sx={{
                      // Using sx prop for better MUI integration
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "1.4rem" }} />
                    linkedin.com/in/er-sana-khan
                  </Link>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Iqama No:</strong>{" "}
                  2597845953 | Expiry: 24/11/25
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong style={{ color: "#ccd6f6" }}>Passport No:</strong>{" "}
                  T7585719
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
