import ContactForm from './pageTools/ContactForm';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-gradient-to-b from-fourth from-50% to-first px-[6%] lg:px-[12%]'
    >
      <div className='py-[80px] h-[100vh]'>
        <h2 className='text-3xl font-semibold text-indigo my-10'>
          Nice to meet you! Feel free to leave your contact below.
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
