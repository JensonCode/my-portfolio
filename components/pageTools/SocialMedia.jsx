import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
const SocialMedia = ({ loaded, fixed }) => {
  const socialMedia = [
    {
      icon: (
        <GitHubIcon className='text-[#6e5494] text-3xl md:text-4xl lg:text-3xl' />
      ),
      link: 'https://github.com/JensonCode',
    },
    {
      icon: (
        <LinkedInIcon className='text-[#0077b5] text-3xl md:text-4xl lg:text-3xl' />
      ),
      link: 'https://www.linkedin.com/in/cheuk-lung-li-542307269',
    },
    {
      icon: (
        <TwitterIcon className='text-[#00acee] text-3xl md:text-4xl lg:text-3xl' />
      ),
      link: 'https://twitter.com/lcllcl1457501',
    },
  ];
  return (
    <div
      className={`flex ${
        fixed ? 'flex-col items-center justify-center space-y-4' : 'space-x-4'
      } w-full py-4 my-2 transition-all opacity-0 delay-1000 duration-700 easy-in-out ${
        loaded ? ' opacity-100 ' : ''
      }`}
      aria-label='socialmedia'
    >
      {socialMedia.map((elem, index) => (
        <Link
          key={index}
          href={elem.link}
          target='_blank'
          className='hover:bg-white/40 rounded-full h-10 w-10 flex items-center justify-center'
        >
          {elem.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
