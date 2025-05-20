import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";

const renderComponent = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Experience", to: "/experience" },
  { title: "Elevator Pitch", to: "/elevator-pitch" },
  { title: "Projects", to: "/projects" },
  { title: "Contact", to: "/contact" },
];

const Sidebar = ({ open }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(180deg, #0a192f 0%, #112240 100%)",
        borderRight: "1px solid rgba(100, 255, 218, 0.1)",
      }}
    >
      <List>
        <Box sx={{ p: 2, textAlign: "center" }}>
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
          <Typography variant="h6" sx={{ mt: 2, color: "#ccd6f6" }}>
            Sana Amreen Khan
          </Typography>
          <Typography variant="body2" sx={{ color: "#64ffda" }}>
            Full Stack Developer
          </Typography>
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
                color: "#8892b0",
                "&.active": {
                  color: "#64ffda",
                  background: "rgba(100, 255, 218, 0.1)",
                },
                "&:hover": {
                  background: "rgba(100, 255, 218, 0.05)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "inherit",
                }}
              >
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "inherit" }} />
                ) : (
                  <MailIcon sx={{ color: "inherit" }} />
                )}
              </ListItemIcon>{" "}
              &nbsp;
              <ListItemText primary={item.title} />
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
