import { memo, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Waypoint } from 'react-waypoint';

const VideoPlayer = memo(() => {
  const [playing, setPlaying] = useState(false);

  return (
    <Waypoint onEnter={() => setPlaying(true)}>
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
          fallback={<p>Loading</p>}
        />
      </div>
    </Waypoint>
  );
});

export default VideoPlayer;
