import 'tailwindcss/tailwind.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex-1'>
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
