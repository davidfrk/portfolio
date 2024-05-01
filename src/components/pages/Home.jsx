import AnimationShowcase from '../display/AnimationShowcase'
import ItemShowcase from '../display/ItemShowcase'
import ContactButton from '../input/ContactButton'
import { projects } from '../../data/projects'

import straightPath from '/images/svg/straightPath.svg'

function Home() {
  return (
    <div className='bg-[var(--background-color-2)] text-[var(--text-color-2)] w-[100vw] overflow-hidden'>
      <section className='flex flex-col justify-center items-center h-[80vh]'>
        <h1>Oi, como vai? Sou David, </h1>
        <p>Conheça um pouco do meu trabalho</p>
      </section>
      <ItemShowcase items={projects} />
      
      <div className='text-center text-xl mx-[10%] my-[12rem] text flex flex-col items-center'>
        <img src={straightPath} alt="Dashed path" width="400px" height="400px" draggable={false}/>
        <h2 className='text-3xl my-12'>O que acha de um pequeno experimento?</h2>
        <p>Vamos desenvolver o componente anterior com outra temática. Atualmente, o descreveria como moderno e funcional.</p>
        <p>Faremos algo colorido, divertido.</p>
      </div>
      <AnimationShowcase items={projects} />
      <div className='text-center text-xl mx-[10%] text'>
        <p>Então seguiríamos com o formato padrão.</p>
        <p>O mesmo conteúdo pode ser apresentado em diferentes formas, transmitir múltiplas perspectivas e sentimentos.</p>
      </div>
      <div className='flex justify-center mt-[12rem] mb-[12rem]'>
        <ContactButton/>
      </div>
    </div>
  )
}

export default Home
