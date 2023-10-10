import Button from "@mui/material/Button";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

/**
 * A {@link https://mui.com/material-ui/react-button | Material UI Button}
 * wrapped in a {@link https://nextjs.org/docs/pages/api-reference/components/link | NextJS Link}.
 *
 * {@link https://dev.to/ivandotv/using-next-js-link-component-with-material-ui-buttons-and-menu-items-3m6a | Reference article}
 */
export default function LinkButton({
  href,
  variant,
  children,
  buttonStyle,
}: {
  href: Url;
  variant: "text" | "outlined" | "contained";
  children: ReactNode;
  buttonStyle?: CSSProperties;
}) {
  return (
    <Link href={href} passHref>
      <Button style={buttonStyle} variant={variant}>
        {children}
      </Button>
    </Link>
  );
}
