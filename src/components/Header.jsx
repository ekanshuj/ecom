import React, { useContext } from 'react';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../config/firebase-config';
import CartContext from '../context/CartContext';

import avatar from '../assets/images/avatar.svg'
import cart from '../assets/images/cart.svg'

const Header = () => {
  const { cartCount, textVal } = useContext(CartContext);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleClick = () => {
    user ? router.push("/account") : router.push("/signin");
  };

  const divStyle = {
    aspectRation: '1/1',
    width: "35px",
    borderRadius: "999px",
    cursor: "pointer",
    border: "3px solid white",
    marginInline: "5px"
  };
  const none = {
    display: "none"
  };

  return (
    <header>
      <div className='flex items-center justify-center flex-col sm:flex-row px-2 sm:px-0'>
        <div className='w-full my-2 px-3 sm:px-1 flex-1'>
          <input
            onKeyDown={(e) => textVal(e.target.value)}
            className='w-full h-12 rounded-[3px] px-1 text-[1.1rem] placeholder:text-[0.8rem] sm:placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-[1px] focus:outline-none'
            type="search"
            name="search"
            placeholder='Search for the products' />
        </div>
        <div className='px-1 flex items-center justify-center gap-x-1 sm:gap-x-0'>
          <Link href={"/cart"}>
            <div className='flex items-center justify-center'>
              <p className='text-white underline underline-offset-2 px-1 text-xl font-semibold'>{cartCount}</p>
              <Image className='invert' src={cart} alt={"cart"} height={30} width={30} />
            </div>
          </Link>
          <div className='flex items-center justify-center' style={user?.photoURL === null && user?.email ? divStyle : none} onClick={handleClick}>
            <span className='text-white text-xl font-semibold'>{user?.email.charAt(0).toUpperCase()}</span>
          </div>
          {
            user?.photoURL ?
              < Image style={{ padding: "0px 4px" }} onClick={handleClick} className='rounded-full cursor-pointer' src={user?.photoURL && `${user.photoURL}`} alt={user?.displayName} width={45} height={45} />
              : user === null &&
              < Image onClick={handleClick} className='rounded-full cursor-pointer invert' src={avatar} alt={"avatar"} width={45} height={45} />
          }
        </div>
      </div>
    </header>
  )
}

export default Header