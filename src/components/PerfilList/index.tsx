import PratosPerfil from '../../models/PratosPerfil'
import PerfilProducts from '../PerfilProducts'
import { Items, Item, Container, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/close 1.png'
import Marguerita from '../../assets/images/pizzaPerfil.png'
import { useState } from 'react'

export type Props = {
  pratos: PratosPerfil[]
}

export const PerfilList = ({ pratos }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const abrirModal = () => {
    setModalEstaAberto(true)
  }

  return (
    <>
      <div className="container">
        <Container>
          <Items>
            <Item>
              {pratos.map((prato) => (
                <PerfilProducts
                  key={prato.id}
                  image={prato.image}
                  description={prato.description}
                  title={prato.title}
                  abrirModal={abrirModal}
                />
              ))}
            </Item>
          </Items>
        </Container>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent className="container">
            <div>
              <img
                src={fechar}
                alt="Icone Fechar"
                onClick={() => setModalEstaAberto(false)}
              />
            </div>
            <div>
              <div>
                <img src={Marguerita} alt="" />
              </div>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. Serve: de 2 a 3 pessoas
              </p>
              <button>Adicionar ao carrinho - R$60,00</button>
            </div>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => setModalEstaAberto(false)}
          ></div>
        </Modal>
      </div>
    </>
  )
}

export default PerfilList
