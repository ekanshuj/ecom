import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import CartContext from '../context/CartContext';

import cart from '../assets/images/cart.svg'

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const router = useRouter();
  return (
    <div className='nav__wrapper px-1'>
      <nav className='bg-gray-800 h-[10dvh] flex items-center justify-between px-1 sm:mx-auto max-w-[69.5rem]'>
        <div className='text-white font-mono font-black tracking-[3px] sm:tracking-[5px] text-[1.5rem] sm:text-[2rem] cursor-pointer' onClick={() => router.push("/")}>
          ECOM
        </div>
        {
          router.pathname === "/colors/[slug]" ?
            <Link href={"/cart"}>
              <div className='flex items-center justify-center px-2'>
                <p className='text-white underline underline-offset-2 px-1 text-xl font-semibold'>{cartCount}</p>
                <Image className='invert' src={cart} alt={"cart"} height={30} width={30} />
              </div>
            </Link>
            :
            <SocialIcon
              url="https://github.com/ekanshuj/next-ecommerce"
              bgColor="transparent"
              fgColor="white"
            />
        }
      </nav>
    </div>
  )
}

export default Navbar