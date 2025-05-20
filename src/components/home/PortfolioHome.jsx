import {
  Box,
  Button,
  Grid,
  Typography,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Link } from "react-router-dom";

const PortfolioHome = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={4}
      sx={{ p: 4 }}
      bgcolor="primary.main" 
          color="background.default"
    >
      {/* Hero Section */}
      <Grid>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          color="background.default"
        >
          Sana Amreen Khan
        </Typography>
        <Typography variant="h5" color="secondary.main" gutterBottom>
          Full Stack Developer | React.js & Node.js Specialist
        </Typography>
        <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 2 }}>
          Creating intuitive UIs and scalable web apps using MERN stack.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            sx={{ backgroundColor: "secondary.main" }}
            variant="outlined"
            size="large" startIcon={<DownloadForOfflineIcon/>}
             href="/Sana FullStack Developer-2025.pdf"
  download="Sana-Amreen-Resume.pdf"
          >
            Resume
          </Button>
          <Button
            sx={{ backgroundColor: "background.default" }}
            variant="outlined"
            size="large"
            href="/contact"
          >
            Hire Me
          </Button>
          <Button
            sx={{ backgroundColor: "background.default" }}
            variant="text"
            size="large" 
            href="/portfolio"
          >
            See Projects
          </Button>
        </Stack>
      </Grid>

      {/* Short Introduction */}
      <Grid>
        <Typography variant="body1">
          I’m an experienced software developer with 4.4 years in building
          dynamic front-end applications and expanding backend skills in Node.js
          and MongoDB. Passionate about crafting full-stack solutions with clean
          code and engaging interfaces.
        </Typography>
      </Grid>

      {/* Highlights / At a Glance */}
      <Grid>
        <Stack direction="row"  flexWrap="wrap" gap={1}
          >
          <Chip icon={<LocationOnIcon />} label="Jeddah, Saudi Arabia" sx={{backgroundColor:
          "secondary.main"}} />
          <Chip icon={<WorkIcon />} label="4.4+ Years" sx={{backgroundColor:
          "secondary.main"}} />
          <Chip icon={<EmailIcon />} label="er.sanaamreenkhan@gmail.com" sx={{backgroundColor:
          "secondary.main"}} />
          <Link to={"https://linkedin.com/in/er-sana-khan"}><Chip icon={<LinkedInIcon />} label="linkedin.com/in/er-sana-khan" sx={{backgroundColor:
          "secondary.main"}}  /></Link>
          
          <Chip icon={<BadgeIcon />} label="Iqama No: 2597845953" sx={{backgroundColor:
          "secondary.main"}} />
          <Chip icon={<AssignmentIndIcon />} label="Passport: T7585719" sx={{backgroundColor:
          "secondary.main"}} />
        </Stack>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom>
          Skills Snapshot
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          <Chip icon={<CodeIcon />} label="React.js" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Node.js" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<StorageIcon />} label="MongoDB" sx={{backgroundColor:
          "secondary.main"}} />
          <Chip icon={<DnsIcon />} label="Express.js" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="REST API" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="JWT" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Mongoose" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Material UI" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Recoil" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Azure DevOps" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<CodeIcon />} label="Postman" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<GitHubIcon />} label="GitHub" sx={{backgroundColor:
          "secondary.main"}}/>
          <Chip icon={<InsertPhotoIcon />} label="Figma" sx={{backgroundColor:
          "secondary.main"}}/>
        </Stack>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom>
          Featured Projects
        </Typography>
        <Grid container spacing={2} color={"text.primary"}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box bgcolor="background.paper" p={2} borderRadius={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Project Lightening
              </Typography>
              <Typography variant="body2">
                A responsive UI with real-time data rendering using React,
                Recoil, Three.js. Boosted user engagement by 40%.
              </Typography>
              <Button size="small">View More</Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box bgcolor="background.paper" p={2} borderRadius={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Emulation Lab
              </Typography>
              <Typography variant="body2">
                Scalable UI with chatbot and performance optimizations using
                Material UI, Recoil, Axios.
              </Typography>
              <Button size="small">View More</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button variant="contained" color="primary">
            Hire Me
          </Button>
          <Button variant="outlined" color="primary">
            Download Resume
          </Button>
          <Button variant="text" color="secondary">
            Let’s Connect
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PortfolioHome;
