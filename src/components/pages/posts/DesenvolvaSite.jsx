import { imageRouter } from "../../../utils/router";

export default function DesenvolvaSiteBlogPost() {
  return <>
    <h1>Página Desenvolva</h1>

    <h2>A Empresa</h2>
    <p><a href="https://www.desenvolva.site" alt="Página Desenvovla">Desenvolva Site</a> é uma startup de desenvolvimento de apps e websites.</p>
    
    <h2>Desenvolvimento</h2>
    <img src={imageRouter("/images/desenvolvaSite/websites2.png")} alt="páginas desenvolvidas"/>
    
    <p>Visualize o design completo. <a href="https://www.desenvolva.site" alt="Página Desenvovla">Ou clique aqui para ir até a página.</a></p>

    <img className="max-h-[1200px] mx-auto" src={imageRouter("/images/desenvolvaSite/desenvolva-fullpage2.png")} alt="página Desenvolva"/>
  </>
}