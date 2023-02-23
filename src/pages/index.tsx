import Image from 'next/image';
import * as React from 'react';
import ReactPlayer from 'react-player/lazy';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// https://nextjs.org/docs/api-reference/next/image

export default function HomePage() {
  const [hasWindow, setHasWindow] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <h1>Videos gallery</h1>

          {hasWindow && (
            <div className='container mx-auto flex flex-col items-center'>
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <Image
                src='https://images.pexels.com/photos/14683268/pexels-photo-14683268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='some-image'
                width={500}
                height={500}
              />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
              <ReactPlayer url='https://www.youtube.com/watch?v=9t9Ym8CjnDI&ab_channel=StarrySky' />
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
