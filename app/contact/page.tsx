import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinkButton from "../components/link-button";
import { Container } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h5" textAlign="center" marginTop="16px">
        Contact
      </Typography>
      <Box display="flex" justifyContent="center">
        <Stack direction="column" spacing={2} maxWidth="200px" marginTop="16px">
          <LinkButton
            href="https://github.com/brettpasula"
            variant="outlined"
            aria-label="Open my GitHub profile in a new tab"
            buttonStyle={{ width: "100%" }}
          >
            <Container>GitHub</Container>
            <OpenInNewIcon fontSize="small" />
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/brettpasula/"
            aria-label="Open my LinkedIn profile in a new tab"
            variant="outlined"
          >
            <Container>LinkedIn</Container>
            <OpenInNewIcon fontSize="small" />
          </LinkButton>
        </Stack>
      </Box>
    </Container>
  );
}
