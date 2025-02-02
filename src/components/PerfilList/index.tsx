import { useDispatch } from 'react-redux'

import PerfilProducts from '../PerfilProducts'
import Button from '../Button'
import { Cardapio, Restaurantes } from '../../pages/Home'
import { useState } from 'react'
import { open, add } from '../../store/reducers/cart'

import close from '../../assets/images/close 1.png'
import * as S from './styles'
import { parseToBrl } from '../../utils'

export type Props = {
  pratos: Restaurantes[]
}

export const PerfilList = ({ pratos }: Props) => {
  const dispatch = useDispatch()

  // Função para adicionar o item selecionado ao carrinho
  const addToCart = (item: Cardapio) => {
    console.log('Adicionando ao carrinho:', item) // Verifica no console se o item está correto
    dispatch(add(item)) // Adiciona o item ao carrinho
    dispatch(open()) // Abre o carrinho
  }

  const [modalIsOpen, setModalIsOpen] = useState(false) // Estado para controlar a visibilidade do modal
  const [itemSelecionado, setItemSelecionado] = useState<
    Restaurantes['cardapio'][0] | null
  >(null) // Estado para armazenar o item selecionado

  //função abrirModal para definir o item selecionado e abrir o modal.
  const openModal = (item: Restaurantes['cardapio'][0]) => {
    setItemSelecionado(item) // Atualiza o estado com o item selecionado
    setModalIsOpen(true) // Abre o modal
  }

  return (
    <>
      <div className="container">
        <S.Container>
          <S.Items>
            {pratos.map((prato) =>
              // Mapeia os itens do cardápio de cada prato
              prato.cardapio.map((item) => (
                <S.Item key={item.id}>
                  <PerfilProducts
                    id={item.id}
                    image={item.foto}
                    description={item.descricao}
                    title={item.nome}
                    openModal={() => openModal(item)} // Passa a função para abrir o modal com o item selecionado
                  />
                </S.Item>
              ))
            )}
          </S.Items>
        </S.Container>
        <S.Modal className={modalIsOpen ? 'is-visible' : ''}>
          <S.ModalContent className="container">
            <S.CloseBtn>
              <img
                src={close}
                alt="Icone Fechar"
                onClick={() => setModalIsOpen(false)} // Fecha o modal ao clicar na imagem
              />
            </S.CloseBtn>
            {itemSelecionado && (
              <S.ModalAberto>
                <S.ModalContentFoto>
                  <img src={itemSelecionado.foto} alt={itemSelecionado.nome} />
                </S.ModalContentFoto>
                <S.ModalContentTexto>
                  <h3>{itemSelecionado.nome}</h3>
                  <p>{itemSelecionado.descricao}</p>
                  <p>{itemSelecionado.porcao}</p>
                  <Button
                    onClick={() => {
                      if (itemSelecionado) {
                        addToCart(itemSelecionado) // Adiciona o item ao carrinho
                        setModalIsOpen(false) // Fecha o modal após adicionar ao carrinho
                      }
                    }}
                    type="button"
                    title="Comprar"
                  >
                    {`Adicionar ao carrinho - ${parseToBrl(
                      itemSelecionado.preco
                    )}`}
                  </Button>
                </S.ModalContentTexto>
              </S.ModalAberto>
            )}
          </S.ModalContent>
          <div
            className="overlay"
            onClick={() => setModalIsOpen(false)} // Fecha o modal ao clicar na sobreposição
          ></div>
        </S.Modal>
      </div>
    </>
  )
}

export default PerfilList
