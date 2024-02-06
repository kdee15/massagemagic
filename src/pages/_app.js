import "../scss/.base/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleTagManager gtmId="GTM-5PRSHNZ4" />
      <Component {...pageProps} />
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        class="elfsight-app-ce1b623c-6244-4677-b0ed-e54f72aaa150"
        data-elfsight-app-lazy
      ></div>
    </Layout>
  );
}

export default MyApp;
