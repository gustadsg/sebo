import React, {useState, useEffect} from "react";
import Footer from "../Components/Footer/Footer";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Comments from "../Components/Comments/Comments"
import CustomizedRatings from '../Components/Rating/Rating'
import "./Resumo.css";

require("typeface-quicksand");

function Resumo( props ){
    const [data, setData] = useState('');
    useEffect(() => {
        setData(props.location.state.livro)
      }, []);

    return (
        <>
            <div className="resumo">
                    <div className="imagem-livro">
                        <div class="hover01">
                            <img className="img-format" src={data.pathName}/>
                        </div>
                    </div>
                    
                    <div className="dados">
                        <div className="titulo-livro">
                            {data.nome}
                        </div>

                        <div className="autor-livro">
                            {data.autor}
                        </div>

                        <div className="descricao-livro">
                            {data.descricao}
                        </div>
                        <div>
                            <h5 className = "Rating">Já leu este livro? Dê uma avaliação!</h5>
                            <CustomizedRatings />
                        </div>

                        <div className = "Comments">
                            <Comments 
                            comment={data.comment} 
                            name={data.name} 
                            time={data.time} 
                            icon={data.icon}/>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}

export default Resumo;