import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Button } from "react-bootstrap";
import api from "../../services/backend";
import { UserContext } from "../../context/UserContext";
import "./Resumo.css";

require("typeface-quicksand");

function Resumo(props) {
  const { loadSession, user, setSession } = useContext(UserContext);
  const [showAdmin, setShowAdmin] = useState("none");
  const [data, setData] = useState("");

  useEffect(() => {
    setData(props.location.state.livro);
    const user = loadSession();
    if (user.accessToken) setSession(user);
    if (user.userAdmin == 1) setShowAdmin("block");
  }, []);

  const config = {
    headers: {
      authorization: `BEARER ${user.accessToken}`,
    },
  };

  function addWishlist(){
    if(!user.accessToken) return alert('Faça login para adicionar à lista de desejos')
    api.post(`/wishlist/user/${user.userId}`, {book_id: data.book_id}, config).then((res)=>alert('Livro adicionado à lista de desejos')).catch(()=>alert(`não foi possível adicionar o livro "${data.title}" à lista de desejos`))
  }

  const history = useHistory();
  return (
    <>
      <div className="resumo">
        <div className="imagem-livro">
          <div class="hover01">
            <img className="img-format" src={data.image_path} />
          </div>
        </div>

        <div className="dados">
          <div className="titulo-livro">{data.title}</div>

          <div className="autor-livro">{data.author}</div>

          <div className="descricao-livro">{data.description}</div>
          <div className="buttons-area2">
            <Button
              style={{ display: showAdmin }}
              onClick={() =>
                history.push({
                  pathname: `/editbook/${data.book_id}`,
                  state: { data },
                })
              }
            >
              Editar Livro
            </Button>
            <Button variant="outline-danger" onClick={addWishlist}>
              Adicionar à lista de desejos &hearts;
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resumo;
