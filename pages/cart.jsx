import React, { useContext } from 'react';
import Head from 'next/head';
import CartContext from '../src/context/CartContext';
import { CartItem } from '../src/components';

const Cart = () => {
  const { cartProducts, itemCount } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>next-ecommerce | Cart</title>
        <meta name="keyword" content="cart" />
      </Head>
      <main className='min-h-screen max-w-screen'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-0">
          <section className='text-white w-full py-2'>
            <div className='w-full py-5 text-center'>
              <span className='text-3xl uppercase tracking-[10px] font-bold'>shopping cart</span>
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
            {/* <div className='w-full py-5 text-center'>
              <span className='text-3xl uppercase tracking-[10px] font-bold'>checkout</span>
            </div> */}
            {/* <div className='flex items-center justify-center flex-wrap my-5'>
              {
                cartProducts?.map(({ price }, i) => {
                  // const total = setTotalArr(state => [...state, { price }]);
                  let totalNum = [];
                  totalNum.push(price);
                  console.log(totalNum);
                  return (
                    <p key={i}>{price}</p>
                  )
                })
              }
            </div> */}
          </section>
        </div>
      </main>
    </>
  )
}

export default Cart