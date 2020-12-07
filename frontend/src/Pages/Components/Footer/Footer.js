import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";


function Footer(){
    
    return (
        <>
            <div className="footer">
                
                <div className="Text1">
                    <h4 className = "TextG"><b>LOCALIZAÇÃO: </b></h4>
                    <h4 className = "TextG1">
                    Belo Horizonte, MG<br/>
                    Av. Augusto de Lima, 233 <br/>
                    Cep: 30190-000 <br/>
                    <a className = "LinkF" href="https://www.google.com.br/maps/dir//Av.+Augusto+de+Lima,+233+-+Centro,+Belo+Horizonte+-+MG/@-19.9247176,-43.9400976,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xa699e418cc7fcf:0x91fd5a65da09c2ad!2m2!1d-43.9379089!2d-19.9247176!3e0"> 
                    Saiba como chegar</a>
                    </h4>
                </div>

                <div className="Text3">
                    <h4 className= "TextG"><b> HORÁRIOS DE ATENDIMENTO: </b> <br/>
                        Das 10h às 18h, de <br/>
                        segunda à sexta-feira <br/>
                        Sábado das 09h às 17h <br/>
                        (exceto feriados)* <br/>
                        (31) 3104-7111
                    </h4>
                </div>
                <div className ="HaiKaiSakura">
                    <img className ="sakuraFooter" src="../images/logo-footer.png" />
                </div>
            </div>
        </>
    );
}

export default Footer;