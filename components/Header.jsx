import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   (async function productData() {
  //     const { data } = await axios.get('https://dummyjson.com/products/categories');
  //     const A = data.slice(0, 7);
  //     const B = ["male", "female"];
  //     const C = data.splice(16, 9);
  //     const D = A.concat(B, C)
  //     setCategories(D);
  //   }());
  // }, [])
  return (
    <header className='bg-black'>
      <nav className='flex items-center justify-between flex-col sm:flex-row px-2'>
        <div className='text-white font-mono font-black tracking-[5px] text-[1.5rem]'>
          next-ecommerce
        </div>
        <SocialIcon
          url="https://github.com/ekanshuj"
          bgColor="transparent"
          fgColor="white"
        />
      </nav>
      <div className="info text-white bg-[#2d4a56] flex items-center justify-center">
        /--Categories--/
      </div>
      {/* <div className='info text-white bg-[#2d4a56] flex justify-evenly items-center'>
        <span>All</span>
        {
          categories && categories.map((c, i) => {
            return (
              <span key={i} className='text-[1rem] tracking-[1px]'>
                {c}
              </span>
            )
          })
        }
      </div> */}
      <div className='w-full my-2'>
        <input className='w-full h-12 rounded-[3px] px-1 text-[1.1rem] placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-[1px] placeholder:px-2 focus:outline-none' type="search" name="search" placeholder='Search for the products' />
      </div>
    </header>
  )
}

export default Header