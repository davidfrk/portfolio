import { imageRouter } from "../../../utils/router";

export default function OndaedesAppBlogPost() {
  return <>
    <h1>Desenvolvimento do Aplicativo Ondaedes</h1>

    <h2>A Empresa</h2>
    <p><a href="https://www.ondaedes.org" alt="Página Ondaedes">Ondaedes</a> é uma startup que coleta e georreferencia dados relacionados às arboviroses,
     buscando auxiliar as ações de combate.</p>

    <p>Em seu site, encontramos mapas e gráficos cobrindo diversos tópicos, como disponibilidade de água, população,
    estrutura urbana, temperatura, precipitação e casos de doenças transmitidas pelo vetor Aedes, para todos os municípios do Brasil.</p>

    <p>Com diversos dados, a empresa tem como público-alvo os tomadores de decisão no combate às arboviroses.</p>

    <h2>O Aplicativo</h2>

    <p>O <a href="https://play.google.com/store/apps/details?id=ondaedes.app" alt="Aplicativo Ondaedes">aplicativo Ondaedes</a> é
     a forma encontrada para alcançar a população. Ele possui duas funções principais:</p>

    <ul>
      <li><p>Disponibilizar os dados atuais sobre a cidade em questão. Esses dados, entre outros, incluem o nível de risco e o número de casos 
        atualizados semanalmente.</p></li>
      <li><p>Notificar o usuário sobre mudanças no nível de risco para sua localização.</p></li>
    </ul>

    <h2>Processo de Desenvolvimento</h2>

    <p>Criamos uma versão inicial com elementos gráficos básicos para avaliar o funcionamento do app e padrões de uso. 
      Nesse momento, identificamos uma funcionalidade de busca por município que era desejável, mas não estava nos requisitos iniciais. 
      Nosso cliente pensou o mesmo, então a adicionamos.</p>

    <p>Com o aplicativo básico em mãos, estávamos conversando sobre o design e estendendo a API com os novos pontos de acesso.</p>

    <p>Nosso cliente optou por um visual chamado <i>neumorphism</i>, que traz interfaces limpas com ilusão de 3D.</p>

    <div className="flex flex-col md:flex-row w-full justify-center gap-4">
      <img className="rounded-[32px]" src={imageRouter("/images/ondaedes/app-home.png")} alt="Tela inicial" />
      <img className="rounded-[32px]" src={imageRouter("/images/ondaedes/app-mycity.png")} alt="Tela minha cidade" />
    </div>

    <p>Este foi o resultado.</p>

    <p>Espero que tenha gostado.</p>
  </>
}