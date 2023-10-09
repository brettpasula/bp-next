import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function TopToolbar() {
  return (
    <Box flexGrow="1">
      <AppBar position="fixed">
        <Toolbar>
          <Button variant="text">
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              Brett Pasula
            </Link>
          </Button>
          {/* fills middle space on the AppBar */}
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
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
