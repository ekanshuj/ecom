import React, { useContext } from 'react';
import Head from 'next/head';
import CartContext from '../src/context/CartContext';
import { CartItem } from '../src/components';
import getStripe from '../utils/get-stripe';
import axios from 'axios';

const Cart = () => {
  const { cartProducts, itemCount } = useContext(CartContext);
  // const checkout = async () => {
  //   const { data: { id } } = await axios.post('/api/checkout_sessions', {
  //     items: Object.entries(cartProducts).map(([_, { id, count }]) => ({
  //       price: id,
  //       quantity: count
  //     }))
  //   });
  //   const stripe = await getStripe();
  //   await stripe.redirectToCheckout({ sessionId: id });
  // };

  return (
    <>
      <Head>
        <title>next-ecommerce | Cart</title>
        <meta name="keyword" content="cart" />
      </Head>
      <main className='min-h-screen max-w-screen'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-0">
          <section className='text-white w-full py-2'>
            <div className='w-full text-center'>
              <span className='text-xl uppercase tracking-[10px] font-bold'>shopping cart</span>
            </div>
            <div className='sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-3 lg:gap-4 my-5'>
              {
                cartProducts?.map((item) => {
                  const count = itemCount(item.id);
                  return <CartItem key={item.id} count={count} {...item} />
                }
                )
              }
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Cart