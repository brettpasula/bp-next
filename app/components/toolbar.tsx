import { GitHub, LinkedIn } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import LinkButton from "./link-button";

export default function TopToolbar() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <LinkButton buttonStyle={{ color: "#FFF" }} href="/" variant="text">
            Brett Pasula
          </LinkButton>
          {/* fills middle space on the AppBar to keep buttons on the right */}
          <Box flexGrow="1"></Box>
          <Stack direction="row" spacing={1}>
            <LinkButton href="/about" variant="contained">
              About
            </LinkButton>
            <LinkButton href="/contact" variant="contained">
              Contact
            </LinkButton>
            <IconButton
              href="https://github.com/brettpasula"
              aria-label="GitHub"
            >
              <GitHub sx={{ color: "#FFF" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/brettpasula/"
              aria-label="LinkedIn"
            >
              <LinkedIn sx={{ color: "#FFF" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
