import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import { Image } from './styles'

export const Banner = () => (
  <>
    <Image style={{ backgroundImage: `url(${vetor})` }}>
      <div className="container">
        <img src={logo} alt="efood" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
    </Image>
  </>
)

export default Banner
