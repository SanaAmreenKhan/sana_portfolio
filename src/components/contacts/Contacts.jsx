import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StarIcon from "@mui/icons-material/Star";

const Contacts = () => {
  return (
      <Box p={4} bgcolor="#0d1b2a" color="#e0e1dd">
      <Typography variant="h3" textAlign="center" gutterBottom>
        <ContactMailIcon sx={{ mr: 1 }} /> Contact
      </Typography>
      <Typography variant="h6" mt={4}>
        Name: Sana Amreen
      </Typography>
      <Typography variant="body1">Email: er.sanaamreenkhan@gmail.com</Typography>
      <Typography variant="body1">Mobile: +966-575943210 (KSA), +91-9156736738 (India)</Typography>
      <Typography variant="body1">Location: Jeddah, Saudi Arabia</Typography>
      <Typography variant="body1">LinkedIn: linkedin.com/in/er-sana-khan</Typography>
      <Typography variant="body1">Iqama No: 2597845953 | Expiry: 24/11/25</Typography>
      <Typography variant="body1">Passport No: T7585719</Typography>
    </Box>
  )
}

export default Contacts
