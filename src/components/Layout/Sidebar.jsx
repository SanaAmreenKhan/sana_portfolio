import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Outlet } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Home as HomeIcon,
  Info as AboutIcon,
  Work as ExperienceIcon,
  Mic as PitchIcon,
  Folder as ProjectsIcon,
  Email as ContactIcon,
} from "@mui/icons-material";

const renderComponent = [
  { title: "Home", to: "/", icon: <HomeIcon /> },
  { title: "About", to: "/about", icon: <AboutIcon /> },
  { title: "Experience", to: "/experience", icon: <ExperienceIcon /> },
  { title: "Elevator Pitch", to: "/elevator-pitch", icon: <PitchIcon /> },
  { title: "Projects", to: "/projects", icon: <ProjectsIcon /> },
  { title: "Contact", to: "/contact", icon: <ContactIcon /> },
];

const Sidebar = ({ open, onClose }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        background: "linear-gradient(180deg, #0a192f 0%, #112240 100%)",
        borderRight: theme.components.MuiCard.styleOverrides.root.border,
        width: isMobile ? 250 : "100%",
      })}
    >
      {isMobile && (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <List>
        <Box sx={{ p: 2, textAlign: "center", mt: isMobile ? 4 : 0 }}>
          <Avatar
            src="/user.png"
            alt="Sana's Image"
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto",
              border: "2px solid #64ffda",
            }}
          />
          {open && (
            <>
              <Typography variant="h6" sx={{ mt: 2, color: "text.primary" }}>
                Sana Amreen Khan
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.main" }}>
                Full Stack Developer
              </Typography>
            </>
          )}
        </Box>
        <Divider />
      </List>
      <List>
        {renderComponent.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={NavLink}
              to={item.to}
              sx={{
                minHeight: 48,
                px: 2.5,
                "&.active": {
                  color: (theme) => theme.palette.secondary.main, // active state color
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.05)",
                },
                justifyContent: open ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.title} />}
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      <Outlet />
    </Box>
  );
};

export default Sidebar;
