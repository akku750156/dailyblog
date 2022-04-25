import "../styles/globals.css";

import Layout from "../components/Layout";
function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <div className="text-white  min-h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
