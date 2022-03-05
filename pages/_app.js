import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="text-white  min-h-screen">
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
