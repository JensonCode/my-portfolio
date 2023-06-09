import styles from '@/styles';
import Image from 'next/image';
import { getStackIcon } from '@/lib/project';
import Link from 'next/link';
const ProjectCard = ({ project }) => {
  return (
    <>
      <Link
        className={`group grid lg:grid-cols-2 my-4 p-3 px-6 lg:p-0 rounded-lg bg-white/40 lg:bg-transparent lg:hover:bg-white/20 hover:shadow-xl ${styles.hoverSmooth}`}
        href={project.link}
        target='_blank'
      >
        <div
          id='project details'
          className={`grid gap-3 p-2 md:p-6 rounded-l-lg group-hover:bg-gray-200/40  ${styles.groupHoverSmooth} `}
        >
          {/* project name */}
          <span
            className={`text-pearl text-base md:text-lg lg:text-base font-semibold group-hover:underline group-hover:text-dark group-hover:font-bold cursor-pointer ${styles.groupHoverSmooth}`}
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
            className={`mb-4 px-1 text-base md:text-lg lg:text-base text-dark font-medium group-hover:text-primary group-hover:underline ${styles.groupHoverSmooth}`}
          >
            {project.description}
          </p>
          {/* stack list */}
          <div className='grid grid-cols-2 gap-4 md:flex md:space-x-4'>
            {project.stacks.map((stack, index) => (
              <div
                key={index}
                className='flex items-center text-sm md:text-base lg:text-sm'
              >
                <Image
                  src={`${getStackIcon(stack)}`}
                  alt={`${stack} icon`}
                  height={25}
                  width={25}
                />
                <span
                  className={`pl-2 text-dark font-semibold group-hover:text-primary ${styles.groupHoverSmooth}`}
                >
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* job duty */}
        <div
          className={`grid grid-row-2 px-2 py-4 lg:pl-10 text-base md:text-lg lg:text-base group-hover:underline ${styles.groupHoverSmooth}`}
        >
          <div
            className={`flex flex-col font-bold self-end text-pearl group-hover:text-dark ${styles.groupHoverSmooth}`}
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
          <div
            className={`text-dark font-medium ${styles.groupHoverSmooth} group-hover:text-primary`}
          >
            <h2 className='pb-1 font-medium'>Takeaway</h2>
            <div className='pl-4'>
              {/* sales */}
              <ul>
                {project.takeaway.map((item, index) => (
                  <li
                    key={index}
                    className='font-medium '
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>{' '}
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
