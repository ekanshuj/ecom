import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Woohoo = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000);
  })
  return (
    <div>Woohoo</div>
  )
}

export default Woohoo