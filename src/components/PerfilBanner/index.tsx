import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import fundoPerfil from '../../assets/images/imagem_de_fundo.png'
import { Header, Apresentacao, HomeLink } from './styles'
import { Link } from 'react-router-dom'
import { CardapioDePratos } from '../../pages/Home'

export type Props = {
  prato: CardapioDePratos
}

export const PerfilBanner = ({ prato }: Props) => {
  return (
    <>
      <Header style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <HomeLink to="/">
            <h3>Restaurantes</h3>
          </HomeLink>

          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>

          <h4>
            <span>0</span> produto(s) no carrinho
          </h4>
        </div>
      </Header>

      <Apresentacao style={{ backgroundImage: `url(${fundoPerfil})` }}>
        <div className="container">
          <h2>{prato.tipo}</h2>
          <h1>{prato.titulo}</h1>
        </div>
      </Apresentacao>
    </>
  )
}

export default PerfilBanner
