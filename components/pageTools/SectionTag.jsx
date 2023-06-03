import styles from '@/styles';

const SectionTag = ({ tagName }) => {
  return (
    <div
      className={`${styles.flexCenter} text-sm md:text-base font-semibold rounded-[30px] bg-secondary/70 text-white h-8 w-36 shadow-md`}
    >
      <span className='mx-auto'>{tagName}</span>
    </div>
  );
};

export default SectionTag;
