import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Comments from "../Components/Comments/Comments"
import CustomizedRatings from '../Components/Rating/Rating'
import "./Resumo.css";

require("typeface-quicksand");

function Resumo( props ){
    const [data, setData] = useState('');
    useEffect(() => {
        setData(props.location.state.livro)
      }, []);

      const history = useHistory()
    return (
        <>
            <div className="resumo">
                    <button
                    onClick={()=>history.push(`/edit/${data.book_id}`)}
                    >Editar Livro</button>
                    <div className="imagem-livro">
                        <div class="hover01">
                            <img className="img-format" src={data.image_path}/>
                        </div>
                    </div>
                    
                    <div className="dados">
                        <div className="titulo-livro">
                            {data.title}
                        </div>

                        <div className="autor-livro">
                            {data.author}
                        </div>

                        <div className="descricao-livro">
                            {data.description}
                        </div>
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
            <Footer/>
        </>
    );
}

export default Resumo;