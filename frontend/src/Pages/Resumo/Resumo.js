import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Comments from "../Components/Comments/Comments";
import CustomizedRatings from "../Components/Rating/Rating";
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

  const history = useHistory();
  return (
    <>
      <div className="resumo">
        <button
          style={{ display: showAdmin }}
          onClick={() =>
            history.push({
              pathname: `/editbook/${data.book_id}`,
              state: { data },
            })
          }
        >
          Editar Livro
        </button>
        <div className="imagem-livro">
          <div class="hover01">
            <img className="img-format" src={data.image_path} />
          </div>
        </div>

        <div className="dados">
          <div className="titulo-livro">{data.title}</div>

          <div className="autor-livro">{data.author}</div>

          <div className="descricao-livro">{data.description}</div>
          {/* <div>
                            <h5 className = "Rating">Já leu este livro? Dê uma avaliação!</h5>
                            <CustomizedRatings />
                        </div>

                        <div className = "Comments">
                            <Comments 
                            comment={data.comment} 
                            name={data.name} 
                            time={data.time} 
                            icon={data.icon}/>
                        </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resumo;
