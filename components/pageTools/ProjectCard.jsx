import styles from '@/styles';
import Image from 'next/image';
import { getStackIcon } from '@/lib/project';
const ProjectCard = ({ project }) => {
  return (
    <>
      <a
        className={`group grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col rounded-lg hover:bg-divider/20 hover:shadow-xl ${styles.hoverSmooth} my-4`}
        href={project.link}
        target='_blank'
      >
        <div
          id='project details'
          className={`grid gap-3 px-3 group-hover:bg-divider/10 rounded-l-lg py-4 ${styles.groupHoverSmooth} `}
        >
          {/* project name */}
          <span
            className={`text-green group-hover:text-dark font-bold group-hover:underline cursor-pointer ${styles.groupHoverSmooth}`}
          >
            {project.name}
          </span>
          {/* project details*/}
          <Image
            id='project picture'
            className='object-fill rounded-[10px] shadow-lg mb-4 '
            src={project.pic}
            alt={project.name}
            height={900}
            width={1900}
          />

          <p
            className={`mb-4 px-1 text-indigo group-hover:text-dark font-medium group-hover:font-semibold group-hover:underline ${styles.groupHoverSmooth}`}
          >
            {project.description}
          </p>
          {/* stack list */}
          <div className='grid grid-cols-2 gap-4 md:flex md:space-x-4'>
            {project.stacks.map((stack, index) => (
              <div
                key={index}
                className='flex ftems-center text-sm'
              >
                <Image
                  src={`${getStackIcon(stack)}`}
                  alt={`${stack} icon`}
                  height={25}
                  width={25}
                />
                <span
                  className={`pl-2 text-indigo group-hover:text-dark font-semibold ${styles.groupHoverSmooth}`}
                >
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* job duty */}
        <div
          className={`grid grid-row-2 pl-10 group-hover:underline ${styles.groupHoverSmooth}`}
        >
          <div
            className={`flex flex-col text-green group-hover:text-dark font-bold self-end ${styles.groupHoverSmooth}`}
          >
            {/* project date */}
            <span className='pb-1'>
              {project.start}
              {project.end ? ' — ' + project.end : ''}
            </span>
            {/* position */}
            <span className='pb-3'>
              {project.position}, {project.company}
            </span>
          </div>
          <div className='text-indigo'>
            {/* sales */}
            <h2 className='pb-1 font-medium'>Biggest takeaway</h2>
            <ul>
              {project.takeaway.map((item, index) => (
                <li
                  key={index}
                  className='font-medium'
                >
                  ．{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
