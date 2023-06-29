//components
import SectionTag from './pageTools/SectionTag';
import ProjectCard from './pageTools/ProjectCard';
//data
import { products, academicProject } from '@/data/project';
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
