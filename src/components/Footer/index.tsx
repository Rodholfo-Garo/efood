import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twit from '../../assets/images/twitter-2-svgrepo-com 1.png'
import {
  FooterContainer,
  FooterInfos,
  Logo,
  SocialLinks,
  FooterCopy
} from './styles'
import { Link } from 'react-router-dom'

export const Footer = () => (
  <FooterContainer style={{ backgroundImage: `url(${vetor})` }}>
    <div className="container">
      <FooterInfos>
        <Logo src={logo} alt="efood" />
        <SocialLinks>
          <Link to="#">
            <img src={insta} alt="Instagram Charl's Food" />
          </Link>
          <Link to="#">
            <img src={face} alt="Facebbok Charl's Food" />
          </Link>
          <Link to="#">
            <img src={twit} alt="Twitter Charl's Food" />
          </Link>
        </SocialLinks>
        <FooterCopy>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </FooterCopy>
      </FooterInfos>
    </div>
  </FooterContainer>
)

export default Footer
