
import { Containerconteudo, Conteudo } from './styled'
import Cabecalho from '../../components/cabecacalho/index'
import Menu from '../../components/menu/index'


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../services/api';
import { useEffect, useState } from 'react';
const api = new Api();



export default function Index() { 

const [produto, SetProdutos] = useState([]);
const [nome, SetNome] = useState('');
const [categoria, SetCategoria] = useState('');
const [precoDe, SetPrecoDe] = useState('');
const [precoPor, SetPrecoPor] = useState('');
const [avaliacao, SetAvaliacao] = useState('');
const [descricao, SetDescricao] = useState('');
const [estoque, SetEstoque] = useState(0);
const [imagem, SetImagem] = useState('');
const [idAlterando, SetIdAlterando] = useState ('');


useEffect (() => {
    listar();

}, [])

async function listar() {

    let r = await api.listar();
    SetProdutos(r);

}

async function inserir() {

    if( nome == ''|| categoria == '' || precoDe == '' || precoPor == ''|| avaliacao == ''|| descricao == '' || estoque == '' || imagem == ''){
        toast.error(' 🤷  Todos Campos São Obrigatórios');
    } else {  
        if( avaliacao > 0)
        {
            if(precoDe > 0) {
                if (precoPor > 0) {
                    if(estoque > 0) {
                        if (idAlterando == 0) {
                            let r = await api.inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem)
                            toast.dark(' 🙌 Produto Cadastrado, Com Sucesso!');
                    } else {
                        let r = await api.alterar(nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem)
                        toast.dark('🙏 Produto Alterado, Com Sucesso!');
                    }
                    } else toast.error('🤦‍♂️Estoque Inválido')
                } else toast.error('🤦‍♂️preço POR está incorreto')
            } else toast.error('🤦‍♂️ Preço De, está incorreto')
        } 
       
       
       
}
   


    SetNome('');
    SetCategoria('');
    SetPrecoDe('');
    SetPrecoPor('');
    SetAvaliacao('');
    SetDescricao('');
    SetEstoque('');
    SetImagem('');
    SetIdAlterando('');

    listar();

}


async function editar(item) {
    SetNome(item.nm_produto);
    SetCategoria(item.ds_categoria);
    SetPrecoDe(item.vl_preco_de);
    SetPrecoPor(item.vl_preco_por);
    SetAvaliacao(item.vl_avaliacao);
    SetDescricao(item.ds_produto);
    SetEstoque(item.qtd_estoque);
    SetImagem(item.img_produto);
    SetIdAlterando(item.id_produto);
}

async function remover(id) {
    confirmAlert({
        title: '😱😱Remoção de Produto',
        message: '😡 Tem Certeza que Deseja remover o Produto ?',
        buttons: [
          {
            label: ' 👍 Sim',
            onClick: async () => {  let r = await api.deletar(id);
                if(r.erro)
                toast.error(r.erro);
                else {
                toast.dark( '😞😞 Produto removido, Com Sucesso!');
                listar();
             }
            }
          
    
    
          },
          {
            label: '👎 Não',
            onClick: () => toast.error('😍😍😍😍 Produto não Removido !')
          }
        ]
      })


    listar();
}

return (
<Containerconteudo>
   <ToastContainer /> 
    <Menu />
  <Conteudo>
      <Cabecalho />
    <div className="box-cadastrar"> 
            <div className="mo"></div>
            <div style={{fontFamily: "", fontStyle: "normal", fontWeight: "bold", color: "#3C3939", fontSize: '32px', marginLeft: "50px"}}>    {idAlterando == 0 ? 'Novo Produto' : 'Alterando Produto' + idAlterando }  </div>
        <div className="box-input">
            <div className="cada-inputs" > Nome: <input type="text"  value={nome} onChange={e => SetNome(e.target.value)} /> </div>
            <div className="cada-inputs" style={{marginLeft: '37px'}}> Preço De: <input type="text" value={precoDe} onChange={e => SetPrecoDe(e.target.value)} /> </div>
        </div>

        <div className="box-input2">
            <div className="cada-inputs"> Categoria:  <input type="text" value={categoria} onChange={e => SetCategoria(e.target.value)} /> </div>
            <div className="cada-inputs"> Preço POR:  <input type="text" value={precoPor} onChange={e => SetPrecoPor(e.target.value)} />  </div>    
        </div>

        <div className="box-input3">
            <div className="cada-inputs"> Avaliação:  <input type="text" value={avaliacao} onChange={e => SetAvaliacao(e.target.value)} /> </div>
            <div className="cada-inputs" style={{marginLeft: '42px'}}> Estoque:  <input type="text" value={estoque} onChange={e => SetEstoque(e.target.value)} />  </div>    
        </div>
        <div className="cada-inputs1" style={{margin: '20px 34px'}}> Link da Imagem:  <input type="text" value={imagem} onChange={e => SetImagem(e.target.value)} />  </div>   

        <div className="box-input2" style={{margin: '0px 55px'}}>
            <div className="cada-inputs"> Descrição:  <textarea type="text" value={descricao} onChange={e => SetDescricao(e.target.value)} /> </div>
            <button style={{marginTop: '8em'}} onClick={inserir} >  {idAlterando == 0 ? 'Cadastrar' : 'Alterar'}</button>   
        </div> 
    </div>

    <div className="matriculados">
              <div className="row-bar"> </div>
              <div className="ma-alu"> Produtos Cadastrados </div> 

          <div className="tabela">
              <thead>
                  <th> </th>
                  <th> ID </th>
                  <th> Produto </th>
                  <th> Categoria</th>
                  <th> Preço </th>
                  <th> Estoque </th>
                  <th className="a"> </th>
                  <th className="a"> </th>
              </thead>
              <tbody>
              {produto.map((item, i) =>
                  <tr>
                      <td> </td>
                      <td>{item.id_produto} </td>
                      <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0, 25) + '...' : item.nm_produto}</td>
                      <td> {item.ds_categoria} </td>
                      <td> {item.vl_preco_por}</td>
                      <td>{item.qtd_estoque}</td>
                      <td><button style={{cursor:'pointer'}} onClick={() => editar(item)}> <img src="/assets/images/edit.svg" alt="" /></button></td>
                      <td class="b"><button style={{cursor:'pointer'}} onClick={() => remover(item.id_produto)}><img src="/assets/images/vector (5).svg" alt="" /></button></td>
                  </tr>
              )}
              </tbody>
             </div>
            </div>
 
  </Conteudo>
</ Containerconteudo>
)
}