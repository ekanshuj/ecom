import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { auth } from '../src/config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Product = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>next-ecommerce | Color</title>
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
          <section className='text-white flex items-center justify-center flex-col my-10'>
            <div className='justify-start w-full'>
              <span className='text-5xl uppercase tracking-[10px] font-bold'>{slug}.</span>
            </div>
            <div className='w-full h-28 my-3' style={{ background: `${slug}` }}>
            </div>
            <div>
              <button className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1 mx-2' style={{ border: `2px solid ${slug}` }}>Add to Cart</button>
              <Link href={user ? "/checkout" : "/signin"}>
                <button className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1 mx-2' style={{ border: `2px solid ${slug}` }}>Buy Now</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Product