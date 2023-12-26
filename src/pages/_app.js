import "../scss/.base/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleTagManager gtmId="GTM-5PRSHNZ4" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
