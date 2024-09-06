import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container>
      <Box
        height="100vh"
        display="flex"
        textAlign="center"
        alignItems="center"
      >
        <Stack direction="column" flexGrow="1">
          <Typography id="home" variant="h1">
            Hello! 👋
          </Typography>
          <Typography>
            This is the personal website of Brett Pasula, a software developer
            from Canada. Thank you for visiting!
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
