import Head from 'next/head';
import React from 'react';
import { Inter } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] })
const query = new QueryClient();

import { Header, Home } from '../components'

export default function Index() {
  return (
    <>
      <Head>
        <title>next-ecommerce | Home</title>
        <meta name="description" content="next-ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={query}>
        <main className='min-h-screen max-w-screen bg-black'>
          <div className="app mx-auto max-w-[70rem]">
            <Header />
            <Home />
          </div>
        </main>
      </QueryClientProvider>
    </>
  )
};

