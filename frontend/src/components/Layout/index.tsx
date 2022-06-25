import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'
import * as S from './styles'

const Layout = () => (
  <S.Wrapper>
    <MainHeader />
    <Aside />
    <Content />
  </S.Wrapper>
)

export default Layout
