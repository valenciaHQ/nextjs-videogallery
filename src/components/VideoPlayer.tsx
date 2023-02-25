import { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = memo(() => {
  const { ref, inView } = useInView({ threshold: 1 });
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (inView === true) {
      setUrl(
        'https://www.youtube.com/watch?v=GTgx971O2Ow&t=24s&ab_channel=ElViajeroFeliz'
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
          light
          playing
        />
      </div>
    </div>
  );
});

export default VideoPlayer;
