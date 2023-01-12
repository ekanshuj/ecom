import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import CartContext from '../src/context/CartContext'

const Cart = () => {
  const router = useRouter();
  const { cartProducts } = useContext(CartContext);
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
            <div className='sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-3 lg:gap-4 px-[0.6rem] sm:px-0'>
              {
                cartProducts?.map(({ name, price }, i) => {
                  const Name = name[0].toUpperCase() + name.substring(1);
                  return (
                    <div key={i} className='my-2 sm:my-0 sm:flex sm:justify-center sm:items-center sm:flex-col'>
                      <Link href={`/${name}`}>
                        <div className='w-full h-[170px] sm:w-[360px] sm:h-[150px]' style={{ background: `${name}` }}></div>
                      </Link>
                      <div style={{ border: `2px solid ${name}` }} className='flex items-center justify-between px-1 w-full'>
                        <span style={{ color: `${name}` }}>{Name}</span>
                        <span style={{ color: `${name}` }}>Rs.{price}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Cart