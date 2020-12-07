import React from "react";
import "./GalleryLivros.css";
import { useHistory } from "react-router-dom";

function GalleryLivros(){
    const history = useHistory();

    const livros_promocao = [
        {
            nome: "O Menino Maluquinho",
            autor: "Ziraldo",
            descricao: "Um menininho traquinas, diziam. Tinha macaquinhos no sótão, deitava e rolava, fazendo confusão. Um anjinho, um saci? Alegria da casa, liderava a garotada. Namorador, fazia versinhos, compunha canções, inventava brincadeiras. Era sabido, um amigão. “Menino Maluquinho”, diziam sorrindo as pessoas. Não era, não! Só mais tarde descobriram que tinha sido um garotinho muito amado e, por isso mesmo, muito feliz.",
            pathName: "/images/livros/promocao/o-menino-maluquinho.png",
            comment: "O miserável é um gênio",
            name: "Vegeta",
            icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605493865/vegeta_vgpozy.jpg',
            time: "Hoje às 10:20",
        },
        {
            nome: "A Menina que Roubava Livros",
            autor: "Markus Suzak",
            descricao: "A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943. Traços de uma sobrevivente: a mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro.",
            pathName: "/images/livros/promocao/a-menina-que-roubava-livros.jpg",
            icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605494098/faustao_sgce2a.jpg',
            comment: "Oloco bicho, esse livro ta pegando fogo meu",
            time: "24/07/1920"   
        },
        {
            nome: "Lua Nova",
            autor: "Stephenie Meyer",
            descricao: "Para Bella Swan, há um coisa mais importante do que a própria vida: Edward Cullen. Mas estar apaixonada por um vampiro é ainda mais perigoso do que ela poderia ter imaginado. Edward já resgatara Bella das garras de um monstro cruel, mas agora, quando o relacionamento ousado do casal ameaça tudo o que lhes é próximo e querido, eles percebem que seus problemas podem estar apenas começando...",
            pathName: "/images/livros/promocao/lua-nova.jpg",
            icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605494442/emo_sdztyk.jpg',
            comment: "Mudei de papel mas jamais deixei de ser emo",
            time: "Ontem às 19:30"
        },
        {
            nome: "A Imigração Japonesa no Brasil",
            autor: "Maria Luiza Tucci",
            descricao: "Este livro é, antes de mais nada, um tributo à comunidade japonesa radicada no Brasil desde o início do século XX. É uma iniciativa da Universidade de São Paulo que, assim como outras tantas instituições brasileiras e nipônicas, se preparou para comemorar o Centenário da Imigração Japonesa (1908-2008). Expressa também o respeito ao Outro, independente da sua nacionalidade, religião, etnia e ideologia política. Aliás, este é um dos princípios que modelo o perfil da Universidade de São Paulo, dos autores e demais instituições que participam deste diálogo que extrapola a academia.",
            pathName: "/images/livros/promocao/imigrantes-japoneses-no-brasil.jpg",
            name: "Leonardo DiCaprio",
            time: "24/10/1997",
            icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605495083/JackDawson_dhdxkf.jpg',
            comment: "Ainda bem que eles não vieram no Titanic",
        },
        {
            nome: "O Mundo de Sofia",
            autor: "Jostein Gaarder",
            descricao: "Às vésperas de seu aniversário de quinze anos, Sofia Amundsen começa a receber bilhetes e cartões-postais bastante estranhos. Os bilhetes são anônimos e perguntam a Sofia quem é ela e de onde vem o mundo. Os postais são enviados do Líbano, por um major desconhecido, para uma certa Hilde Møller Knag, garota a quem Sofia também não conhece. O mistério dos bilhetes e dos postais é o ponto de partida deste romance fascinante, que vem conquistando milhões de leitores em todos os países e já vendeu mais de 1 milhão de exemplares só no Brasil.",
            pathName: "/images/livros/promocao/o-mundo-de-sofia.jpg",
            icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605495246/Shakespeare_d8hkmz.jpg',
            name: "William Shakespeare",
            time: "25/10/1599 às 23:54",
            comment: "Ser corno ou não ser. Eis a questão",
        },
    ];

        function verLivro(livro){
            history.push({
                position: window.scrollTo(0, 0),
                pathname: '/resumo',
                state: { livro },
            });
        }

    return (
        
        <>
            <div className="container">
                {livros_promocao.map((listItem) => {
                    return(
                        <div className="itens-carousel">
                            <div class="hover01">
                                <img className="livro-carousel" src={listItem.pathName} onClick = {
                                    () => verLivro(listItem)}/>
                            </div>
                                <p className="livro-info">{listItem.nome}
                                <br/> Autor: {listItem.autor}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default GalleryLivros;
