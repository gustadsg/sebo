import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../../services/backend";
import { UserContext } from "../../context/UserContext";
import "./ListaDesejos.css";

export default function ListaDesejos(props) {
  const [wishes, setWishes] = useState([]);
  const { loadSession, user } = useContext(UserContext);
  const history = useHistory();

  const config = {
    headers: {
      authorization: `BEARER ${user.accessToken}`,
    },
  };
  useEffect(() => {
    const usuario = loadSession();

    api.get(`/wishlist/user/${usuario.userId}`, config).then((res) => {
      setWishes(res.data);
    });
  }, []);

  function verLivro(livro) {
    history.push({
      position: window.scrollTo(0, 0),
      pathname: "/resumo",
      state: { livro },
    });
  }

  function deleteWish(wish) {
    api.delete(`/wish/${wish.wish_id}`, config).then((res) => {
      api.get(`/wishlist/user/${user.userId}`, config).then((res) => {
        setWishes(res.data);
      });
    });
  }

  return (
    <div className="cards-container">
      {wishes.map((wish) => {
        return (
          <Card className="card-desejo">
            <Card.Img
              className="card-image"
              variant="top"
              src={wish.image_path}
              alt={`capa do livro ${wish.title}`}
            />
            <Card.Body>
              <Card.Title>{wish.title}</Card.Title>
              <div className="buttons-area">
                <Button variant="primary" onClick={() => verLivro(wish)}>
                  {" "}
                  Ver livro
                </Button>
                <Button variant="danger" onClick={() => deleteWish(wish)}>
                  {" "}
                  excluir desejo
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
