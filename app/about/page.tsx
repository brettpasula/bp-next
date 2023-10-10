import AboutTimeline from "../components/timeline";
import FullPageWithToolbarSpacer from "../components/full-page-with-toolbar-spacer";
import Typography from "@mui/material/Typography";


export default function About() {
  return (
    <FullPageWithToolbarSpacer>
      <Typography variant="h5" textAlign="center" marginTop="16px">
        About me
      </Typography>
      <AboutTimeline />
    </FullPageWithToolbarSpacer>
  );
}
