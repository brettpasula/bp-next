import type { Metadata } from "next";
import { ReactNode } from "react";
import TopToolbar from "./components/toolbar";
import FullPageWithToolbarSpacer from "./components/full-page-with-toolbar-spacer";

export const metadata: Metadata = {
  title: "Brett Pasula",
  description: "Personal website of Brett Pasula",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", margin: 0 }}>
        <TopToolbar />
        <FullPageWithToolbarSpacer>
        {children}
        </FullPageWithToolbarSpacer>
      </body>
    </html>
  );
}
