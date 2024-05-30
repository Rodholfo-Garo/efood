import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import { Imagem } from './styles'

export const Banner = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${vetor})` }}>
      <div className="container">
        <img src={logo} alt="efood" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
    </Imagem>
  </>
)

export default Banner
