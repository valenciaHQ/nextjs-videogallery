import Image from 'next/image';
import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className='relative my-10'>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className='absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400'
      />
      <div className='relative m-auto flex h-[50vh] w-full overflow-hidden'>
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 h-full w-full'
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={index}
                  src={image}
                  fill
                  className='animate-fadeIn'
                  alt={`image-${index}`}
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 181, 6)}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className='absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400'
      />

      <div className='relative flex justify-center p-2'>
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700'
                  : 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-300'
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
