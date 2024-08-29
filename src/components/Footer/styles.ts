import styled from 'styled-components'

export const FooterContainer = styled.div`
  heigth: 298px;
  padding: 40px 0 40px 0;
  margin-top: 120px;
`

export const FooterInfos = styled.div`
  display: grid;
  justify-items: center;
`
export const Logo = styled.img`
  width: 125px;
`
export const SocialLinks = styled.div`
  margin: 32px 0 80px 0;
  width: 88px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  img {
    width: 25px;
    justify-content: center;
  }
`

export const FooterCopy = styled.h1`
  font-size: 10px;
  width: 480px;
  line-height: 11.72px;
  text-align: center;
`
