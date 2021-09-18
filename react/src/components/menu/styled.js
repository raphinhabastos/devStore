import styled from 'styled-components'

const Containernavegador = styled.div`
display: flex;
flex-direction: column;
background-color: #2B3031;
width: 30%;
border-right: 40px;
height: 100vh;
position: sticky;
top: 0px;
.dev {
    display: flex;
    justify-content: center;
    margin-top: 22px;
}
.sub {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    height: 3.46em;
}
`

export { Containernavegador }