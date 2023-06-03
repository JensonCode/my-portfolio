import SectionTag from './pageTools/SectionTag';
import ProjectCard from './pageTools/ProjectCard';
const Project = () => {
  return (
    <section
      id='project'
      className=' bg-gradient-to-b from-second to-third px-[5%] lg:px-[10%] py-12'
    >
      <div className='lg:py-16'>
        <div className='mb-12'>
          {/* Web projects */}
          <SectionTag tagName='Web Projects' />
          {products.map((product) => (
            <ProjectCard project={product} />
          ))}
        </div>
        <div className='mb-12'>
          <SectionTag tagName='Academic Project' />
          {academicProject.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

const products = [
  {
    name: 'boogabot.com',
    pic: '/project/boogabot.webp',
    start: 'MAY 2023',
    end: 'PRESENT',
    company: 'Easy GoGo Limited',
    position: 'Full-stack Developer',
    description:
      'Transformed an abandoned Vue.js project into a Next.js application with a fresh design and functionality.',
    takeaway: [
      'Collaborated with graphic designers(aka boss)',
      'Implemented efficient rendering patterns',
      'Explored Tailwind CSS, headless CMS and more',
      'Adapted to changing requirements',
    ],
    stacks: ['Next.js', 'Tailwind', 'Strapi', 'Digital Ocean'],
    link: 'https://booga-frontend-next-js.vercel.app/',
  },
];

const academicProject = [
  {
    name: 'Artwork app',
    pic: '/project/boogabot.webp',
    start: '2021',
    end: null,
    company: 'Seneca College',
    position: 'Student',
    description:
      'College assignment: Developed an Express server that fetched sample movie data from MongoDB, and displayed it using a simple layout built with Bootstrap components.',
    takeaway: [
      'Gained experience with Express.js and API routing',
      'Explored the usage of Mongoose for database operations',
      'Appreciated the convenience of Bootstrap components',
      'introducted my first ever frontend framework',
    ],
    stacks: ['Next.js', 'Bootstrap', 'Express.js', 'MongoDB'],
    link: 'https://booga-frontend-next-js.vercel.app/',
  },
  {
    name: 'Simple Movie App',
    pic: '/project/boogabot.webp',
    start: '2021',
    end: null,
    company: 'Seneca College',
    position: 'Student',
    description:
      'College assignment: Developed an Express server that fetched sample movie data from MongoDB, and displayed it using a simple layout built with Bootstrap components.',
    takeaway: [
      'Gained experience with Express.js and API routing',
      'Explored the usage of Mongoose for database operations',
      'Appreciated the convenience of Bootstrap components',
      'introducted my first ever frontend framework',
    ],
    stacks: ['Next.js', 'Bootstrap', 'Express.js', 'MongoDB'],
    link: 'https://booga-frontend-next-js.vercel.app/',
  },
];
