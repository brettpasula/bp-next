import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AboutTimeline from "../components/timeline";

export default function About() {
  return (
    <Container>
      {/* Insert an empty AppBar/Toolbar to fill space occupied by the real "fixed" AppBar: https://github.com/mui/material-ui/issues/10076#issuecomment-361232810 */}
      <AppBar position="fixed" />
      <Toolbar />
      <AboutTimeline />
    </Container>
  );
}
