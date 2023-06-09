import styles from '@/styles';

const SectionTag = ({ tagName, color }) => {
  return (
    <div
      className={`${styles.flexCenter} text-sm md:text-base font-bold rounded-[10px] ${color} text-white h-10 w-40 shadow-md`}
    >
      <span className='mx-auto'>{tagName}</span>
    </div>
  );
};

export default SectionTag;
