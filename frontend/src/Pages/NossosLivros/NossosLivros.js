import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import GalleryLivros from "../Components/GalleryLivros/GalleryLivros";
import Livros from "../Components/Livros/Livros";
import api from "../../services/backend";
import "./NossosLivros.css";

require("typeface-quicksand");

function NossosLivros() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("")
  const history = useHistory()

  useEffect(() => {
    api.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  function verLivro(livro) {
    history.push({
      position: window.scrollTo(0, 0),
      pathname: "/resumo",
      state: { livro },
    });
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />


      <div className="NossosLivros">
        <div className="section-1">
          <p className="title">Nossos Livros:</p>
          <div className="inputs">
            <div className="input-right">
              <input
                className="form-control py-2 rounded-pill mr-1 pr-5"
                type="search"
                placeholder="Pesquisar..."
                value={search}
                onChange={handleChange}
              />
              <span className="input-group-append">
                <button
                  className="btn rounded-pill border-0 ml-n5"
                  type="button"
                >
                  <img
                    width="28px"
                    height="28px"
                    src="/images/button-search.png"
                  />
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="resultado-pesquisa">
        <div className="container">
          {books.map((listItem) => {
            if(listItem.title.toLowerCase().includes(search.toLocaleLowerCase()) && search!="")
              return (
                <div className="itens-carousel">
                  <div class="hover01">
                    <img
                      className="livro-carousel"
                      src={listItem.image_path}
                      onClick={() => verLivro(listItem)}
                    />
                  </div>
                  <p className="livro-info">
                    {listItem.title}
                    <br /> Autor: {listItem.author}
                  </p>
                </div>
              );
          })}
        </div>
      </div>

        <div className="section-2">
          <p className="subtitle">Em Promoção:</p>
          <GalleryLivros />
        </div>

        <div className="section-3">
          <div className="livro-container">
            <Livros />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NossosLivros;
