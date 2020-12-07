import React from "react";
import "./Livros.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import CustomizedRatings from "../Rating/Rating";
import DefaultRate from "../../DefaultRating";

const livros = [
    {
        nome: "Livro: O Auto da Compadecida",
        autor: "Ariano Suassuna",
		categoria: "Clássicos da Literatura Brasileira",
        descricao: "O Auto da Compadecida consegue o equilíbrio perfeito entre a tradição popular e a elaboração literária ao recriar para o teatro episódios registrados na tradição popular do cordel. É uma peça teatral em forma de Auto em 3 atos, escrita em 1955 pelo autor paraibano Ariano Suassuna. Sendo um drama do Nordeste brasileiro, mescla elementos como a tradição da literatura de cordel, a comédia, traços do barroco católico brasileiro e, ainda, cultura popular e tradições religiosas.",
        comment: "Esse livro é o suprassumo da crítica social",
        name:"Carol(Ana) Madeira",
        pathName: "/images/livros/auto-da-compadecida.jpg",
        time: "Hoje às 08:20",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605490737/Carol_pfmolo.jpg' ,
        rate: "4",
    },
    {
        nome: "Livro: A Revolução dos Bichos",
        autor: "George Orwell",
        categoria: "Ficção",
        descricao: "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.",
        comment: "Esse ai é livro de comunista safado",
        name:"Ana Gonçalves",
        pathName: "/images/livros/revolucao-dos-bichos.jpg",
        time: "Hoje às 03:37",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491033/AnaGoncalves_xokw1d.jpg',
        rate: "5",
    },
    {
        nome: "Livro: Lolita",
        autor: "Vladimir Nabokov",
		categoria: "Clássicos da Literatura Mundial",
        descricao: "Polêmico, irônico e tocante, este romance narra o amor obsessivo de Humbert Humbert, um cínico intelectual de meia-idade, por Dolores Haze, Lolita, 12 anos, uma ninfeta que inflama suas loucuras e seus desejos mais agudos. Através da voz de Humbert Humbert, o leitor nunca sabe ao certo quem é a caça, quem é o caçador. A obra-prima de Nabokov, agora em nova tradução, não é apenas uma assombrosa história de paixão e ruína.",
        comment:"Senti muita conotação sexual ein, quero mais...",
        name: "Ian Xavier",
        pathName: "/images/livros/lolita.jpg",
        time: "Hoje às 09:50",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491428/IanXavier_yuiimv.jpg',
        rate: "3",
    },
	{
        nome: "Livro: A Casa das Belas Adormecidas",
        autor: "Yasunari Kawabata",
		categoria: "Literatura Oriental",
        descricao: "Imbuída de um erotismo inusitado, esta obra, escrita em 1961, demonstra a maturidade estilística do autor, que se utiliza de sua virtuose descritiva para contar a história de Eguchi, um senhor de 67 anos que frequenta a casa das belas adormecidas, uma espécie de bordel onde moças encontram-se em sono profundo, sob efeito de narcóticos.",
        comment: "Essa é a minha casa, das belas, e adormecidas",
        name: "Laura Costa",
        pathName: "/images/livros/a-casa-das-belas-adormecidas.jpg",
        time: "Hoje às 15:35",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491450/Laura_Costa_xtga6c.jpg',
        rate: "1",
    },
    {
        nome: "Livro: Vidas Secas",
        autor: "Graciliano Ramos",
		categoria: "Clássicos da Literatura Brasileira",
        descricao: "Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos, que não têm nome, sendo chamados apenas de “filho mais velho” e “filho mais novo”. São também acompanhados pela cachorrinha da família, Baleia, cujo nome é irônico, pois a falta de comida a fez muito magra.",
        comment:"Um livro impactante que mostra a realidade sofrida brasileira, leitura necessária!",
        name:"Giovanna Pimenta",
        pathName: "/images/livros/vidas-secas.jpg",
        time: "Ontem às 16:30",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491259/GiovanaPimenta_tlu9yy.jpg',
        rate: "5",
    },
	{
        nome: "Livro: Pequeno Manual Antirracista",
        autor: "Djamila Ribeiro",
        categoria: "Clássicos da Literatura Brasileira",
        descricao: "Neste pequeno manual, a filósofa e ativista Djamila Ribeiro trata de temas como atualidade do racismo, negritude, branquitude, violência racial, cultura, desejos e afetos. Em onze capítulos curtos e contundentes, a autora apresenta caminhos de reflexão para aqueles que queiram aprofundar sua percepção sobre discriminações racistas estruturais e assumir a responsabilidade pela transformação do estado das coisas.",
        comment:"Livro de C O M U N I S T A, por isso nem leio",
        name: "Pedro Barros",
        pathName: "/images/livros/pequeno-manual-antirracista.jpg",
        time: "09/11/20 ás 23:59",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491241/Pedro_Barros_pcqtfy.jpg',
        rate: "4",
    },
    {
        nome: "Livro: A Vida Não é Útil",
        autor: "Ailton Krenak",
        categoria: "Biografia",
        descricao: "Se, em meio à terrível pandemia de covid-19, sentimos que perdemos o chão sob nossos pés, as palavras de Krenak despontam como os “paraquedas coloridos” descritos em seu livro Ideias para adiar o fim do mundo, que já vendeu mais de 50 mil cópias no Brasil e está sendo traduzido para o inglês, francês, espanhol, italiano e alemão. A vida não é útil reúne cinco textos adaptados de palestras, entrevistas e lives realizadas entre novembro de 2017 e junho de 2020.",
        comment:"A vida realmente não é útil, então vc deve tacar o louco e sair pelado correndo por ai",
        name: "Victor Halley",
        pathName: "/images/livros/a-vida-nao-e-util.jpg",
        time: "05/11/20 ás 21:54",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491230/VictorHalley_cz0nhz.jpg',
        rate: "2",
    },
    {
        nome: "Livro: Vigadores - Guerra dos Reinos",
        autor: "Aaron McGuiness",
        categoria: "Ficção",
        descricao: "Veja os maiores heróis de Washington em ação quando a Guerra dos Reinos chega à capital dos Estados Unidos. Quem precisa dos Vingadores quando se tem o Esquadrão Supremo da América? Mas quem são esses misteriosos novos heróis, e de onde saíram? Apenas o Agente Culson sabe. E mais: confira dois contos inéditos de Namor e do Capitão América! (Avengers 18 e Marvel Comics Presents 1)",
        comment: "Cadê meu dinheiro de direitos de imagem?",
        name: "Robert Downey Jr.",
        pathName: "/images/livros/vingadores-guerra-dos-reinos.jpg",
        time: "04/11/20 ás 23:48",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605492167/robert_uqluz9.jpg',
        rate: "0",
    },
    {
        nome: "Livro: A Ilha Perdida",
        autor: "Maria José Dupré",
        categoria: "Infantil",
        descricao: "Eduardo e Henrique resolvem explorar uma misteriosa ilha e descobrir se as histórias que ouvem sobre o lugar são reais. Acabam se envolvendo em uma grande aventura em que um velho sábio ensina o respeito e o amor à natureza. Um clássico da literatura juvenil brasileira, agora com novo formato e ilustrações coloridas. Com Suplemento de Atividades em cores.",
        comment: "Essa ilha ainda não consegue estar tão perdida quanto eu, taokei?",
        name:"Eduardo Bolsonaro",
        pathName: "/images/livros/a-ilha-perdida.jpg",
        time: "09/12/1957 ás 03:44",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605491820/bolsonaro_nib1mv.jpg',
        rate: "3",
    },
	{
        nome: "Livro: Os Últimos Melhores Dias",
        autor: "Gilberto Dimenstein",
        categoria: "Biografia",
        descricao: "Gilberto Dimenstein escolheu ser tema de sua última reportagem. É assim que descreve Os últimos melhores dias da minha vida: um relato autobiográfico sobre como enfrentou um grave câncer, narrando o processo a partir do olhar apurado dos mais de trinta anos de carreira no jornalismo. Anna Penido, no papel de ombudsman e parceira, esteve ao seu lado para produzir a obra a quatro mãos quando Gilberto já não tinha forças para fazer o trabalho sozinho.",
        name:"Neymar Jr.",
        comment:"Dias antes do Brasil x Alemanha",
        pathName: "/images/livros/os-ultimos-melhores-dias-da-minha-vida.jpg",
        time: "09/09/2009 ás 02:21",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605492190/ney_is7d0o.jpg',
        rate: "4",
    },
    {
        nome: "Livro: Hai Kai",
        autor: "Elza Tacko Doi",
        categoria: "Literatura Oriental",
        descricao: "Publicado em 1990, este livro constituiu a primeira exposição sistemática da poética do haikai em língua portuguesa, bem como a primeira publicação bilíngue de um conjunto significativo de poemas. Tornou-se assim, como o demonstram as inúmeras referências e as três seguidas edições, um clássico no estudo e na divulgação da poesia japonesa no Brasil. Passado quase um quarto de século, como ainda houvesse demanda de novas tiragens, surge esta nova edição, que mantém as partes centrais do livro e acrescenta, a título de atualização, dois ensaios diretamente decorrentes das pesquisas que conduziram à redação deste volume, dedicados à história do haikai no Brasil.",
        name: "João Vitor Prates",
        comment: "Essa estética, junto com o site ficaram sensacionais!",
        pathName: "/images/livros/hai-kai.jpg",
        time: "07/12/1920 ás 22:30",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605492971/Joao_Prates_ecx2a9.png',
        rate: "3",
    },
	{
		nome: "Livro: O Cortiço",
        autor: "Aluísio Azevedo",
        categoria: "Clássicos da Literatura Brasileira",
		descricao: "Ambição e exploração se misturam nessa envolvente e sombria história de uma habitação coletiva da capital do Segundo império. De um lado, a burguesia gananciosa e interesseira, disposta a tudo para enriquecer e subir na vida. De outro, personagens estereotipados, cheios de vícios e patologias, comparados a animais e movidos pelo instinto e pela fome. Todas as existências entrelaçadas e cruzadas em torno do cortiço de São Romão.",
        name: "Arthur Braga",
        comment: "Morar num cortiço não é lá tão extremo assim... Minha casa é bem pior",
        pathName: "/images/livros/o-cortico.jpg",
        time: "09/11/20 ás 22:25",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605492883/Arthur_Braga_sankac.png',
        rate: "2",
	},
	{
		nome: "Livro: O Diário de Anne Frank",
        autor: "Anne Frank",
        categoria: "Biografia",
		descricao: "O retrato da menina por trás do mito. A única edição autorizada pelo Anne Frank Fonds.O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto.Lançado em 1947, O diário de Anne Frank tornou-se um dos livros mais lidos do mundo. ",
        name: "Millena Figueiró",
        comment: "Definitivamente um dos livros mais impactantes que já li, me inspira sempre",
        pathName: "/images/livros/o-diario-de-anne-frank.jpg",
        time: "12/11/20 ás 15:27",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491212/MillenaFigueiro_kqjgqo.jpg',
        rate: "5",
	},
	{
		nome: "Livro: Shinsetsu: O poder da gentileza",
        autor: "Clóvis Barros de Filho",
        categoria: "Literatura Oriental",
        descricao: "O que dizer de um livro que interpreta a sabedoria e a cultura japonesa pensando na alma ocidental? Que mistura filósofos como Sócrates, Kant e Rousseau; poetas como Hesíodo, Rilke e Oscar Wilde; escritores como Eça de Queiroz, Montaigne e Clarice Lispector e personagens como a Tieta de Jorge Amado? Que parte do conhecimento do mundo e de suas próprias experiências para falar de assuntos como gentileza e moral; humildade e amor; empatia e fraternidade; limites e consideração?",
        name: "Lucas Milhorato",
        comment: "Não concordo, como diria o Itachi - 'Lhe falta ódio'",
        time:"Agora mesmo",
        pathName: "/images/livros/o-poder-da-gentileza.jpg",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605492770/Lucas_MIlhorato_cbd5bd.png',
        rate: "4",
	},
	{
		nome: "Livro: Respostas de um astrofísico",
        autor: "Neil deGrasse Tyson",
        categoria: "Clássicos da Literatura Mundial",
		descricao: "Além de uma carta escrita por Neil deGrasse Tyson especificamente para a edição brasileira de Respostas de um astrofísico, este livro inspirador reúne em um só volume perguntas feitas ao autor sobre assuntos importantíssimos e que despertam a curiosidade de todas as pessoas: a origem do universo, o fim do mundo, vida, morte, vida após a morte, astronomia, alienígenas, teorias da conspiração, terrorismo, racismo, religião, fé, filosofia, cultura, educação, política, ciências, pseudociências e muito mais.",
        name: "Daniel Almeida",
        comment: "Se você concentrar seu chakras na mão e alinha sua lua em júpiter vai ter bem mais impacto que estudar essas coisas...",
        time: "15/10/2001 ás 21:50",
        pathName: "/images/livros/respostas-de-um-astrofisico.jpg",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605491223/DanielAlmeida_g2lour.jpg',
        rate: "3",
	},
	{
		nome: "Livro: Poesia Completa",
        autor: "João Cabral de Melo Neto",
        categoria: "Clássicos da Literatura Brasileira",
		descricao: "Um dos maiores poetas de língua portuguesa do século XX, João Cabral de Melo Neto ficou conhecido pelo estilo conciso, rigor formal e apurada crítica social ― numa comparação feita por ele mesmo, o poeta seria como um escultor, que incessantemente corta a pedra até que a escultura surja de dentro dela.",
        name: "Chico Buarque",
        comment: "O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades",
        time:"17/10/2020 às 07:35",
        pathName: "/images/livros/poesia-completa.jpg",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605493130/chico_xon8py.jpg',
        rate: "3",
	},
	{
		nome: "Livro: Minha História",
        autor: "Michelle Obama",
        categoria: "Biografia",
        descricao: "Com uma vida repleta de realizações significativas, Michelle Obama se consolidou como uma das mulheres mais icônicas e cativantes de nosso tempo. Como primeira-dama dos Estados Unidos — a primeira afro-americana a ocupar essa posição —, ela ajudou a criar a mais acolhedora e inclusiva Casa Branca da história. Ao mesmo tempo, se posicionou como uma poderosa porta-voz das mulheres e meninas nos Estados Unidos e ao redor do mundo, mudando drasticamente a forma como as famílias levam suas vidas em busca de um modelo mais saudável e ativo, e se posicionando ao lado de seu marido durante os anos em que Obama presidiu os Estados Unidos.",
        name: "Donald Trump",
        comment: "COMMENT BLOCKED: 'VIOLATE SITE POLICY' ",
        time: "Há 1 hora",
        pathName: "/images/livros/minha-historia.jpg",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605491724/trump_tkrnah.jpg',
        rate: "3",
	},
	{
		nome: "Livro: Em louvor da sombra",
        autor: "Junichiro Tanizaki",
        categoria: "Literatura Oriental",
		descricao: "Neste breve ensaio sobre estética escrito em 1933, Junichiro Tanizaki analisa a arquitetura, o teatro, a comida, o vestuário, o papel e até o tom de pele para refletir sobre um elemento central da cultura japonesa: o contraste entre a penumbra e a claridade. Se os ocidentais têm por hábito polir a prata para que ela tenha um aspecto sempre brilhante e renovado, a tradição nipônica valoriza justamente o contrário. A gordura das mãos e a ferrugem acumuladas sobre os objetos mostram a passagem do tempo e representam, portanto, as histórias ali contidas.",
        name: "Julius Rock",
        comment:"Como assim esse livro custa R$5,47 centavos? Achei que isso aqui era um sebo",
        time:"01/01/2020 às 19:25",
        pathName: "/images/livros/em-louvor-da-sombra.jpg",
        icon: 'https://res.cloudinary.com/amoras/image/upload/v1605493263/terry-crews_vig9pt.jpg',
        rate: "2",
	},
	{
		nome: "Livro: 1984",
        autor: "George Orwell",
        categoria: "Ficção",
		descricao: "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.",
        name: "Olavo de carvalho",
        comment: "Essa geração Paulo Freire fracassada está cansada de ler essa bosta sem precedentes. Se quer ser um fracassado, leia esse livro",
        time:"Em 25/10/2019",
        pathName: "/images/livros/1984.jpg",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605491952/olavo_ikkeil.jpg',
        rate: "5",
	},
	{
		nome: "Livro: Bilionários por acaso",
        autor: "Bem Mezrich",
        categoria: "Biografia",
		descricao: "Ben Mezrich revela os detalhes picantes dos bastidores dessa verdadeira saga, em uma narrativa movida a altas doses de paranoia, sexo, bebida, talento, alguma droga e muita ambição, entre investidores poderosos, mulheres maravilhosas, a busca do estrelato social e muitas, mas muitas intrigas. Criado para unir as pessoas, a história do Facebook é de desavenças e separação.",
        name: "Eduardo Bolsonaro",
        comment: "É só o que eu queria... acordar sem querer com alguns milhões",
        time: "25/10/2018",
        pathName: "/images/livros/bilionarios-por-acaso.jpg",
        icon: 'https://res.cloudinary.com/dage6nltb/image/upload/v1605491899/eduardo_rfqurb.jpg',
        rate: "4",
	},
];

function Livros(){
    const history = useHistory();
    
    function handleClick(livro){
        history.push({
            position: window.scrollTo(0, 0),
            pathname: '/resumo',
            state: { livro },
        });
    }

    return (
        <>
            {livros.map((listItem) => {
                return(
                    <div className="livro">
                        <div className="hover03">
                            <img className="img-format" src={listItem.pathName}/>
                        </div>

                        <div className="titulo-livro">
                            {listItem.nome}
                        </div>

                        <div className="autor-livro">
                            {listItem.autor}
                        </div>
                        <div>
                            <h6 className = "aval">Avaliação da crítica</h6>
                            <DefaultRate rate = {listItem.rate}/>
                        </div>
                        <div className="ver-livro">
                            <Button  className="botao format" variant="light" onClick = {
                            () => handleClick(listItem)}>
                                Ver Livro
                            </Button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Livros;
