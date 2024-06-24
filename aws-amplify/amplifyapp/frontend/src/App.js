import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Login from './Login';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Objeto Produto
  const produto = {
    id: 0,
    nome: '',
    descricao: '',
    vacinado: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjproduto] = useState(produto);

  //UseEffect
  useEffect(() =>{
    axios.get(`${process.env.REACT_APP_API_URL}/produtos/listar `)
      .then(retorno => setProdutos(retorno.data));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) =>{
    setObjproduto({...objProduto, [e.target.name]:e.target.value});
  }

  // Cadastrar Produto
  const cadastrar = () =>{
    axios.post(`${process.env.REACT_APP_API_URL}/produtos/cadastrar`, objProduto)
      .then(retorno => {
        if(retorno.data.mensagem !== undefined){
          alert(retorno.data.mensagem);
        } else{
          setProdutos([...produtos, retorno.data]);
          alert('Produto Cadastrado com sucesso!');
          limparFormulario();
        }
      })
  }

  // Alterar Produto
  const atualizar = () =>{
    axios.put(`${process.env.REACT_APP_API_URL}/produtos/atualizar`, objProduto)
      .then(retorno => {
        if(retorno.data.mensagem !== undefined){
          alert(retorno.data.mensagem);
        } else{
          alert('Produto Alterado com sucesso!');
          let vetorTemp = [...produtos];
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objProduto.id;
          });
          vetorTemp[indice] = objProduto;
          setProdutos(vetorTemp);
          limparFormulario();
        }
      })
  }

  // Remover Produto
  const remover = () =>{
    axios.delete(`${process.env.REACT_APP_API_URL}/produtos/deletar/${objProduto.id}`)
      .then(retorno => {
        alert(retorno.data.mensagem);
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id;
        });
        vetorTemp.splice(indice, 1);
        setProdutos(vetorTemp);
        limparFormulario();
      })
  }

  //Limpar Formulário
  const limparFormulario = () =>{
    setObjproduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionnar Produto
  const selecionarProduto = (indice) =>{
    setObjproduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Formulario
            botao={btnCadastrar}
            eventoTeclado={aoDigitar}
            cadastrar={cadastrar}
            obj={objProduto}
            cancelar={limparFormulario}
            remover={remover}
            atualizar={atualizar}
          />
          <Tabela vetor={produtos} selecionar={selecionarProduto} />
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
