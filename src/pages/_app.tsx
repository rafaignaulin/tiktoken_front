import type { AppProps } from "next/app";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Provider } from "react-redux";
import { store } from "../store";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  const user = {
    name: "Rafael",
    avatar_url: "/assets/avatars/147142.png"
  };

  return (
    <Provider store={store}>
      <Header title="TikToken" />

      <Component {...pageProps} />
      <GlobalStyle />

      <Footer />
    </Provider>
  );
}

export default MyApp;
