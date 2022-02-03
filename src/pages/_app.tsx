import "../styles/globals.css";
import "../../public/assets/icomoon.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="bg-[#090A20] p-1">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
