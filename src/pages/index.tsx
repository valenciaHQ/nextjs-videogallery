import Head from 'next/head';
import lazyHydrate from 'next-lazy-hydrate';

const VideoPlayer = lazyHydrate(() => import('@/components/VideoPlayer'), {
  on: ['visible'],
});

const Carrousel = lazyHydrate(() => import('@/components/Carrousel'), {
  on: ['visible'],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Faster web</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 md:p-20'>
        <h1>Video Player</h1>
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
      </main>
    </>
  );
};

export default Home;
