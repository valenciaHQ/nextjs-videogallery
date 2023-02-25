import { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = memo(() => {
  const { ref, inView } = useInView({ threshold: 1, rootMargin: '100px 0px' });
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (inView === true) {
      setUrl(
        'https://www.youtube.com/watch?v=1g7TrcIlpMk&ab_channel=OliverAstrologo'
      );
    }
  }, [inView, url]);

  return (
    <div className='flex flex-col' ref={ref}>
      <div className='relative mt-10 pt-[56.25%] transition-opacity'>
        <ReactPlayer
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
          }}
          url={url}
          width='100%'
          height='100%'
          playing={inView}
          fallback={<p>Loading</p>}
        />
      </div>
    </div>
  );
});

export default VideoPlayer;
