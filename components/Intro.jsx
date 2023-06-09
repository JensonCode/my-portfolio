import styles from '@/styles';
import { useState, useEffect } from 'react';
import SocialMedia from './pageTools/SocialMedia';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContactlessIcon from '@mui/icons-material/Contactless';
import Image from 'next/image';

const adjectives = [
  'self-driven',
  'a continuous learner',
  'curious',
  'passionate',
  'concentrative',
];

const Intro = () => {
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      if (adjectiveIndex < adjectives.length - 1) {
        setAdjectiveIndex(adjectiveIndex + 1);
      } else {
        setAdjectiveIndex(0);
      }
    }, 3000);
  }, [adjectiveIndex]);

  return (
    <>
      <section
        id='introduction'
        className=' bg-gradient-to-b from-first to-second py-[10%] px-[6%] lg:px-[12%] h-[100vh] md:h-full relative '
      >
        {/* left: hero  */}
        <div className='lg:w-[35%]'>
          {/* left: hero text */}
          <div className='text-3xl font-bold text-dark'>
            <h1
              className={`mb-10 w-full transform transition-transform duration-700 ease-in-out ${
                loaded ? '' : '-translate-x-full'
              }`}
            >
              Hi there! My name is Jenson
            </h1>
            <div
              className={`w-full mb-10 transition-transform duration-700 delay-300 ease-in-out  ${
                loaded ? '' : '-translate-x-full'
              }`}
            >
              <h1>I'm</h1>

              <h1 className=' text-secondary underline'>
                {adjectives[adjectiveIndex]}
              </h1>

              <h1>in programming</h1>
            </div>
          </div>

          {/* nav buttons */}
          <div className='flex flex-col space-y-6 font-bold md:text-lg text-primary'>
            <button
              className={`h-14 w-64 rounded-[30px] transition-all ease-in-out delay-[300ms] duration-700 hover:duration-300 opacity-0 ${
                loaded ? 'opacity-100' : ''
              } bg-red hover:bg-blood hover:text-second hover:translate-y-1 hover:scale-110`}
            >
              <a href='/#project'>
                See my projects <ArrowDownwardIcon className='animate-bounce' />
              </a>
            </button>
            <button
              className={`h-14 w-64 rounded-[30px] transition-all ease-in-out delay-[300ms] duration-700 hover:duration-300 opacity-0 ${
                loaded ? ' opacity-100 ' : ''
              } ${
                styles.buttonHoverScale
              } bg-sky hover:bg-blue hover:text-fourth hover:translate-y-1 hover:scale-110`}
            >
              <a href='/#contact'>
                Contact me <ContactlessIcon />
              </a>
            </button>
            {/* social media links */}
            <SocialMedia loaded={loaded} />
          </div>
        </div>
        {/* right: hero image */}
        <div className='hidden md:block absolute py-6 lg:py-[10%] bottom-0 lg:inset-y-0 right-0 w-[65%]'>
          <Image
            src={'/hero.svg'}
            alt='hero'
            width={1920}
            height={1080}
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
