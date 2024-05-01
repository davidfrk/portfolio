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
    technologies:"Computação Gráfica, Rust, WebGPU, Shaders",
    text:(<div>
      <p>Desenvolvemos uma aplicação raytracing como caso de estudo ao novo padrão web para render 3D. Para isto desenvolvemos o mesmo algoritmo 
        raytracing em <code>Rust</code> voltado para desktop, e <code>WGSL</code> (<span>WebGPU shading language</span>) para rodar direto no navegador.</p>
      <p>Os resultados revelam o poder significativo que os navegadores atuais possuem, abrindo portas e 
        possibilidades para render 3D em aplicações web.</p>
      <p>Também mostra suas limitações, devido ao ainda baixo suporte em dispositivos mobile. Mas não desanime, WebGPU é o novo padrão W3C 
        (<span>World Wide Web Consortium</span>) e o suporte tende a aumentar com novos dispositivos e atualizações dos navegadores.</p>
    </div>)
  },
  {
    image: image1, alt:"Ondaedes showcase", title:"Ondaedes", description:"Georreferenciamos o combate às arbovíroses",
    technologies:"BigData, Mapbox, Google Cloud, Flask", animation:OndaedesAnimation,
    text:(<div>
      <p>O Ondaedes coleta e mapeia dados relacionados às arboviroses, desde fatores climáticos como temperatura e índice de chuva, 
        como dados populacionais e estáticas de infestação e proliferação de doenças transmitidas pelo vetor aedes.</p>
      <p>Com visualização georreferenciada de resposta rápida trazemos claridade ao estado de infestações e fatores agravantes, 
        mas não só isso, o Ondaedes se estende com previsões meteorológicas para traçar áreas de risco e identificar períodos onde a ação se faz necessária.</p>
      <p>Com o trabalho de todos podemos combater com esforço eficaz.</p>
    </div>)
  },
  {
    image: image2, alt:"CampoTerra showcase", title:"Campo Terra Imobiliária", description:"Compre ou anuncie com o suporte de quem se importa",
    technologies:"React, Python, NoSQL, GCloud App Engine",
    text:(<div>
      <p>Com o Campo Terra você tem tranquilidade na hora de anunciar ou adquirir imóveis.</p>
      <p>Registre, anuncie. Filtre suas preferências, negocie.</p>
      <p>Conte com uma equipe atenciosa para lhe auxiliar.</p>
    </div>)
  },
  {
    image: image3, alt:"Cartas mobile showcase", title:"Cartas Mobile", description:"Jogo de cartas para Android",
    technologies:"Android SDK, Unity, C#, Mobile",
    text:(<div>
      <p>Aqui temos um jogo de cartas inspirado por Ants de Miroslav Němeček.</p>
      <p>O App foi desenvolvido com Android SDK e Unity Engine e traz a nostalgia do seu antecessor pro mobile.</p>
      <p>Relaxe e aproveite.</p>
    </div>)
  },
  {
    image: image4, alt:"RPG showcase", title:"Jogo RPG", description:"Projeto RPG desenvolvido com Unity",
    technologies:"Unity, C#, Jogos, Computação Gráfica",
    text:(<div>
      <p>RPG inspirado em jogos como Diablo, Path of Exile e Dota.</p>
      <p>O gameplay é focado em execução estratégica, customização e execução rápida onde o jogador 
        busca otimizar sua run para obter o maior poder o mais rápido possível.</p>
      <p>Com composição de habilidades, personalização de atributos e craft de equipamento temos uma variedade de builds.</p>
      <p>Os inimigos possuem seus próprios grupos e padrões de ação onde podem tornar-se inimigos 
        entre si. O mundo vive em suas próprias regras, você é só mais um.</p>
    </div>)
  },
]

export { projects }
