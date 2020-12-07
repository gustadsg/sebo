import React from "react";
import Footer from "../Components/Footer/Footer";
import GalleryLivros from "../Components/GalleryLivros/GalleryLivros";
import Livros from "../Components/Livros/Livros";
import "./NossosLivros.css";

require("typeface-quicksand");

function NossosLivros(){
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            
            <div className="NossosLivros">
                <div className="section-1">
                    <p className="title">Nossos Livros:</p>
                    <div className="inputs">
                        <div className="input-left">
                            <div className="selectInput">
                                <select className="selectBox">
                                    <option value="" disabled selected>Ordenar por...</option>
                                    <option>Ficção</option>
                                    <option>Biografia</option>
                                    <option>Infantil</option>
                                    <option>Clássicos da Literatura Brasileira</option>
                                    <option>Clássicos da Literatura Mundial</option>
                                    <option>Literatura Oriental</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-right">
                            <input className="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Pesquisar..."/>
                            <span className="input-group-append">
                                <button className="btn rounded-pill border-0 ml-n5" type="button">
                                    <img width="28px" height="28px" src="/images/button-search.png"/>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section-2">
                    <p className="subtitle">Em Promoção:</p>
                    <GalleryLivros/>
                </div>
                
                <div className="section-3">
                    <div className="livro-container">
                        <Livros/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default NossosLivros;