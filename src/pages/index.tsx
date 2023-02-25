import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
  loading: () => <p>'Loading...'</p>,
});

const Carrousel = dynamic(() => import('@/components/Carrousel'), {
  ssr: false,
  loading: () => <p>'Loading...'</p>,
});

const Home = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      <Head>
        <title>Faster web</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h1>Video Player</h1>
        {!isSSR && (
          <section className='flex w-full flex-col'>
            <VideoPlayer />
            <Carrousel
              images={[
                'https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/801904/pexels-photo-801904.jpeg?auto=compress&cs=tinysrgb&w=800',
              ]}
            />
            <VideoPlayer />
            <Carrousel
              images={[
                'https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/801904/pexels-photo-801904.jpeg?auto=compress&cs=tinysrgb&w=800',
              ]}
            />
            <VideoPlayer />
            <VideoPlayer />
            <VideoPlayer />
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
