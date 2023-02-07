import { Link } from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Navbar = () => {
  const router = useRouter();
  const { cartProducts } = useContext(CartContext);
  const pos = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  };
  const empty = {};

  return (
    <footer style={router.pathname === "/account" || router.pathname === "/colors/[slug]" || router.pathname === "/woo-hoo" || (router.pathname === "/cart" && cartProducts?.length === 0) ? pos : empty} className='bg-gray-800 flex items-center justify-center flex-wrap px-1 border-2 border-white'>
      <div className='text-white font-mono font-black tracking-[3px] sm:tracking-[5px] text-[0.9rem] sm:text-[1.1rem] text-center'>
        Copyright &#169;2023 | <strong className='cursor-pointer' onClick={() => router.push("/")}>ECOM</strong>
      </div>
    </footer>
  )
}

export default Navbar