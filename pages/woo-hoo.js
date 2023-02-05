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
  });
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 10000)
  });

  return (
    <section className='flex items-center justify-center flex-col h-[85vh] my-[10px]'>
      <div className='text-green-700 font-bold text-[1.05rem] tracking-[2px]'>Payment Successfull👍</div>
      <div className='text-white font-bold text-lg tracking-[2px]'>You&apos;ll be redirected back in <strong>{num}</strong> sec or click <strong className='cursor-pointer text-orange-500' onClick={() => router.push("/")}>me</strong></div>
    </section>
  )
}

export default Woohoo