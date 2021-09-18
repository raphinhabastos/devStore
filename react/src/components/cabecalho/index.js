import { Containercabecalho } from './styled'

export default function Cabecalho() {

    return (
       <Containercabecalho> 
            <div className="cabe-usuario"> 
                <div className="cabe-foto"> <img src="/assets/images/Ellipse.png" alt="" /> 
                <div className="cabe-notifi"> <p>4</p> </div>
            </div>
            <div className="cabe-nome"> Olá, Bruno de Oliveira </div>
            </div>
            <div className="cabe-botoes"> 
                <div className="cabe-atualizar"> <img src="/assets/images/Vector (3).svg" alt="" /> </div>
                <div className="cabe-sair"> <img src="/assets/images/signout_106525.svg" alt="" /> </div>
            </div>
       </Containercabecalho>
    )
}