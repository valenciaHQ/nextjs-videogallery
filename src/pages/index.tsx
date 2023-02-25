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
        <title>Video Player with Cloudinary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center'>
        <h1>Video Player</h1>
        {!isSSR && (
          <section className='flex w-full flex-col'>
            <VideoPlayer />
            <VideoPlayer />
            <VideoPlayer />
            <VideoPlayer />
            <Carrousel
              images={[
                'https://images.pexels.com/photos/11199565/pexels-photo-11199565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/13462177/pexels-photo-13462177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/13813505/pexels-photo-13813505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ]}
            />
            <VideoPlayer />
            <VideoPlayer />
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
