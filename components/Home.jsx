import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

const Home = ({ props: { products: data } }) => {
  const [products, setProducts] = React.useState(data);
  return (
    <div className='text-white'>
      <div>
        {
          products && products.map(({ id, title, images }) => {
            return (
              <div key={id}>
                <span className='cursor-pointer'>{title}</span>
                {/* <Image src={ } alt={title} width={500} height={500} /> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home