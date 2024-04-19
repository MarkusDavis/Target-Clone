import { AuthProvider } from "@/context/AuthContext";
import { ShoppingCartContext, ShoppingCartProvider } from "@/context/ShoppingCartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
