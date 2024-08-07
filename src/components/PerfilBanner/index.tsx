import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import fundoPerfil from '../../assets/images/imagem_de_fundo.png'
import { Header, Apresentacao } from './styles'
import { Link } from 'react-router-dom'

export const PerfilBanner = () => (
  <>
    <Header style={{ backgroundImage: `url(${vetor})` }}>
      <div className="container">
        <h3>Restaurantes</h3>

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
        <h2>Italiana</h2>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </Apresentacao>
  </>
)

export default PerfilBanner
