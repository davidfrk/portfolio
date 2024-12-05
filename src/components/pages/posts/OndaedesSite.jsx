import { imageRouter } from "../../../utils/router";

export default function OndaedesSiteBlogPost() {
  return <>
    <h1>Desenvolvimento da Página Ondaedes</h1>

    <h2>A Empresa</h2>
    <p><a href="https://www.ondaedes.org" alt="Página Ondaedes">Ondaedes</a> é uma startup que coleta e georreferencia dados relacionados às arboviroses, buscando auxiliar as ações de combate.</p>

    <p>Em seu site, encontramos mapas e gráficos cobrindo diversos tópicos, como disponibilidade de água, população, estrutura urbana, temperatura, precipitação e casos de doenças transmitidas pelo vetor Aedes, para todos os municípios do Brasil.</p>

    <p>Com diversos dados, a empresa tem como público-alvo os tomadores de decisão no combate às arboviroses.</p>

    <h2>Mapas</h2>

    <p>Como primeiro desafio, tínhamos de gerar mapas usando dados originados de diversas fontes, que apresentam diferentes formatos.</p>
    
    <p>Desta forma, optamos por renderizações completas através do software QGIS, onde geramos a maior parte dos nossos mapas. Com todas as tiles pré-geradas, temos uma velocidade incrível na entrega das tiles, possibilitando interação com alto desempenho, inclusive no mobile.</p>
    
    <img src={imageRouter("/images/ondaedes/globo.png")} alt="globo"/>
    
    <p>No entanto, nem todos os mapas podem seguir esse método. O mapa de chuvas, por exemplo, é atualizado a cada 30 minutos. Neste caso, integramos uma API de dados meteorológicos.</p>
    
    <img src={imageRouter("/images/ondaedes/chuvas.png")} alt="chuvas"/>

    <h2>Gráficos</h2>

    <p>Os gráficos são gerados com dados atuais de múltiplas APIs. A empresa Ondaedes coleta e atualiza os dados de acordo com as requisições.</p>

    <p>Parte dos dados disponíveis aqui também servem para alimentar o aplicativo Ondaedes.</p>
    
    <img src={imageRouter("/images/ondaedes/gráficos.png")} alt="gráficos"/>
  </>
}