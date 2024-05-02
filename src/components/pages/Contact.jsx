import { contactInfo } from '../../data/contactInfo'
import ContactButton from '../input/ContactButton'

function Contact() {
  return (
    <div className='text-[var(--text-color-2)] w-full flex flex-col justify-center items-center min-h-[80vh]'>
      <div className='text-md md:text-xl mb-24 px-2 text'>
        <h1 className='mb-0 leading-none'>David Andrade,</h1>
        <h2 className='mb-8'><span>Desenvolver Full Stack</span></h2>
        <p><b className='mr-2'>Telefone:</b> {contactInfo.phone}</p>
        <p><b className='mr-2'>Email:</b> {contactInfo.email}</p>
        <p>
          <b className='mr-2'>Github:</b> 
          <a href={contactInfo.github} alt="github" target="_blank" className='hover:underline'>{contactInfo.github}</a>
        </p>
        <p>
          <b className='mr-2'>LinkedIn:</b> 
          <a href={contactInfo.linkedin} alt="linkedIn" target="_blank" className='hover:underline'>{contactInfo.linkedin}</a>
        </p>
      </div>
      <ContactButton />
    </div>
  )
}

export default Contact
