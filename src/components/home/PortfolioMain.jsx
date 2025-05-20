import { Grid } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import PortfolioHome from "./PortfolioHome";
import About from "../about/About";
import UserExperience from "../experience/UserExperience";
import ElevatorPitch from "../elevator pitch/ElevatorPitch";
import Contacts from "../contacts/Contacts";
import Projects from "../projects/projects";

const PortfolioMain = () => {
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
    <Grid container direction="row" spacing={1} sx={{ minHeight: "100vh" }}>
      <Grid size={{ xs: 8, md: 3 }}>
        <Sidebar />
      </Grid>
      <Grid
        size={{ xs: 12, md: 9 }}
        sx={{
          background: "#0a192f",
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
