import { memo } from 'react';
import handleViewport from 'react-in-viewport';
import ReactPlayer from 'react-player/youtube';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoPlayer = memo((props: any) => {
  const { inViewport, forwardedRef, playing } = props;
  return (
    <div
      className='relative mt-10 pt-[56.25%] transition-opacity'
      ref={forwardedRef}
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
        playing={playing && inViewport}
        fallback={<p>Loading</p>}
      />
    </div>
  );
});

export { VideoPlayer };

const ViewportVideoPlayer = handleViewport(
  VideoPlayer /** options: {}, config: {} **/
);
export default ViewportVideoPlayer;
