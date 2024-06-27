import PerfilBanner from '../../components/PerfilBanner'
import PratosPerfil from '../../models/PratosPerfil'
import pizzaPerfil from '../../assets/images/pizzaPerfil.png'
import PerfilList from '../../components/PerfilList'
import Footer from '../../components/Footer'

const cardapioDePratos: PratosPerfil[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaPerfil,
    title: 'Pizza Marguerita'
  }
]

const Perfil = () => (
  <>
    <PerfilBanner />
    <PerfilList pratos={cardapioDePratos} />
    <Footer />
  </>
)

export default Perfil
