import { ShipsContextProvider } from '../src/context'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function ShipsApp({ Component, pageProps }) {
  return (
    <ShipsContextProvider>
      <Component {...pageProps} />
    </ShipsContextProvider>
  );
}

export default ShipsApp;
