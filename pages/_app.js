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
    </QueryClientProvider>
  );
}
