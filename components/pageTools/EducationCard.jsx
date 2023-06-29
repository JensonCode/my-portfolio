const EducationCard = ({ education }) => {
  return (
    <div className='flex flex-col md:flex border border-black text-dark rounded-[15px] p-4 '>
      <div className='pr-4'>{education.icon}</div>
      <div>
        <div className='font-semibold text-sm md:text-lg lg:text-base'>
          {education.major}
        </div>
        <div className='font-semibold text-sm md:text-lg lg:text-base pb-4'>
          {education.school}
        </div>
        <div className='font-medium text-sm md:text-lg lg:text-base'>
          {education.location}
        </div>
        <div className='font-medium text-sm md:text-lg lg:text-base'>
          {education.start} — {education.end}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

//transition-all ease-in-out delay-[300ms] duration-500 hover:translate-y-1 hover:scale-110 hover:z-10
