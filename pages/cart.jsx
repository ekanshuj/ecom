import React, { useContext } from 'react';
import Head from 'next/head';
import CartContext from '../src/context/CartContext';
import { CartItem } from '../src/components';
import { products } from '../data/products';
import getStripe from '../utils/get-stripe';
import axios from 'axios';

const Cart = () => {
  const { cartProducts, itemCount } = useContext(CartContext);
  const price = cartProducts?.reduce((acc, curr) => {
    const item = products.find(items => items.id === curr.id);
    return acc + (item.price || 0) * curr.count
  }, 0);

  const checkout = async () => {
    const { data: { id } } = await axios.post('/api/checkout_sessions', {
      items: Object.entries(cartProducts)?.map(elem => {
        const item = products.find(items => items.id === elem[1].id);
        const count = itemCount(elem[1].id);
        return {
          price: item?.id,
          quantity: count,
        }
      })
    });
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <>
      <Head>
        <title>next-ecommerce | Cart</title>
        <meta name="keyword" content="cart" />
      </Head>
      <main className='max-w-screen'>
        <div className="product mx-auto max-w-[70rem] px-2 sm:px-0">
          <section className='text-white w-full py-2'>
            {
              cartProducts?.length !== 0
                ?
                <>
                  <div className='w-full text-center'>
                    <span className='text-xl uppercase tracking-[10px] font-bold'>shopping cart</span>
                  </div>
                  <div className='sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-3 lg:gap-4 my-5 pb-5'>
                    {
                      cartProducts?.map((item) => {
                        const count = itemCount(item.id);
                        return <CartItem key={item.id} count={count} {...item} />
                      }
                      )
                    }
                  </div>
                  <div className='flex items-center justify-center gap-x-3 border-t-2 border-b-2 border-t-white border-b-white py-2 mx-[2px]'>
                    <div className='text-xl'>
                      <span><strong className='underline'>Total</strong> : [ ₹{price} ]</span>
                    </div>
                    <div>
                      <button onClick={checkout} className='text-black bg-white uppercase text-[0.9rem] font-bold tracking-[3px] px-5 py-[2px] border-2 border-white'>checkout</button>
                    </div>
                  </div>
                </>
                :
                <div className='w-full text-center'>
                  <span className='text-xl uppercase tracking-[10px] font-bold'>cart is empty</span>
                </div>
            }
          </section>
        </div>
      </main >
    </>
  )
}

export default Cart