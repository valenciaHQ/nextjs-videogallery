import { memo, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Waypoint } from 'react-waypoint';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoPlayer = memo(() => {
  const [playing, setPlaying] = useState(false);

  const handleEnterViewport = function () {
    setPlaying(true);
  };
  const handleExitViewport = function () {
    setPlaying(false);
  };

  return (
    <Waypoint
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
      scrollableAncestor='window'
    >
      <div className='relative mt-10 pt-[56.25%] transition-opacity'>
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
          playsInline={true}
          muted={true}
          fallback={<p>Loading</p>}
          config={{
            youtube: {
              playerVars: { origin: 'https://www.youtube.com' },
            },
          }}
        />
      </div>
    </Waypoint>
  );
});

export default VideoPlayer;
