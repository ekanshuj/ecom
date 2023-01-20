import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { auth } from '../src/config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import CartContext from '../src/context/CartContext';

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { slug: name } = router.query;
  const id = Number(router.query['id']);
  return (
    <>
      <Head>
        <title>next-ecommerce | Color</title>
        <meta name="keyword" content="color" />
      </Head>
      <main className='min-h-screen max-w-screen bg-black'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-1">
          <section className='text-white flex items-center justify-center flex-col my-10'>
            <div className='justify-start w-full'>
              <span className='text-5xl uppercase tracking-[10px] font-bold'>{name}.</span>
            </div>
            <div className='w-full h-28 my-3' style={{ background: `${name}` }}>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-2'>
              <button onClick={() => addToCart(id)} className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1' style={{ border: `2px solid ${name}` }}>Add to Cart</button>
              <Link href={user ? "/checkout" : "/signin"}>
                <button className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1' style={{ border: `2px solid ${name}` }}>Buy Now</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Product