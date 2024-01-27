import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FullPageWithToolbarSpacer from "../components/full-page-with-toolbar-spacer";
import Link from "@mui/material/Link";

export default function Contact() {
  return (
    <FullPageWithToolbarSpacer>
      <Typography
        variant="h5"
        textAlign="center"
        marginTop="16px">
        Contact
      </Typography>
      <Box
        display="flex"
        justifyContent="center">
        <Stack
          direction="column"
          spacing={2}
          maxWidth="200px"
          marginTop="16px">
          <Link
            href="https://github.com/brettpasula"
            aria-label="Open my GitHub profile in a new tab"
            target="_blank"
            rel="noopener noreferrer"
            variant="h6">
            GitHub

            <OpenInNewIcon fontSize='small' />
          </Link>
          <Link
            href="https://www.linkedin.com/in/brettpasula/"
            aria-label="Open my LinkedIn profile in a new tab"
            target="_blank"
            rel="noopener noreferrer"
            variant="h6">
            LinkedIn
            <OpenInNewIcon fontSize='small' />
          </Link>
        </Stack>
      </Box>
    </FullPageWithToolbarSpacer>
  );
}
