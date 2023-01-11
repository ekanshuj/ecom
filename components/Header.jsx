import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth } from '../src/config/firebase-config';

import avatar from '../src/assets/images/avatar.svg'

const Header = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleClick = () => {
    user ? router.push("/account") : router.push("/signin");
  };

  const divStyle = {
    height: "45px",
    width: "45px",
    borderRadius: "999px",
    cursor: "pointer",
    border: "2px solid white"
  };
  const none = {
    display: "none"
  };

  return (
    <header className='bg-black'>
      <nav className='flex items-center justify-between flex-col sm:flex-row px-2 sm:px-1'>
        <div className='text-white font-mono font-black tracking-[5px] text-[1.07rem] sm:text-[1.5rem] cursor-pointer' onClick={() => router.push("/")}>
          next-ecommerce
        </div>
        <SocialIcon
          url="https://github.com/ekanshuj/next-ecommerce"
          bgColor="transparent"
          fgColor="white"
        />
      </nav>
      <div className='flex items-center justify-center'>
        <div className='w-full my-2 px-3 sm:px-1 flex-1'>
          <input className='w-full h-12 rounded-[3px] px-1text-[1.1rem] placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-[1px] placeholder:px-2 focus:outline-none' type="search" name="search" placeholder='Search for the products' />
        </div>
        {/* <div className='px-2'> */}
        <div className='px-2'>
          <div className='flex items-center justify-center' style={user?.photoURL === null && user?.email ? divStyle : none} onClick={handleClick}>
            <span className='text-white text-2xl font-semibold'>{user?.email.charAt(0).toUpperCase()}</span>
          </div>
          {
            user?.photoURL ?
              < Image onClick={handleClick} className='rounded-full cursor-pointer' src={user?.photoURL && `${user.photoURL}`} alt={user?.displayName} width={40} height={40} />
              : user === null &&
              < Image onClick={handleClick} className='rounded-full cursor-pointer invert' src={avatar} alt={"avatar"} width={50} height={50} />
          }
        </div>
      </div>
    </header>
  )
}

export default Header