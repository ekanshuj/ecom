import Head from 'next/head';
import React, { useState } from 'react';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] });

import { Header, Home } from '../src/components';
import useHasMounted from '../src/hooks/useHasMounted';

export default function Index() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null
  };

  return (
    <>
      <Head>
        <title>next-ecommerce | Home</title>
        <meta name="description" content="next-ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen'>
        <div className="app mx-auto max-w-[70rem]">
          <Header />
          <Home />
        </div>
      </main>
    </>
  )
};

