import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, Outlet } from "react-router-dom";

const renderComponent = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Experience", to: "/experience" },
  {
    title: "Elevator Pitch",
    to: "/elevator-pitch",
  },
  { title: "Portfolio", to: "portfolio" },
  { title: "Contact", to: "/contact" },
];

const Sidebar = () => {
  return (
    <>
      <List>
        <img
          srcSet="/user.png"
          src="/user.png"
          alt="Sana's Image"
          loading="lazy"
        />
      </List>
      <List>
        {renderComponent.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={NavLink}
              to={item.to}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  textDecoration: "none",
                  color: "inherit",
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      <Outlet />
    </>
  );
};

export default Sidebar;
