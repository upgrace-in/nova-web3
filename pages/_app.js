import "../src/styles/main.scss";
import Navbar from "../src/layout/Navbar";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Head from "next/head";
import Script from "next/script";
import Footer2 from "../src/layout/Footer2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nova App</title>
      </Head>
      <Script src="https://kit.fontawesome.com/741c31a8f2.js" crossorigin="anonymous"></Script>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer2 />
      </Provider>
    </>
  );
}

export default MyApp;
