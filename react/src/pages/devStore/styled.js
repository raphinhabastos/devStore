import styled from 'styled-components'

const Conteudo = styled.div`
display: flex;
flex-direction: column;
background-color: #F5F5F5;
align-self: center;
width: 100vw;
`

const Containerconteudo = styled.div`
body {
    margin: 0px;
}
* {
    box-sizing: border-box;
    }
display: flex;
flex-direction: row;
.box-input, .cada-inputs, .box-input2,.box-input3 {
display: flex;
flex-direction: row;
}
.box-cadastrar {
    width: 98%;
    background-color: white;
    margin-left: 1em;
    margin-top: 20px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
}
.mo {
    position: relative;
    top: 35px;
    left: 33px;
    border: #6CC3DF solid;
    border-radius: 20px;
    width: .1em;
    height: 1.5em;
    background: #6CC3DF;
}
.box-input {
    margin: 40px 11px 0px 75.8px;
}
.box-input2 {
margin-left: 52px;
margin-top: 20px;
}
.box-input3 {
    margin-left: 55px;
    margin-top: 20px;
}
.cada-inputs{
    margin-left: 25px;
    color: #615858;
}
.cada-inputs > div {
    margin-left: 60px;
}
input {
    width: 200px;
    height: 30px;
    margin-left: 9px;
    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: .5em;
    box-sizing: border-box;
}
.cada-inputs1 input {
    width: 510px;
}
textarea {
    margin-Left: 8px;
    width: 510px;
    height: 150px;
}
button {
    margin-left: 20px;
    border: none;
    background-color: #6CC3DF;
;
    border-radius: 30px;
    width: 10%;
    padding: 1px;
    color: white;
    height: 40px;
}
.matriculados {
    background-color: white;
    width: 98%;
    margin-top: 3em;
    margin-left: 1em;
}
.matriculados > div {
    margin: 25px;
}
td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 31px;
    height: 31px;
}
.box-image {
    margin-right: 2em;
}
thead {
    background-color: #6CC3DF;
    height: 130%;
}
th {
    height: 61.93px;
    text-align: left;
    padding: .1em 2.2em;
    color: #ffff;
    font-weight: 800;
} 
.tabela {
   margin-top: 2em;
}
td {
    text-align: center;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}
.button {
    cursor: pointer;
}
.linha {
    background-color: #fff;
}
`
export { Containerconteudo, Conteudo }