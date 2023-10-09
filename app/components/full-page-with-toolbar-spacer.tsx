import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { ReactNode } from "react";

/**
 * Creates a full-height container with an empty
 * AppBar/Toolbar to fill space occupied by the real "fixed" AppBar.
 *
 * {@link https://github.com/mui/material-ui/issues/10076#issuecomment-361232810 | Reference GitHub comment}
 */
export default function FullPageWithToolbarSpacer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Container>
      {/* Insert an empty AppBar/Toolbar to fill space occupied by the real "fixed" AppBar: https://github.com/mui/material-ui/issues/10076#issuecomment-361232810 */}
      <AppBar position="fixed" />
      <Toolbar />
      {children}
    </Container>
  );
}
