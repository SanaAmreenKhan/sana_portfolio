import {
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
  Route,
  Routes,
} from "../../lib";
import PortfolioHome from "./PortfolioHome";
import About from "../about/About";
import UserExperience from "../experience/UserExperience";
import ElevatorPitch from "../elevator pitch/ElevatorPitch";
import Contacts from "../contacts/Contacts";
import Projects from "../projects/projects";
import { useState } from "react";
import Sidebar from "../../components/Layout/Sidebar";

const PortfolioMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = [
    { title: "Home", to: "/", component: <PortfolioHome /> },
    { title: "About", to: "/about", component: <About /> },
    { title: "Experience", to: "/experience", component: <UserExperience /> },
    {
      title: "Elevator Pitch",
      to: "/elevator-pitch",
      component: <ElevatorPitch />,
    },
    { title: "Projects", to: "/projects", component: <Projects /> },
    { title: "Contact", to: "/contact", component: <Contacts /> },
  ];

  return (
    <Grid container direction="row" sx={{ minHeight: "100vh" }}>
      {isMobile && (
        <IconButton
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1200,
          }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </IconButton>
      )}

      <Grid
        size={{ xs: false, md: 3 }}
        sx={{
          display: { xs: sidebarOpen ? "block" : "none", md: "block" },
          position: { xs: "fixed", md: "static" },
          zIndex: 1100,
          height: "100vh",
        }}
      >
        <Sidebar
          open={!isMobile || sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 9 }}
        sx={{
          background: "primary.main",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Routes>
          {renderComponent.map(({ to, component }, index) => (
            <Route key={index} path={to} element={component} />
          ))}
        </Routes>
      </Grid>
    </Grid>
  );
};

export default PortfolioMain;
