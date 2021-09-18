import { Containernavegador } from './styled'

export default function navegar() {

    return (
       <Containernavegador>
            <div className="dev"> <img src="/assets/images/Group 28.svg" alt="" />  </div>
            <div style={{ border: ' #262626 solid', height:'40px', backgroundColor: '#262626', marginTop: '35px'}} > </div>
            <div style={{color: 'white', margin: '15px 0px 5px 70px'}}>Gerenciamento</div>  
            <div className="sub">
                <div className="barra" style={{marginTop: '5px'}}> <img src="/assets/images/Rectangle 14 (1).svg" alt="" /> </div>
                <div style={{margin: '0px 0px 0px 70px', fontWeight: '500', fontSize: '18px', padding:''}}>Alunos</div>    
            </div>
       </Containernavegador>
    )
}