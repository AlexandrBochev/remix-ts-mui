import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RoootLayout } from "./layouts/RootLayout/RootLayout";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <RoootLayout />
      <CssBaseline />
    </ThemeProvider>
  )
}
