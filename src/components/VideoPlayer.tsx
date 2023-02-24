import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} className='flex flex-col'>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      <div className='relative mt-10 pt-[56.25%]'>
        <ReactPlayer
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
          }}
          url='http://www.youtube.com/watch?v=1La4QzGeaaQ&ab_channel=Jacob%2BKatieSchwarz'
          config={{
            youtube: { playerVars: { origin: 'http://www.youtube.com' } },
          }}
          width='100%'
          height='100%'
          light
          playing
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
