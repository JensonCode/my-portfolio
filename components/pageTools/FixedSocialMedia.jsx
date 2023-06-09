import SocialMedia from './SocialMedia';

const FixedSocialMedia = () => {
  return (
    <div className='hidden md:block bg-black/30 rounded-l-[20px] fixed right-0 top-64 bottom-0 z-20 w-[50px] h-[200px] '>
      <SocialMedia
        loaded={true}
        fixed={true}
      />
    </div>
  );
};

export default FixedSocialMedia;
