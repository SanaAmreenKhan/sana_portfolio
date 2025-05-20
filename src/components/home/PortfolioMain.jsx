import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import PortfolioHome from "./PortfolioHome";
import About from "../about/About";
import UserExperience from "../experience/UserExperience";
import ElevatorPitch from "../elevator pitch/ElevatorPitch";
import Contacts from "../contacts/Contacts";
import Portfolios from "../portfolios/Portfolios"

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
    { title: "Portfolio", to: "/portfolio", component: <Portfolios /> },
    { title: "Contact", to: "/contact", component: <Contacts /> },
  ];

  return (
    <Grid container direction="row" spacing={1} bgcolor={"secondary.main"} height={"100%"}>
  <Grid  size={{ xs: 8, md:3 }}>
    <Sidebar />
  </Grid>
  <Grid  size={{ xs: 12, md: 9 }}>
    {/* <Box sx={{ width: '100%' }}> */}
      <Routes>
        {renderComponent.map(({ to, component }, index) => (
          <Route key={index} path={to} element={component} />
        ))}
      </Routes>
    {/* </Box> */}
  </Grid>
</Grid>
  );
};

export default PortfolioMain;
