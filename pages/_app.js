import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/component/Header";
import "@/lib/axiosSetting";
import "react-quill/dist/quill.snow.css";
import "@/styles/globals.css";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
      </Head>
      <Header />
      <Component {...pageProps} />

      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=60d8ab9208d84b176f038e5844af2e74"
      ></script>
    </QueryClientProvider>
  );
}
