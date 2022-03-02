import "../styles/globals.css";
import Navbar from "../components/Layout/Navbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="text-white  min-h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
