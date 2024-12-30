import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/component/Header";
import "@/lib/axiosSetting";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />

      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=60d8ab9208d84b176f038e5844af2e74"
      ></script>
    </QueryClientProvider>
  );
}
