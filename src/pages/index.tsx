import Head from 'next/head';
import { useEffect, useState } from 'react';

import Carrousel from '@/components/Carrousel';
import VideoPlayer from '@/components/VideoPlayer';

const Home = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <div>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-screen flex-col items-center'>
        <h1>Video Player</h1>
        {!isSSR && (
          <section className='flex flex-col'>
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
    </div>
  );
};

export default Home;
