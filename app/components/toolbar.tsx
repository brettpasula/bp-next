import { GitHub, LinkedIn } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function TopToolbar() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Button variant="text">
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              Brett Pasula
            </Link>
          </Button>
          {/* fills middle space on the AppBar to keep buttons on the right */}
          <Box flexGrow="1"></Box>
          <Stack direction="row" spacing={1}>
            <Button variant="contained">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/about"
              >
                About
              </Link>
            </Button>
            <Button variant="contained">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/contact"
              >
                Contact
              </Link>
            </Button>
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
