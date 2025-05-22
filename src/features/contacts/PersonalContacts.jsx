import { personalDetails } from "../../components/utils/commonNamed";
import { Typography, Link, useTheme, LinkedIn } from "../../lib";
const PersonalContacts = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "secondary.main", fontWeight: 500 }}
      >
        Professional Details
      </Typography>
      <Typography variant="body1" color="text.primary" paragraph>
        <strong style={{ color: theme.palette.text.primary }}>LinkedIn:</strong>{" "}
        <Link
          href={personalDetails.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.secondary.main,
            textDecoration: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              color: theme.palette.text.primary,
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
        <strong style={{ color: theme.palette.text.primary }}>Iqama No:</strong>{" "}
        {personalDetails.iqamaNo} | Expiry: 24/11/25
      </Typography>
      <Typography variant="body1" paragraph>
        <strong style={{ color: theme.palette.text.primary }}>
          Passport No:
        </strong>{" "}
        {personalDetails.passportNo}
      </Typography>
    </>
  );
};

export default PersonalContacts;
