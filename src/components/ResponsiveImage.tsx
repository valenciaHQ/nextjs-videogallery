import Image from 'next/image';

const ResponsiveImage = (src: string) => {
  return (
    <div className='h-20 w-full'>
      <Image
        src={src}
        fill
        className='h-unset relative w-full object-contain'
        alt='image'
      />
    </div>
  );
};

export default ResponsiveImage;
