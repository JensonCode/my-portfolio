import SectionTag from './pageTools/SectionTag';
import ProjectCard from './pageTools/ProjectCard';
const Project = () => {
  return (
    <section
      id='project'
      className='bg-gradient-to-b from-second to-third px-[6%] lg:px-[12%] h-full'
    >
      <div className='py-[80px]'>
        {/* Web projects */}
        <div className='mb-12'>
          <SectionTag
            tagName='Web Project'
            color='bg-deepPurple/70'
          />
          {products.map((product, index) => (
            <ProjectCard
              project={product}
              key={index}
            />
          ))}
        </div>
        {/* Academic  projects */}
        <div className='mb-12'>
          <SectionTag
            tagName='Academic Project'
            color='bg-deepPurple/70'
          />
          {academicProject.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
            />
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
    position: 'Web Developer',
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
    name: 'Artwork application',
    pic: '/project/artwork.webp',
    start: '2022',
    end: null,
    company: 'Seneca College',
    position: 'Student',
    description:
      'College assignment: Developed an Express server that fetched sample movie data from MongoDB, and displayed it using a simple layout built with Bootstrap components.',
    takeaway: [
      'Managed react states with Jotai',
      'Gain knowlegde of authentication and JWT',
      'Combined the usage of Mongoose and Express.js for CRUD opertaions',
      'Appreciated the convenience of Bootstrap components',
    ],
    stacks: ['Next.js', 'Bootstrap', 'Express.js', 'MongoDB'],
    link: 'https://web-422-assignment-6-self.vercel.app/',
  },
];
