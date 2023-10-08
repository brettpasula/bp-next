import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import type { Metadata } from "next";

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
              <Button variant="outlined">Brett Pasula</Button>
              {/* fills middle space on the AppBar */}
              <Box sx={{ flexGrow: 1 }}></Box>
              <Stack direction="row" spacing={1}>
                <Button variant="contained">About</Button>
                <Button variant="contained">Contact</Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
        {children}
      </body>
    </html>
  );
}
