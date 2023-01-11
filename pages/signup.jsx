import React, { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
import { auth } from '../src/config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  const googleHandle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (er) {
      er.code === 'auth/network-request-failed' && toast.error('Network request failed : Try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    user && router.push("/");
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { email, password } = Object.fromEntries(form.entries());
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (er) {
      er.code === 'auth/email-already-in-use' && toast.error('User Already Exists', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
    onAuthStateChanged(auth, (currentUser) => {
      currentUser && router.push("/")
    })
  };

  return (
    <main className='h-screen max-w-screen bg-black overflow-y-hidden'>
      <nav className='flex items-center justify-between flex-col sm:flex-row px-2 mx-auto max-w-[70rem]'>
        <div className='text-white font-mono font-black tracking-[5px] text-[1.5rem] cursor-pointer' onClick={() => router.push("/")}>
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
              Sign up to get Started
            </div>
            <div className='flex items-center justify-center bg-black text-white border-2 border-white h-12 rounded-[3px] mt-2 cursor-pointer' onClick={googleHandle}>
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
      <ToastContainer />
    </main>
  )
}

export default Signup