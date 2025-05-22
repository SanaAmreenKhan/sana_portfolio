import {
  Grid,
  Chip,
  Stack,
  ExperienceIcon,
  ContactIcon,
  Badge,
  AssignmentInd,
  LocationOn,
  LinkedIn,
} from "../../lib";
import { personalDetails } from "../../components/utils/commonNamed";

const SkillSection = ({ setCopiedText, setOpen }) => {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setOpen(true);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 4 }}>
        {[
          { icon: <LocationOn />, label: personalDetails.address },
          {
            icon: <ExperienceIcon />,
            label: `${personalDetails.experience} Experience`,
          },
          {
            icon: <ContactIcon />,
            label: personalDetails.emailID,
            copy: personalDetails.emailID,
          },
          {
            icon: <LinkedIn />,
            label: "linkedin.com/in/er-sana-khan",
            copy: personalDetails.linkedInLink,
          },
          {
            icon: <Badge />,
            label: `Iqama: ${personalDetails.iqamaNo}`,
            copy: personalDetails.iqamaNo,
          },
          {
            icon: <AssignmentInd />,
            label: `Passport: ${personalDetails.passportNo}`,
            copy: personalDetails.passportNo,
          },
        ].map((item, index) => (
          <Chip
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={item.copy ? () => handleCopy(item.copy) : null}
            clickable={!!item.copy}
            sx={{
              "&:hover": {
                background: item.copy ? "rgba(100, 255, 218, 0.2)" : undefined,
              },
            }}
          />
        ))}
      </Stack>
    </Grid>
  );
};

export default SkillSection;
