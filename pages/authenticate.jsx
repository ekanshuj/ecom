import React, { useEffect } from 'react';
import { useStytch, useStytchSession } from '@stytch/nextjs';

import { createStytchHeadlessClient } from '@stytch/nextjs/headless';
import { StytchProvider } from '@stytch/nextjs';
const stytchClient = createStytchHeadlessClient(process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN);
const Authenticate = () => {
  const stytchClient = useStytch();
  const { session } = useStytchSession();

  useEffect(() => {
    if (session) {
      window.location.href = 'http://localhost:3000'
    } else {
      window.location.href = 'http://localhost:3000'
      // const token = new URLSearchParams(window.location.search).get('token');
      // stytchClient.magicLinks.authenticate(token, {
      //   session_duration_minutes: 60,
      // });
    }
  }, [stytchClient, session]);

  return <div>Loading</div>;
};

export default Authenticate
{/* <StytchProvider stytch={stytchClient}>
  </StytchProvider> */}
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