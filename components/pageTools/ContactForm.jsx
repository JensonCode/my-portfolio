import { useForm } from 'react-hook-form';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post('https://formsubmit.co/ajax/lclcoding0714@hotmail.com', {
        name: e.name,
        email: e.email,
        message: e.message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form
        id='contactForm'
        onSubmit={handleSubmit(onSubmit)}
        className=' rounded-[15px] lg:w-[50vw]'
      >
        <input
          type='hidden'
          name='_subject'
          value={'Someone contact you through portfolio site!'}
        />
        {/* <input
          type='hidden'
          name='next'
          value={''}
        /> */}

        <div className='w-full my-2'>
          <input
            className='w-full p-2 px-4 border-2 border-dark bg-white/0 focus:outline-none rounded-[15px] focus:border-blue focus:border-[3px] text-dark text-lg placeholder:text-dark '
            type='text'
            placeholder='Name'
            {...register('name', {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <span className='text-blood'>
              <ErrorIcon className='text-sm' />
              Let me know you name!
            </span>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <span className='text-blood'>
              <ErrorIcon className='text-sm' />
              You can give me your preferred name & last name.
            </span>
          )}
        </div>
        <div className='w-full my-2'>
          <input
            className='w-full p-2 px-4 border-2 border-dark bg-white/0 focus:outline-none rounded-[15px] focus:border-blue focus:border-[3px] text-white text-lg placeholder:text-dark '
            type='email'
            placeholder='Email'
            {...register('email', {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span className='text-blood'>
              <ErrorIcon className='text-sm' /> I will contact you via your
              email!
            </span>
          )}
          {errors.email && errors.email.type === 'maxLength' && (
            <span className='text-blood'>
              <ErrorIcon className='text-sm' /> How comes your email so long...
            </span>
          )}
        </div>

        <textarea
          className='w-full p-4 mb-4 border-2 border-dark bg-white/0 focus:outline-none rounded-[15px] focus:border-blue  focus:border-[3px] text-dark text-lg placeholder:text-dark'
          type='text'
          rows={2}
          placeholder='Put your message here!'
          {...register('message')}
        />
        <button
          type='submit'
          className='flex items-center justify-center h-12 w-full lg:w-[15vw] rounded-[15px] bg-white/0 border-dark border-2 text-dark hover:text-white hover:bg-blue font-semibold'
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
