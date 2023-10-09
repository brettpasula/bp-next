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
            <Link href="/about" passHref>
              <Button variant="contained">About</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="contained">Contact</Button>
            </Link>

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
