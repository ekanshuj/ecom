import React, { useContext, useEffect } from 'react';
import { products } from '../../data/products';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='text-white w-full pt-5 pb-2 px-1'>
      <div className='h-auto w-100vw flex justify-around flex-wrap gap-2 my-5 sm:my-1'>
        {
          products?.map(({ id, name, price }) => {
            const Name = name[0].toUpperCase() + name.substring(1);
            return (
              <div key={id} className='flex-[1_1_365px]'>
                <Link href={{
                  pathname: '/colors/[slug]',
                  query: {
                    slug: `${name}`,
                    id: `${id}`,
                  },
                }} passHref>
                  <div className='h-[210px] w-inherit' style={{ background: `${name}` }}></div>
                  <div style={{ border: `2px solid ${name}` }} className='flex items-center justify-between px-1 w-full'>
                    <span style={{ color: `${name}` }}>{Name}</span>
                    <span style={{ color: `${name}` }}>₹{price}</span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className='py-[17px] border-2 border-white text-center cursor-pointer rounded-[2px]' onClick={() => window.scrollTo(0, 0)}>
        <span className='uppercase font-bold tracking-[3px] text-[1rem]'>Back to Top</span>
      </div>
    </div>
  )
}

export default Home