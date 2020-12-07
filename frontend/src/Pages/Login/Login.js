import React, {useState, useContext}  from 'react' 
import {Form, FormGroup} from 'react-bootstrap' 
import { useHistory } from 'react-router-dom' 
import Button from 'react-bootstrap/Button' 
import backend from '../../services/backend'
import "./Login.css"; 
require("typeface-quicksand") 
 
function Login(){ 
    const [email,setEmail] = useState(); 
    const [password,setPassword] = useState(); 
    const history = useHistory();
    // const context = useContext() 
     
    async function login(){ 
        try {
            const response = await backend.post('login',{
                email, password
            }).then(res=>console.log(res.data));
        } catch (err) {
            alert('email ou senha incorreto(s)');
        }
    }
    function cadastre(){
        history.push("Cadastro")
    }
    return( 
        <div className = "Login">
            <div className ="base"> 
                <img 
                className = "sakura" 
                src="/images/SakuraLoginFinal.png "/> 
                
                <div className="container"> 
                    <div    className = "within">
                    <img src = "images/HaiKaiVetorized.png" 
                    className = "HaiKai" /> 
                        <div id = "form">

                            <Form className = "formtext"> 
                                <Form.Group className = "forPhone" controlId="formBasicEmail"> 
                                    <Form.Label>Enter your email</Form.Label> 
                                    <Form.Control type="email" placeholder="name@example.com"
                                    onChange = {(e) => setEmail(e.target.value)} /> 
                                </Form.Group> 
            
                                <Form.Group className = "forPhone" controlId="formBasicPassword"> 
                                    <Form.Label>Password</Form.Label> 
                                    <Form.Control type="password" placeholder="Password"
                                      onChange = {(e) => setPassword(e.target.value) } /> 
                                </Form.Group> 
            
                                <FormGroup> 
                                    <Button  className="button" variant="danger" onClick={login}>Login</Button>
                                </FormGroup>                                
                            </Form> 
                            <div className="perg">
                                 <Form.Label>Não possui Login?</Form.Label>
                                <Button variant="dark" className="botao2"onClick={cadastre}>Cadastre-se</Button>
                            </div>
                            
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    ) 
} 
 
export default Login;