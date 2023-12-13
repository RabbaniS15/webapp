import React from "react";
import { PrimeReactProvider } from "primereact/api";
import SignIn from "./components/SignIn";
import "primereact/resources/themes/md-light-indigo/theme.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <SignIn />
    </PrimeReactProvider>
  );
}
