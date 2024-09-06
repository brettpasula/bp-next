import AboutTimeline from "../components/timeline";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h5" textAlign="center" marginTop="16px">
        About me
      </Typography>
      <AboutTimeline />
    </Container>
  );
}
