import React from 'react';
import Image from 'next/image';
import image from '../src/images/image.png';

const Home = () => {
  // const [products, setProducts] = React.useState(data);
  return (
    <div className='text-white py-1 w-full'>
      {/* <div className=' flex items-center justify-center flex-wrap gap-5 py-5'>
        {
          products && products.map(({ id, title, thumbnail }) => {
            return (
              <div key={id} className='border-2 border-white flex justify-center items-center flex-col px-1 pt-1'>
                <Image
                  src={thumbnail && thumbnail || image}
                  alt={title}
                  width={310}
                  height={100}
                />
                <span className='cursor-pointer'>{title}</span>
              </div>
            )
          })
        }
      </div> */}
      <div className='py-1 text-centerb bg-gray-500 text-center cursor-pointer rounded-[2px]' onClick={() => window.scrollTo(0, 0)}>
        <span className='uppercase font-bold tracking-[3px] text-[0.7rem]'>Back to Top</span>
      </div>
    </div>
  )
}

export default Home