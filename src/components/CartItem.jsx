import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { products as P } from '../../data/products';

const CartItem = ({ id, count }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const products = P.find(item => item.id === id);
  // console.log(products);
  const price = Object.entries(products).reduce((acc, curr) => curr.price + acc, 0);
  const Name = products.name[0].toUpperCase() + products.name.substring(1);
  if (products === null) return null;

  return (
    <div>
      <div key={id} className='my-2 sm:my-0 sm:flex sm:justify-center sm:items-center sm:flex-col'>
        <div className='w-full h-[170px] sm:w-[360px] sm:h-[150px]' style={{ background: `${products.name}` }}></div>
        <div style={{ border: `2px solid ${products.name}` }} className='flex items-center justify-between px-1 w-full flex-col'>
          <div className='flex items-center justify-between w-full'>
            <span className='underline' style={{ color: `${products.name}` }}>{Name}</span>
            <span style={{ color: `${products.name}` }}>₹{products.price}</span>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center gap-x-1'>
              <button onClick={() => removeFromCart(id)} className='w-5 h-5 flex items-center justify-center bg-slate-300 text-black font-black text-lg'>-</button>
              <span>{count}</span>
              <button onClick={() => addToCart(id)} className='w-5 h-5 flex items-center justify-center bg-slate-300 text-black font-black text-lg'>+</button>
            </div>
            <div className='flex items-center justify-center'>
              <span onClick={() => deleteFromCart(id)} className='underline text-[0.9rem] tracking-[1px] cursor-pointer'>Delete</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-x-1'>
        <div>
          <span>{price}</span>
        </div>
        <div>
          <button>checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem