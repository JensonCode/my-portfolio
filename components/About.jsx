import EducationCard from './pageTools/EducationCard';
import { getStackIcon } from '@/lib/project';
import Image from 'next/image';
const About = () => {
  return (
    <section
      id='about'
      className={`bg-gradient-to-b from-third from-50% to-fourth px-[6%] lg:px-[12%] cursor-default`}
    >
      <div className='py-[80px] grid md:grid-cols-2 md:grid-rows-2 gap-4 '>
        {/* Story */}
        <div className='p-2 group'>
          <h2 className='font-semibold mb-4 text-pearl group-hover:underline group-hover:text-dark '>
            Story
          </h2>
          <p className='font-medium text-sm md:text-lg lg:text-base text-dark hover:text-primary hover:underline'>
            I hold an economics degree from Hong Kong and initially worked as a
            B2B salesman. However, my interest in data analysis sparked a desire
            to change my career path. I pursued computer programming studies at
            Seneca College, where I discovered a passion for web development and
            programming.
          </p>
          <br />
          <p className='font-medium text-sm md:text-lg lg:text-base mb-4 text-dark hover:text-primary hover:underline'>
            Currently, I am fully dedicated to building web applications and
            expanding my programming skills.I enjoy embracing new challenges and
            collaborating with diverse teams to bring ideas to life. With a
            background in economics and a keen interest in programming, I aim to
            create impactful solutions that deliver value to businesses and
            individuals.
          </p>
        </div>
        {/* Fact and habit */}
        <div className='p-2 text-sm md:text-lg lg:text-base'>
          <div className='mb-4 group'>
            <h2 className='font-semibold mb-4 text-pearl group-hover:underline group-hover:text-dark'>
              Facts
            </h2>

            <div>{factTable()}</div>
          </div>

          <div className='group'>
            <h2 className='font-semibold mb-4 text-pearl group-hover:underline group-hover:text-dark'>
              Habit
            </h2>
            <div className='grid grid-cols-2 font-medium text-dark'>
              {habitList.map((habit, index) => (
                <p
                  key={index}
                  className='hover:bg-blue/40 hover:text-dark '
                >
                  {habit.icon} {habit.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Education */}
        <div className='md:col-span-2 p-2'>
          <div className='mb-8 group'>
            <h2 className='font-semibold text-pearl mb-4 group-hover:underline group-hover:text-dark'>
              Education
            </h2>
            <div className='grid md:grid-cols-2 gap-2'>
              {education.map((edu, index) => (
                <EducationCard
                  education={edu}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className='mb-8 group'>
            <h2 className='font-semibold text-pearl mb-4 group-hover:underline group-hover:text-dark'>
              Skills
            </h2>
            <div className='grid grid-cols-2 gap-2 font-medium text-dark text-sm md:text-lg lg:text-base'>
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-4 hover:bg-blue/40 hover:text-dark '
                >
                  <Image
                    src={`${getStackIcon(skill.icon)}`}
                    alt={`${skill.icon} icon`}
                    height={25}
                    width={25}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const factTable = () => {
  const factList = [
    { row: 'Gender', value: 'Male' },
    { row: 'Age', value: '27' },
    { row: 'Location', value: 'Toronto, Hong Kong' },
    { row: 'Language', value: 'English, Cantonese, Chinese' },
  ];

  return (
    <table className='table-fixed border w-full text-dark border-first rounded-[10px]'>
      <tbody>
        {factList.map((fact, index) => (
          <tr
            key={index}
            className='hover:bg-blue/40 hover:text-primary '
          >
            <td className='p-3 font-semibold'>{fact.row}</td>
            <td className='p-3 font-medium'>{fact.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

import CoffeeIcon from '@mui/icons-material/Coffee';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
const habitList = [
  { icon: <CoffeeIcon className='text-amber-500' />, name: 'Pourover coffee' },
  {
    icon: <SportsBasketballIcon className='text-red' />,
    name: 'Basketball',
  },
  {
    icon: <TableRestaurantIcon className='text-blue' />,
    name: 'Board Game',
  },
  { icon: <ShowChartIcon className='text-lime-500' />, name: 'Investing' },
];

import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const education = [
  {
    major: 'Diploma of Computer Programming',
    school: 'Seneca College',
    location: 'Toronto',
    start: 'JAN 2022',
    end: 'APR 2023',
    icon: <ComputerIcon className='text-4xl text-primary' />,
  },
  {
    major: 'Bachelor of Applied Economics',
    school: 'Hong Kong Metropolitan University',
    location: 'Hong Kong',
    start: 'SEP 2014',
    end: 'APR 2018',
    icon: <AccountBalanceIcon className='text-4xl text-primary' />,
  },
];

const skillList = [
  { name: 'Object-oriented programming', icon: 'c++' },
  { name: 'Data structures and algorithms', icon: 'Python' },
  { name: 'Database system', icon: 'MySQL' },
  { name: 'Software Analysis and Design', icon: 'Visual Paradigm' },
  { name: 'Web programming', icon: 'Node.js' },
];
