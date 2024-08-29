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
import Marguerita from '../../assets/images/pizzaPerfil.png'
import { useState } from 'react'
import { CardapioDePratos } from '../../pages/Home'
import Button from '../Button'

export type Props = {
  pratos: CardapioDePratos[]
}

export const PerfilList = ({ pratos }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false) // Estado para controlar a visibilidade do modal

  // estado itemSelecionado para armazenar o item do cardápio que foi selecionado.
  const [itemSelecionado, setItemSelecionado] = useState<
    CardapioDePratos['cardapio'][0] | null
  >(null) // Estado para armazenar o item selecionado

  //função abrirModal para definir o item selecionado e abrir o modal.
  const abrirModal = (item: CardapioDePratos['cardapio'][0]) => {
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
            {/* Estado itemSelecionado para renderizar a imagem, nome, descrição e preço no modal. */}
            {itemSelecionado && (
              <ModalAberto>
                <ModalContentFoto>
                  <img src={itemSelecionado.foto} alt={itemSelecionado.nome} />
                  {/* Usa o estado do item selecionado para renderizar a imagem */}
                </ModalContentFoto>
                <ModalContentTexto>
                  {/* Usa o estado do item selecionado para renderizar o nome */}
                  <h3>{itemSelecionado.nome}</h3>
                  {/* Usa o estado do item selecionado para renderizar a descrição */}
                  <p>{itemSelecionado.descricao}</p>
                  <p>{itemSelecionado.porcao}</p>
                  <Button type="button" title="Comprar">
                    {`Adicionar ao carrinho - ${formataPreco(
                      itemSelecionado.preco
                    )}`}
                  </Button>
                </ModalContentTexto>
                {/* Usa o estado do item selecionado para renderizar o preço */}
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
