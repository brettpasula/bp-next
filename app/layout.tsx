import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import type { Metadata } from "next";
import { text } from "stream/consumers";

export const metadata: Metadata = {
  title: "Brett Pasula",
  description: "Personal website of Brett Pasula",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", margin: 0 }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
                <Link style={{color: '#FFF'}} href="/">Brett Pasula</Link>
              </Typography>
              <Link href="/about" style={{margin: '8px'}}>
                <Button variant="contained">About</Button>
              </Link>
              <Link href="/contact">
                <Button variant="contained">Contact</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        {children}
      </body>
    </html>
  );
}
