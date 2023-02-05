import '../styles/globals.css';
import { CartProvider } from '../src/context/CartContext';
import { Navbar, Footer } from '../src/components';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}
