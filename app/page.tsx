import { Container } from "@mui/material";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

export default function Main() {
  return (
    <Container sx={{ flexGrow: 1, flexDirection: "column" }}>
      <Home />
      <About />
      <Contact />
    </Container>
  )
}
