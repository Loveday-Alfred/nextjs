import "../styles/globals.css";
import Nav from "../components/Nav";
import "../components/Nav.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
