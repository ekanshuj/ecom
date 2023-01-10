import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useStytch } from '@stytch/nextjs';

const Signup = () => {
  const stytchClient = useStytch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { email } = Object.fromEntries(form.entries());

    // try {
    //   stytchClient.magicLinks.email.loginOrCreate(email, {
    //     login_magic_link_url: 'http://localhost:3000/authenticate',
    //     login_expiration_minutes: 90,
    //     signup_magic_link_url: 'http://localhost:3000/authenticate',
    //     signup_expiration_minutes: 90,
    //   });
    // } catch (er) {
    //   er && console.log(er);
    // }
  };

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
          <div className='h-full w-[20rem] sm:w-[25rem] mx-auto'>
            <div className='text-center text-[1.5rem] font-extrabold'>
              Get Started
            </div>
            <div className='flex items-center justify-center bg-black text-white border-2 border-white h-12 rounded-[3px] mt-2'>
              <button className='tracking-[1px] font-medium text-[1.1rem]'>Continue with Google</button>
            </div>
            <div className='text-center py-1'>
              <span className='uppercase font-extrabold text-[0.9rem] tracking-[2px]'>or</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='pb-3'>
                <input className='w-full h-12 rounded-[3px] px-1 text-[1.1rem] placeholder:text-[0.9rem] placeholder:font-medium placeholder:tracking-[1px] placeholder:px-1 focus:outline-none text-black' name="email" type="email" placeholder='john@wick.com' />
              </div>
              <div className='pb-3'>
                <input className='w-full h-12 rounded-[3px] px-1 text-[1.1rem] placeholder:text-[0.9rem] placeholder:font-medium placeholder:tracking-[1px] placeholder:px-1 focus:outline-none text-black' name="password" type="password" placeholder='password' />
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

export default Signup