import { Link } from 'react-router-dom'
import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twit from '../../assets/images/twitter-2-svgrepo-com 1.png'
import * as S from './styles'

export const Footer = () => (
  <S.FooterContainer style={{ backgroundImage: `url(${vetor})` }}>
    <div className="container">
      <S.FooterInfos>
        <S.Logo src={logo} alt="efood" />
        <S.SocialLinks>
          <Link title="Clique aqui para acessara nosso Instagram" to="#">
            <img src={insta} alt="Instagram Charl's Food" />
          </Link>
          <Link title="Clique aqui para acessara nosso FaceBook" to="#">
            <img src={face} alt="Facebbok Charl's Food" />
          </Link>
          <Link title="Clique aqui para acessara nosso Twitter" to="#">
            <img src={twit} alt="Twitter Charl's Food" />
          </Link>
        </S.SocialLinks>
        <S.FooterCopy>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.FooterCopy>
      </S.FooterInfos>
    </div>
  </S.FooterContainer>
)

export default Footer
