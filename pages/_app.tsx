import Layout from "@components/Layout/Layout";
import type { AppProps } from "next/app";

// These styles apply to every route in the application
import '../app/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
