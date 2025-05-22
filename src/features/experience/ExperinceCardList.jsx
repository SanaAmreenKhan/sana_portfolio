import { Box, useTheme, useMediaQuery } from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    date: "July 2024 – Dec 2024",
    company: personalDetails.companyName,
    location: "Pune, India",
    position: "Software Engineer",
    achievements: [
      "Designed scalable frontend apps for structural engineers (60% efficiency boost)",
      "Integrated MSAL authentication for secure access",
      "Enhanced 3D visualization with Three.js (50% error reduction)",
      "Implemented chatbot UI (40% interaction improvement)",
      "code reviews (80% quality improvement)",
    ],
    skills: [
      "React.js",
      "Three.js",
      "MSAL Auth",
      "Recoil",
      "Material-UI",
      "Team Leadership",
    ],
  },
  {
    date: "Oct 2022 – June 2024",
    company: personalDetails.companyName,
    location: "Pune, India",
    position: "Associate Software Engineer",
    achievements: [
      "Built web apps with React.js/TypeScript",
      "Integrated REST APIs for backend communication",
      "Collaborated with stakeholders on specifications",
      "Maintained technical documentation",
    ],
    skills: ["React.js", "TypeScript", "REST APIs"],
  },
  {
    date: "May 2020 – August 2022",
    company: "Iconic E-Tech Pvt. Ltd.",
    location: "Chennai, India",
    position: "React.js Developer",
    achievements: [
      "Created responsive UIs with React.js",
      "Developed reusable components (50% faster dev)",
      "Integrated REST APIs",
    ],
    skills: ["React.js", "Bootstrap", "REST APIs"],
  },
];

const ExperinceCardList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderDot = () => (
    <Box
      sx={{
        position: "absolute",
        left: isMobile ? "0%" : "50%",
        top: "0px",
        transform: "translateX(-50%)",
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.main,
        border: "3px solid #112240",
        zIndex: 1,
      }}
    />
  );
  return (
    <>
      {experiences.map((exp, index) => {
        const { position, date, company, location, skills, achievements } = exp;

        return (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              mb: 10,
            }}
          >
            {index % 2 === 0 && !isMobile ? (
              <>
                <Box sx={{ width: "48%", pr: 3 }}>
                  <ExperienceCard
                    position={position}
                    date={date}
                    company={company}
                    location={location}
                    skills={skills}
                    achievements={achievements}
                  />
                </Box>
                {renderDot()}
                <Box sx={{ width: "48%" }} />
              </>
            ) : (
              <>
                <Box sx={{ width: isMobile ? "10%" : "48%" }} />
                {renderDot()}
                <Box sx={{ width: isMobile ? "100%" : "48%", pl: 3 }}>
                  <ExperienceCard
                    position={position}
                    date={date}
                    company={company}
                    location={location}
                    skills={skills}
                    achievements={achievements}
                  />
                </Box>
              </>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default ExperinceCardList;
