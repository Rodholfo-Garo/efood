import PerfilProducts from '../PerfilProducts'
import {
  Items,
  Item,
  Container,
  Modal,
  ModalContent,
  BtnFechar,
  ModalContentFoto,
  ModalContentTexto,
  ModalAberto
} from './styles'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'
import { Cardapio, Restaurantes } from '../../pages/Home'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { open, add } from '../../store/reducers/cart'

export type Props = {
  pratos: Restaurantes[]
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
export const PerfilList = ({ pratos }: Props) => {
  const dispatch = useDispatch()

  // Função para adicionar o item selecionado ao carrinho
  const addToCart = (item: Cardapio) => {
    console.log('Adicionando ao carrinho:', item) // Verifica no console se o item está correto
    dispatch(add(item)) // Adiciona o item ao carrinho
    dispatch(open()) // Abre o carrinho
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false) // Estado para controlar a visibilidade do modal
  const [itemSelecionado, setItemSelecionado] = useState<
    Restaurantes['cardapio'][0] | null
  >(null) // Estado para armazenar o item selecionado

  //função abrirModal para definir o item selecionado e abrir o modal.
  const abrirModal = (item: Restaurantes['cardapio'][0]) => {
    setItemSelecionado(item) // Atualiza o estado com o item selecionado
    setModalEstaAberto(true) // Abre o modal
  }

  return (
    <>
      <div className="container">
        <Container>
          <Items>
            {pratos.map((prato) =>
              // Mapeia os itens do cardápio de cada prato
              prato.cardapio.map((item) => (
                <Item key={item.id}>
                  <PerfilProducts
                    id={item.id}
                    image={item.foto}
                    description={item.descricao}
                    title={item.nome}
                    abrirModal={() => abrirModal(item)} // Passa a função para abrir o modal com o item selecionado
                  />
                </Item>
              ))
            )}
          </Items>
        </Container>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent className="container">
            <BtnFechar>
              <img
                src={fechar}
                alt="Icone Fechar"
                onClick={() => setModalEstaAberto(false)} // Fecha o modal ao clicar na imagem
              />
            </BtnFechar>
            {itemSelecionado && (
              <ModalAberto>
                <ModalContentFoto>
                  <img src={itemSelecionado.foto} alt={itemSelecionado.nome} />
                </ModalContentFoto>
                <ModalContentTexto>
                  <h3>{itemSelecionado.nome}</h3>
                  <p>{itemSelecionado.descricao}</p>
                  <p>{itemSelecionado.porcao}</p>
                  <Button
                    onClick={() => addToCart(itemSelecionado)}
                    type="button"
                    title="Comprar"
                  >
                    {`Adicionar ao carrinho - ${formataPreco(
                      itemSelecionado.preco
                    )}`}
                  </Button>
                </ModalContentTexto>
              </ModalAberto>
            )}
          </ModalContent>
          <div
            className="overlay"
            onClick={() => setModalEstaAberto(false)} // Fecha o modal ao clicar na sobreposição
          ></div>
        </Modal>
      </div>
    </>
  )
}

export default PerfilList
