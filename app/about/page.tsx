import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AboutTimeline from "../components/timeline";
import FullPageWithToolbarSpacer from "../components/full-page-with-toolbar-spacer";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <FullPageWithToolbarSpacer>
      <Typography variant="h5">About me</Typography>
      <AboutTimeline />
    </FullPageWithToolbarSpacer>
  );
}
