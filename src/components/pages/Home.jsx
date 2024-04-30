import AnimationShowcase from '../display/AnimationShowcase'
import ItemShowcase from '../display/ItemShowcase'
import ContactButton from '../input/ContactButton'
import { projects } from '../../data/projects'

function Home() {
  return (
    <div className='bg-[var(--background-color-2)] text-[var(--text-color-2)] w-[100vw] overflow-hidden'>
      <section className='flex flex-col justify-center items-center h-[80vh]'>
        <h1>Oi, como vai? Sou David, </h1>
        <p>Conheça um pouco do meu trabalho</p>
      </section>
      <ItemShowcase items={projects} />
      <AnimationShowcase items={projects} />
      <div className='flex justify-center my-[30%]'>
        <ContactButton/>
      </div>
    </div>
  )
}

export default Home
