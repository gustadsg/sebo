import React, { useEffect, useState } from "react";
import api from "../../../services/backend";
import "./GalleryLivros.css";
import { useHistory } from "react-router-dom";

function GalleryLivros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const history = useHistory();

  function verLivro(livro) {
    history.push({
      position: window.scrollTo(0, 0),
      pathname: "/resumo",
      state: { livro },
    });
  }

  return (
    <>
      <div className="container">
        {books.map((listItem) => {
          if (listItem.sale === 1)
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
    </>
  );
}

export default GalleryLivros;
