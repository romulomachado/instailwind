import 'tailwindcss/tailwind.css';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen'>
      <main className='flex-1 overflow-scroll'>
        <Component {...pageProps} />
      </main>

      <Nav />
    </div>
  );
}

export default MyApp;
