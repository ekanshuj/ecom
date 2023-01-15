import Head from 'next/head';
import React, { useContext } from 'react';
import Image from 'next/image';
import CartContext from '../src/context/CartContext';

import cross from '../src/assets/images/cross.svg'

const Cart = () => {
  const { cartProducts, removeFromCart } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>next-ecommerce | Cart</title>
        <meta name="keyword" content="cart" />
      </Head>
      <main className='min-h-screen max-w-screen'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-0">
          <section className='text-white w-full py-2'>
            <div style={{ display: cartProducts.length > 0 ? "block" : "none" }} className='w-full py-5 text-center'>
              <span className='text-3xl uppercase tracking-[10px] font-bold'>shopping cart</span>
            </div>
            <div className='sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-3 lg:gap-4 my-5'>
              {
                cartProducts?.map(({ name, price }, i) => {
                  const Name = name[0].toUpperCase() + name.substring(1);
                  return (
                    <div key={i} className='my-2 sm:my-0 sm:flex sm:justify-center sm:items-center sm:flex-col'>
                      <div className='w-full h-[170px] sm:w-[360px] sm:h-[150px]' style={{ background: `${name}` }}></div>
                      <div style={{ border: `2px solid ${name}` }} className='flex items-center justify-between px-1 w-full flex-col'>
                        <div className='flex items-center justify-between w-full'>
                          <span className='underline' style={{ color: `${name}` }}>{Name}</span>
                          <Image onClick={() => removeFromCart(name, price)} className='cursor-pointer' src={cross} alt={"remove-from-cart"} width={20} height={20} />
                        </div>
                        <div className='flex items-center justify-between w-full'>
                          <span style={{ color: `${name}` }}>₹{price}</span>
                          <span>Quantity()</span>
                        </div>
                      </div>
                    </div>
                  )
                })
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