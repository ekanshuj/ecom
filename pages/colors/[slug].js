import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { auth } from '../../src/config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import CartContext from '../../src/context/CartContext';
import axios from 'axios';
import getStripe from '../../utils/get-stripe'

const Product = () => {
  const { addToCart, itemCount, removeFromCart, deleteFromCart } = useContext(CartContext);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { slug: name } = router.query;
  const id = router.query['id'];
  const count = itemCount(id);

  const checkout = async () => {
    if (user === null) router.push("/signin");
    else {
      const { data: { id, url } } = await axios.post('/api/checkout_sessions', {
        items: [
          {
            price: router.query['id'],
            quantity: count || 1
          }
        ]
      });

      const stripe = await getStripe();
      localStorage.setItem("sessionUrl", url);
      deleteFromCart(router.query['id']);
      // await stripe.redirectToCheckout({ sessionId: id });
    }
  };

  return (
    <>
      <Head>
        <title>next-ecommerce | Color</title>
        <meta name="keyword" content="color" />
      </Head>
      <main className='max-w-screen bg-black'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-1">
          <section className='text-white flex items-center justify-center flex-col my-10'>
            <div className='justify-start w-full'>
              <span className='text-5xl uppercase tracking-[10px] font-bold'>{name}.</span>
            </div>
            <div className='w-full h-28 my-3' style={{ background: `${name}` }}>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-2'>
              {
                count !== 0 ? (
                  <div className='flex items-center justify-center gap-x-1  px-7 py-1' style={{ border: `2px solid ${name}` }}>
                    <button onClick={() => removeFromCart(id)} className='w-5 h-5 flex items-center justify-center bg-slate-300 text-black font-black text-lg'>-</button>
                    <span>{count}</span>
                    <button onClick={() => addToCart(id)} className='w-5 h-5 flex items-center justify-center bg-slate-300 text-black font-black text-lg'>+</button>
                  </div>
                )
                  : (

                    <button onClick={() => addToCart(id)} className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1' style={{ border: `2px solid ${name}` }}>Add to Cart</button>
                  )
              }
              <button onClick={checkout} className='uppercase text-[1rem] font-semibold tracking-[3px] px-7 py-1' style={{ border: `2px solid ${name}` }}>Buy Now</button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Product