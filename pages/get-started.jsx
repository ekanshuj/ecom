import React from 'react'
import { SocialIcon } from 'react-social-icons'

const signup = () => {
  return (
    <main className='h-screen max-w-screen bg-black overflow-y-hidden'>
      <nav className='flex items-center justify-between flex-col sm:flex-row px-2 mx-auto max-w-[70rem]'>
        <div className='text-white font-mono font-black tracking-[5px] text-[1.5rem]'>
          next-ecommerce
        </div>
        <SocialIcon
          url="https://github.com/ekanshuj"
          bgColor="transparent"
          fgColor="white"
        />
      </nav>
      <section className="text-white flex items-center justify-center h-full flex-col">
        <div className='border-2 border-white sm:w-[40rem] lg:w-[50rem] h-[20rem] p-2 rounded-[3px]'>
          <div className='h-full w-[25rem] mx-auto'>
            <div className='text-center text-[1.5rem] font-extrabold underline'>
              Sign up or log in
            </div>
            <div className='flex items-center justify-center bg-black text-white border-2 border-white h-12 rounded-[3px] mt-8'>
              <button className='tracking-[1px] font-medium text-[1.1rem]'>Continue with Google</button>
            </div>
            <div className='text-center py-3'>
              <span className='uppercase font-extrabold text-[0.9rem] tracking-[2px]'>or</span>
            </div>
            <form>
              <div className='pb-3'>
                <input className='w-full h-12 rounded-[3px] px-1 text-[1.1rem] placeholder:text-[1rem] placeholder:font-medium placeholder:tracking-[1px] placeholder:px-1 focus:outline-none text-black' type="text" placeholder='Enter your email address here' />
              </div>
              <div className='flex items-center justify-center bg-[#19303D] h-12 rounded-[3px]'>
                <button className='tracking-[1px] font-medium text-[1.1rem]'>Continue with email</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default signup