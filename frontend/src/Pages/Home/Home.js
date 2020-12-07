import React from "react";
import Carrossel from "../Components/Carrossel/Carrossel";
import Footer from "../Components/Footer/Footer";
import GalleryLivrosHome from "../Components/GalleryLivrosHome/GalleryLivrosHome";
import "./Home.css";
require("typeface-quicksand");


function Home(props){
 
    return (
      
      <>
        <Carrossel/>
        <div className="Home">
          <div className="section-2">
            <h1 className="TitleS2"><span class="badge badge-danger">Novidades</span> da semana</h1>
            <GalleryLivrosHome/>
          </div>
          
          <div className="section-3">
            <h1 className="TitleS3">Livro em <span class="badge badge-danger">destaque</span> da semana!</h1>
            <p className ="TextoLivroS3">Publicado em 1990, este livro constituiu a primeira exposição sistemática da poética do haikai em língua portuguesa, bem como a primeira publicação bilíngue de um conjunto significativo de poemas. Tornou-se assim, como o demonstram as inúmeras referências e as três seguidas edições, um clássico no estudo e na divulgação da poesia japonesa no Brasil.</p>
          </div>

          <div className="section-4">
            <h1 className = "TitleS4" id="historia"><br/>Conheça nossa História!</h1>
            <p className ="TextoHistoriaS4">A nossa história se mistura com a imigração japonesa no Brasil, já que nosso fundador Hirashi Miyako veio para o Brasil no ano de 1930 em um dos navios que transportavam imigrantes japoneses para o Brasil. Instalado no país o senhor Miyako constituiu sua família e trabalhou como operário em uma indústria de automóveis na grande BH, se aposentando no ano de 1970 e abrindo, juntamente com sua esposa Sakura, o sebo Hai Kai que tem como principal inspiração as flores de cerejeira, que simbolizam um código dos samurais: viver o presente sem medo, assim como Hirashi se sentia quando veio viver em uma terra tão distante de seu país natal.</p>
          </div>

          <div className="section-5" id="doar">
              <h1 className="TitleS5">Como <span class="badge badge-danger">doar</span> um exemplar:</h1>
              <p className ="TextoLivroS5">É possível efetuar a doação de um exemplar deixando-o em nossa loja (situada bem no centro de BH) ou então entrando em contato por meio do nosso telefone <img />, WhatsApp ou E-mail. No ato da doação entregamos um cupom de desconto para a retirada de algum produto em nosso Sebo. Aceitamos livros de qualquer gênero literário e em qualquer condição de uso.</p>
          </div>
          <Footer/>
        </div>
    </>
    );
}

export default Home;