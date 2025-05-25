import {
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  NavLink,
  Close,
} from "../../lib";
import { renderComponent } from "../common/commonReuseableObject";
import { personalDetails } from "../utils/commonNamed";

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
            zIndex: 1400,
          }}
        >
          <Close />
        </IconButton>
      )}

      <List>
        <Box sx={{ p: 2, textAlign: "center", mt: isMobile ? 4 : 0 }}>
          <Avatar
            src="/sana-profile.jpeg"
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
                {personalDetails.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.main" }}>
                Full Stack MERN Developer
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
              onClick={() => {
                if (isMobile) onClose();
              }}
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
    </Box>
  );
};

export default Sidebar;
