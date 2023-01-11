import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/config/firebase-config';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

import avatar from '../src/assets/images/avatar.svg'

const Account = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>next-ecommerce | Account</title>
        <title>next-ecommerce | {user?.displayName || 'Avatar'}</title>
        <meta name="keyword" content="color" />
      </Head>
      <main className='min-h-screen max-w-screen bg-black'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-1">
          <nav className='flex items-center justify-between flex-col sm:flex-row'>
            <div className='text-white font-mono font-black tracking-[5px] text-[1.07rem] sm:text-[1.5rem] cursor-pointer' onClick={() => router.push("/")}>
              next-ecommerce
            </div>
            <SocialIcon
              url="https://github.com/ekanshuj/next-ecommerce"
              bgColor="transparent"
              fgColor="white"
            />
          </nav>
          <section className='text-white my-10'>
            <div className='flex justify-between items-center my-3'>
              <div>
                <Image
                  className='rounded-full'
                  src={user?.photoURL ? user.photoURL : avatar}
                  alt={user?.displayName && user.displayName || "avatar"}
                  width={150}
                  height={150} />
              </div>
              <div className='mx-2'>
                <button onClick={handleSignOut} className='border-2 border-white uppercase text-[0.9rem] font-semibold tracking-[3px] px-2 py-1'>Sign out</button>
              </div>
            </div>
            <div>
              <div className=' flex items-start justify-center flex-col'>
                <span className='text-xl uppercase tracking-[10px] font-bold' style={{ display: `${user?.displayName}` ? 'block' : 'none' }}>{user?.displayName}</span>
                <span className='text-base tracking-[5px] font-semibold'>{user?.email}</span>
              </div>
              <div className='flex items-start justify-center flex-col my-5'>
                <span className='text-[1.05rem] tracking-[3px] font-semibold'>Status :</span>
                <span className='text-[0.85rem] tracking-[2px] font-semibold'>{user?.emailVerified === true ? "Verified Account" : "Not Verified"}</span>
              </div>
            </div>
            <hr className='bg-gray-700 h-2 border-none' />
          </section>
        </div>
      </main>
    </>
  )
}

export default Account