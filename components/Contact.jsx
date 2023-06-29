import ContactForm from './pageTools/ContactForm';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-gradient-to-b from-fourth from-50% to-fourth px-[6%] lg:px-[12%]'
    >
      <div className='py-6 md:py-[80px] h-[70vh]'>
        <h2 className='text-xl md:text-3xl font-semibold text-pearl my-6'>
          Nice to meet you! <br /> Feel free to leave a message below.
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
