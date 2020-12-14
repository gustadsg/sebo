import React, { useEffect, useState } from "react";
import "./Livros.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import CustomizedRatings from "../Rating/Rating";
import DefaultRate from "../../DefaultRating";
import api from "../../../services/backend";

function Livros() {
  const history = useHistory();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  function handleClick(livro) {
    history.push({
      position: window.scrollTo(0, 0),
      pathname: "/resumo",
      state: { livro },
    });
  }

  return (
    <>
      {books.map((listItem) => {
        return (
          <div className="livro">
            <div className="hover03">
              <img className="img-format" src={listItem.image_path} />
            </div>

            <div className="titulo-livro">{listItem.title}</div>

            <div className="autor-livro">{listItem.author}</div>
            <div className="ver-livro">
              <Button
                className="botao format"
                variant="light"
                onClick={() => handleClick(listItem)}
              >
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
