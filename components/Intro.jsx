import styles from '@/styles';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Image from 'next/image';

const adjectives = [
  'self-driven',
  'a continuous learner',
  'curious',
  'passionate',
  'concentrative',
];
const socialMedia = [
  {
    icon: <GitHubIcon className='text-[#6e5494] text-3xl' />,
    link: 'https://github.com/JensonCode',
  },
  {
    icon: <LinkedInIcon className='text-[#0077b5] text-3xl' />,
    link: 'https://www.linkedin.com/in/cheuk-lung-li-542307269',
  },
  {
    icon: <TwitterIcon className='text-[#00acee] text-3xl' />,
    link: 'https://twitter.com/lcllcl1457501',
  },
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
    <section
      id='introduction'
      className=' bg-gradient-to-b from-first to-second px-[5%] lg:px-[15%] py-12'
    >
      <div className='grid grid-cols-2 gap-6 '>
        <div className='grid gap-6 py-32'>
          <div className='flex flex-col space-y-10 mb-10 text-3xl font-bold text-primary'>
            {/* <h1
              className={`grid w-full translate-x-0 transition-transform duration-1000 ease-in-out ${
                loaded ? '' : 'translate-x-full'
              }`}
            >
              Hi there! My name is Jenson
            </h1> */}
            <h1
              className={`grid w-full transform transition-transform duration-1000 ease-in-out ${
                loaded ? '' : '-translate-x-full'
              }`}
            >
              Hi there! My name is Jenson
            </h1>
            <div
              className={`flex flex-col w-full transition-transform duration-1000 delay-500 ease-in-out  ${
                loaded ? '' : '-translate-x-full'
              }`}
            >
              <h1>I am</h1>

              <h1 className=' text-secondary underline'>
                {adjectives[adjectiveIndex]}
              </h1>

              <h1>in programming</h1>
            </div>
          </div>
          <div
            className='flex space-x-4 w-full my-4'
            aria-label='socialmedia'
          >
            {socialMedia.map((elem) => (
              <a
                href={elem.link}
                target='_blank'
              >
                {elem.icon}
              </a>
            ))}
          </div>

          <button className='bg-purple h-14 w-64 rounded-[30px] my-4'>
            <a href='/#project'>
              See my projects <ArrowCircleDownIcon />
            </a>
          </button>
        </div>

        <div className='flex flex-col items-start bg-gray-100 py-32'>
          <h2>Hero's pic</h2>
          {/* <div>
          <Image
            src={'/fish.jpg'}
            width={600}
            height={800}
          />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
