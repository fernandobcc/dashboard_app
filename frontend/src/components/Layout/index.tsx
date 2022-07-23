import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <S.Wrapper>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </S.Wrapper>
)

export default Layout
