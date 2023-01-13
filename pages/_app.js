import '../styles/globals.css';
import { CartProvider } from '../src/context/CartContext';
import { Navbar } from '../src/components';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  )
}
