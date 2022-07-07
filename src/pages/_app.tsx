import { AppRouter } from "@backend/router/app";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import store from "../store";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token") ?? ""
        : "";

    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      headers: {
        Authorization: token
      }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false
})(MyApp);
