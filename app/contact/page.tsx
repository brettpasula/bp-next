import { GitHub, LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FullPageWithToolbarSpacer from "../components/full-page-with-toolbar-spacer";

export default function Contact() {
  return (
    <FullPageWithToolbarSpacer>
      <Typography variant="h5" textAlign="center" marginTop="16px">
        Contact
      </Typography>
      <Box display="flex" justifyContent="center">
        <Stack direction="column" spacing={2} maxWidth="200px" marginTop="16px">
          <Button href="https://github.com/brettpasula" variant="contained">
            <GitHub />
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/brettpasula/"
            variant="contained"
          >
            <LinkedIn />
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </FullPageWithToolbarSpacer>
  );
}
