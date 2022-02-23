import "../styles/globals.css";
import Nav from "../components/Nav";
import "../components/Nav.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
