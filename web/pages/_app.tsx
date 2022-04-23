import "../styles/main.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "context/AuthContext";
import { AppProvider } from "context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
