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
        className=' rounded-[15px] bg-purple/40 p-10'
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
        <div className='flex mb-4 space-x-4'>
          <div className='w-full'>
            <input
              className='w-full p-4 border-2 border-brown focus:outline-none rounded-[10px] focus:border-purple  text-dark text-lg'
              type='text'
              placeholder='Name'
              {...register('name', {
                required: true,
                maxLength: 30,
              })}
            />{' '}
            {errors.name && errors.name.type === 'required' && (
              <span className='text-blood'>
                <ErrorIcon className='text-sm' />
                At least let me know you name..
              </span>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
              <span className='text-blood'>
                <ErrorIcon className='text-sm' />
                You can give me your preferred name & last name.
              </span>
            )}
          </div>
          <div className='w-full'>
            <input
              className='w-full p-4 border-2 border-brown focus:outline-none rounded-[10px] focus:border-purple text-dark text-lg'
              type='email'
              placeholder='Email'
              {...register('email', {
                required: true,
                maxLength: 30,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span className='text-blood'>
                <ErrorIcon className='text-sm' /> I will contact your email!
              </span>
            )}
            {errors.email && errors.email.type === 'maxLength' && (
              <span className='text-blood'>
                <ErrorIcon className='text-sm' /> How comes your email so
                long...
              </span>
            )}
          </div>
        </div>

        <textarea
          className='w-full p-4 mb-4 border-2 border-brown focus:outline-none rounded-[10px] focus:border-purple text-dark text-lg'
          type='text'
          rows={8}
          placeholder='Put your message here!'
          {...register('message')}
        />
        <button
          type='submit'
          className='flex items-center  justify-center mx-auto h-12 w-24 rounded-[30px] bg-white'
        >
          Confirm
        </button>
      </form>
    </>
  );
};

export default ContactForm;
