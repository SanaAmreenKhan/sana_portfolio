import { Typography } from "../../lib";

export const KeyValueOfPersonalDetail = (key, value) => (
  <Typography variant="body1" sx={{ mb: 1 }}>
    <strong>{key}:</strong> {value}
  </Typography>
);
