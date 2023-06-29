const Footer = () => {
  return (
    <footer className='w-full bg-fourth px-[6%] lg:px-[12%] py-6 md:py-24 text-left'>
      <div className='flex flex-col text-deepPurple lg:text-xs font-semibold'>
        <span>Framework: Next.js</span>
        <span>Style: TailwindCSS</span>
        <span>Form handler: FormSubmit</span>

        <span>Domian:my-portfolio-jensoncode.vercel.app</span>
        <span>Deploy host: Vercel</span>
        <span className='text-sm lg:text-xs'>Last Edited: Jun 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
