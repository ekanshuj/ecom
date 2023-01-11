import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Cart = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>next-ecommerce | Cart</title>
        <meta name="keyword" content="cart" />
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
          </section>
        </div>
      </main>
    </>
  )
}

export default Cart