import React from 'react';
import { products } from '../data/products';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='text-white w-full py-2'>
      <div className='sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-3 lg:gap-4 px-[0.6rem] sm:px-0'>
        {
          products && products.map(({ id, name, price }) => {
            const Name = name[0].toUpperCase() + name.substring(1);
            return (
              <div key={id} className='my-2 sm:my-0 sm:flex sm:justify-center sm:items-center sm:flex-col'>
                <Link href={`/colors/${name}`}>
                  <div className='w-full h-[170px] sm:w-[360px] sm:h-[150px]' style={{ background: `${name}` }}></div>
                  <div className='flex items-center justify-between px-1 w-full'>
                    <span className=''>{Name}</span>
                    <span>Rs.{price}</span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className='py-1 mt-3 bg-gray-500 text-center cursor-pointer rounded-[2px]' onClick={() => window.scrollTo(0, 0)}>
        <span className='uppercase font-bold tracking-[3px] text-[0.7rem]'>Back to Top</span>
      </div>
    </div>
  )
}

export default Home