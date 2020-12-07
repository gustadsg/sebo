import React from "react";
import { useHistory } from "react-router-dom";
import { fade, IconButton  } from "@material-ui/core";
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';
import "./Carrossel.css";

require("typeface-quicksand");


function Carrossel(){
    const history = useHistory();
    function cadastrese(){
      history.push("Cadastro")
    }
    function livros(){
      history.push("Nossoslivros")
    }
    return (
            <Carousel className="carousel"  autoplay={false} wrapAround={true} transactionMode={fade} slidesToScroll='auto' disableEdgeSwiping='fatruelse'  cellAlign="center" renderCenterLeftControls={({ previousSlide }) => (
                <IconContext.Provider value={{color: "#ffff", size: "5vw"}}>
                    <IconButton onClick={ previousSlide}>
                        <IoIosArrowBack/>
                    </IconButton>
                </IconContext.Provider>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                <IconContext.Provider value={{color: "#ffff", size: "5vw"}}>
                    <IconButton onClick={ nextSlide }>
                        <IoIosArrowForward/>
                    </IconButton>
                </IconContext.Provider>
                )}
                defaultControlsConfig={{
                pagingDotsStyle: {
                    fill: 'white'
                }
                }}>
                
                <div className="content">
                    <img alt="imagem" className="capa-imagem" src="/images/slide-1.png"/>
                    <h1 className="texto-principal globalTitle">Bem Vindo ao sebo</h1>

                    <img alt="imagem" className="texto-imagem" src="/images/logo-branca.png"/>

                    <Button  className="button left" variant="dark" onClick = {cadastrese}>
                        Cadastre-se já!
                    </Button>
                    
                    <Button href="#doar" className="button right" variant="light" >
                        Doe um Exemplar
                    </Button>
                </div>

                <div className="content">
                    <img alt="imagem" className="capa-imagem" src="/images/slide-2.png"/>
                    <h1 className="texto globalTitle">Conheça nossa história:</h1>
                    <Button href="#historia"  className="button center"  variant="light" >
                        Nossa História
                    </Button>
                </div>
                
                <div className="content">
                    <img alt="imagem" className="capa-imagem" src="/images/slide-3.jpg"/>
                    <h1 className="texto globalTitle">Conheça nosso acervo:</h1>
                    <Button  className="button center" variant="light" onClick = {livros}>
                        Nossos livros
                    </Button>
                </div>
        </Carousel>
    );
}

export default Carrossel;