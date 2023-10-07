import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Container } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Fab variant="extended">
        <HomeIcon />
        Go back home
      </Fab>
      Is this even working
    </Container>
  );
}
