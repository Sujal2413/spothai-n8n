import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { supabase } from '../utils/supabaseClient';
import { AuthProvider } from '../contexts/AuthContext';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider supabase={supabase}>
        <Helmet>
          <title>SpotHai</title>
          <meta name="description" content="SpotHai" />
        </Helmet>
        <ToastContainer />
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;