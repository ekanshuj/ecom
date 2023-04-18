import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Woohoo = () => {
  const router = useRouter();
  const [num, setNum] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setNum(num => num - 1)
    }, 1000)
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("userUID")) router.push("/")
    if (localStorage.getItem("userUID") && !localStorage.getItem("sessionUrl")) router.push("/");
    setTimeout(() => {
      router.push("/")
      localStorage.removeItem("cartItems");
      localStorage.removeItem("sessionUrl");
    }, 10000)
  }, [router]);

  return (
    <section className='flex items-center justify-center flex-col flex-wrap h-[90dvh] my-[10px]'>
      <div className='text-green-700 font-bold text-[1.05rem] tracking-[2px] text-center'>Payment Successfull👍</div>
      <div className='text-white font-bold text-lg tracking-[2px] text-center'>You&apos;ll be redirected back in <strong>{num}</strong> sec or click <strong className='cursor-pointer text-orange-500' onClick={() => {
        localStorage.removeItem("sessionUrl");
        localStorage.removeItem("cartItems");
        router.push("/");
      }}>me</strong></div>
    </section>
  )
}

export default Woohoo