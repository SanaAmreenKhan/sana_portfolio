import {
  HomeIcon,
  AboutIcon,
  ExperienceIcon,
  PitchIcon,
  ProjectsIcon,
  ContactIcon,
} from "../../lib";

export const renderComponent = [
  { title: "Home", to: "/", icon: <HomeIcon /> },
  { title: "About", to: "/about", icon: <AboutIcon /> },
  { title: "Experience", to: "/experience", icon: <ExperienceIcon /> },
  { title: "Elevator Pitch", to: "/elevator-pitch", icon: <PitchIcon /> },
  { title: "Projects", to: "/projects", icon: <ProjectsIcon /> },
  { title: "Contact", to: "/contact", icon: <ContactIcon /> },
];
