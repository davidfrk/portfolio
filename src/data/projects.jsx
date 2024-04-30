import OndaedesAnimation from '../components/animations/OndaedesAnimation'

import image0 from '/images/raytracing.webp'
import image1 from '/images/ondaedesConsole.webp'
import image2 from '/images/campoterraConsole.webp'
import image3 from '/images/cartas.webp'
import image4 from '/images/rpg.webp'

import logoOndaedes from '/images/logoOndaedes.webp'
import logoCampoTerra from '/images/logoCampoTerra.webp'

const projects = [
  {
    image: image0, alt:"Raytracing showcase", title:"Raytracing", description:"Aplicação raytracing desenvolvido para Desktop e Web",
    technologies:"Computação Gráfica, Rust, WebGPU, Shaders"
  },
  {
    image: image1, alt:"Ondaedes showcase", title:"Ondaedes", description:"Georreferenciamos o combate às arbovíroses",
    technologies:"BigData, Mapbox, Google Cloud, Flask", animation:OndaedesAnimation,
  },
  {
    image: image2, alt:"CampoTerra showcase", title:"Campo Terra Imobiliária", description:"Compre ou anuncie com o suporte de quem se importa",
    technologies:"React, Python, NoSQL, GCloud App Engine,"
  },
  {
    image: image3, alt:"Cartas mobile showcase", title:"Cartas Mobile", description:"Jogo de cartas para Android",
    technologies:"Android SDK, Unity, C#, Mobile"
  },
  {
    image: image4, alt:"RPG showcase", title:"Jogo RPG", description:"Projeto RPG desenvolvido com Unity",
    technologies:"Unity, C#, Jogos, Computação Gráfica"
  },
]

export { projects }
