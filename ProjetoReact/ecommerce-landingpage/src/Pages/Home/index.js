import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled'
import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
  })
  .catch(err => {
    setErro(true);
  });
  }

  return (
      <>
    <S.MenuContainer>
        <S.HeaderPrincipal>What the clothes?</S.HeaderPrincipal>
    </S.MenuContainer> 
    <S.List>
        <S.ListMenu>Menu</S.ListMenu>
        <S.ListMenu>Nossa Marca</S.ListMenu>
        <S.ListMenu>Roupas Casuais</S.ListMenu>
        <S.ListMenu>Calçados</S.ListMenu>
        <S.ListMenu>Roupas Íntimas</S.ListMenu>
        <S.ListMenu>Acessórios</S.ListMenu>
    </S.List>
    <S.ProductContainer>
        <p><S.Imagens src="https://svgshare.com/i/ZK2.svg" class="logo" /></p>
        <p><S.Imagens src="https://svgshare.com/i/ZHt.svg" class="logo"/></p>
        <p><S.Imagens src="https://svgshare.com/i/ZKd.svg" class="logo"/></p>
    </S.ProductContainer>
    <S.ListProduct>
        <S.ListItem><S.Texto>Camiseta preta algodão 100%</S.Texto></S.ListItem>
        <S.ListItem><S.Texto>Shorts verde elastano</S.Texto></S.ListItem>
        <S.ListItem><S.Texto>Tênis meia preto (tamanhos até 45)</S.Texto></S.ListItem>
    </S.ListProduct>
    <S.ListProduct>
        <S.ListPreco><S.Texto>R$15,99</S.Texto></S.ListPreco>
        <S.ListPreco><S.Texto>R$25,99</S.Texto></S.ListPreco>
        <S.ListPreco><S.Texto>R$125,00</S.Texto></S.ListPreco>
    </S.ListProduct>
    <S.HomeContainer>
    <>
        <S.HeaderPrincipal>Deseja-se increver para receber as últimas promoções?</S.HeaderPrincipal>
    </>
      <S.Content>
        <S.Input name="usuario" id="usuario" className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>cadastrar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro! Tente novamente</S.ErrorMsg> : ''}
    </S.HomeContainer>
    </>
  );
}

export default App