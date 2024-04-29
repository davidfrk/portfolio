import AnimationShowcase from '../display/AnimationShowcase'
import ItemShowcase from '../display/ItemShowcase'
import OndaedesAnimation from '../animations/OndaedesAnimation'

import image0 from '/images/raytracing.webp'
import image1 from '/images/ondaedesConsole.webp'
import image2 from '/images/campoterraConsole.webp'
import image3 from '/images/cartas.webp'
import image4 from '/images/rpg.webp'

import logoOndaedes from '/images/logoOndaedes.webp'
import logoCampoTerra from '/images/logoCampoTerra.webp'

const items = [
  {image: image0, alt:"Raytracing showcase", title:"Raytracing", description:"Aplicação raytracing desenvolvido para Desktop e Web" },
  {image: image1, alt:"Ondaedes showcase", title:"Ondaedes", description:"Georreferenciamos o combate às arbovíroses", animation:OndaedesAnimation},
  {image: image2, alt:"CampoTerra showcase", title:"Campo Terra Imobiliária", description:"Compre ou anuncie com o suporte de quem se importa"},
  {image: image3, alt:"Cartas mobile showcase", title:"Cartas Mobile", description:"Jogo de cartas para Android"},
  {image: image4, alt:"RPG showcase", title:"Jogo RPG", description:"Projeto RPG desenvolvido com Unity"},
]

function Home() {
  return (
    <div className='bg-[var(--background-color-2)] text-[var(--text-color-2)] w-[100vw] overflow-hidden'>
      <section className='flex flex-col justify-center items-center h-[80vh]'>
        <h1>Oi, como vai? Sou David, </h1>
        <p>Conheça um pouco do meu trabalho</p>
      </section>
      <AnimationShowcase items={items} />
      <ItemShowcase items={items} />
      <section className='mx-[10%] font-bold'>
        <h2></h2>
      </section>
    </div>
  )
}

export default Home
