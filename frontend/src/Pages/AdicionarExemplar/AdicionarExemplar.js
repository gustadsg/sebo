import React from 'react'
import "./adicionar.css"
import { useHistory } from 'react-router-dom' 
import {Form, FormGroup, Modal} from 'react-bootstrap' 
import Button from 'react-bootstrap/Button' 
import { useState } from 'react'
import Upload from "../Components/UploadPhoto/Upload"
import { Comment } from "../Components/Comments/Comments.js"
import SimpleRating  from "../Components/Rating/Rating"
import CustomizedRatings from '../Components/Rating/Rating'
require('typeface-quicksand')


function AdicionarExemplar(){
    const history = useHistory(); 
    const [nome,setNome] = useState();
    function Home(){ 
        alert("Exemplar cadastrado com sucesso!") 
        history.push("Home") 
    } 
    
  
return(
    <div className="AdicionarEx">
        <div className ="background">
            <div className = "background2">
                <div className = "container">
                    <div className = "base"></div>
                    <h1 className = "textbook">
                        Adicione um novo exemplar!
                        <br/>
                    </h1>

                    <div class="card border">
                        <div class="card-body">
                            <h5 class="card-title">Cadastro de Livro</h5>

                            <label class="card-text">
                            </label>
                            <table class="table table-hover table-bordered table-responsive" id="tblLivro">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Autor</th>
                                        <th>Resumo</th>
                                        <th>Foto do livro</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" />
                                        </td>
                                        <td>
                                            <input type="text" />
                                        </td>
                                        <td>
                                            <textarea rows="11" />
                                        </td>
                                        <td>
                                            <div>                                            
                                                <Upload />
                                            </div> 
                                        </td>
                                        <td>
                                        <Button variant="dark" onClick = {Home}>Adicionar exemplar!</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

)



}

export default AdicionarExemplar;