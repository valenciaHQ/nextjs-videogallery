import { memo, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import ReactPlayer from 'react-player/lazy';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoPlayer = memo((props: any) => {
  const myRef: React.RefObject<HTMLElement> = useRef(null);
  const { inViewport } = useInViewport(myRef, props);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (inViewport) {
      setPlaying(true);
    }
  }, [inViewport]);

  return (
    <div
      className='relative mt-10 pt-[56.25%] transition-opacity'
      ref={myRef as React.RefObject<HTMLDivElement>}
    >
      <ReactPlayer
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        url='https://www.youtube.com/watch?v=1g7TrcIlpMk&ab_channel=OliverAstrologo'
        width='100%'
        height='100%'
        playing={playing}
        playsInline
        fallback={<p>Loading</p>}
        config={{
          youtube: {
            playerVars: { origin: 'https://www.youtube.com' },
            onUnstarted: () => inViewport && setPlaying(true),
          },
        }}
        on
      />
    </div>
  );
});

export default VideoPlayer;
