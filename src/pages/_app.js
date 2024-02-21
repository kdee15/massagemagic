import "../scss/.base/bootstrap-grid.min.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleTagManager gtmId="GTM-5PRSHNZ4" />
      <a href="tel:0826631066" className={`aCallMe`}>
        <span>0826631066</span>
      </a>

      <Component {...pageProps} />
      <a
        href="https://wa.me/+270826631066"
        target="_blank"
        className={`aWhatsappMe`}
      ></a>
    </Layout>
  );
}

export default MyApp;
