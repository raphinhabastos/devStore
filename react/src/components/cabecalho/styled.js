import styled from 'styled-components'

const Containercabecalho = styled.div`
display: flex;
justify-content: space-between;
background-color: white;
font-family: Roboto;
font-size: 12px;
position: sticky;
top: 0px;
.cabe-usuario {
    padding: 15px  17px 0px 18px;
    display: flex; 
    flex-direction: row;
    align-items: center;
}
.cabe-nome {
    margin-bottom: 0.84em;
    color: #615858;
    margin-left: 14px;
    font-Style: normal;
     font-Size: 20px;
     font-weight: 500;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.cabe-notifi {
    position: relative;
    bottom: 60px;
    left: 43px;
    border: 2px solid;
    border-color: #FFFFFF;
    border-radius: 20px;
    width: 15px;
    height: 15px;
    background-color: #119FDC;
    
}
p {
    position: absolute;
    top: -13px;
    left: 2px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}
.cabe-botoes {
    padding: 25px  17px 10px 0px;
    display: flex; 
    flex-direction: row;
}
.cabe-atualizar, .cabe-sair {
    border: solid #119FDC;
    background-color: #119FDC;
    border-radius: 90px;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    align-items: center;
}
.cabe-atualizar > img, .cabe-sair img {
    margin: 8px 5px;
}
`


export { Containercabecalho }