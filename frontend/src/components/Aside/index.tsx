import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

const Aside = () => (
  <S.Wrapper>
    <S.Header>
      <S.LogImg src={logoImg} alt="My wallet logo" />
      <S.Title>My Money Chest</S.Title>
    </S.Header>

    <S.MenuContainer>
      <S.MenuItemLink href="#">
        <MdDashboard />
        Dashboard
      </S.MenuItemLink>
      <S.MenuItemLink href="#">
        <MdArrowUpward />
        Input
      </S.MenuItemLink>
      <S.MenuItemLink href="#">
        <MdArrowDownward />
        Output
      </S.MenuItemLink>
      <S.MenuItemLink href="#">
        <MdExitToApp />
        Exit
      </S.MenuItemLink>
    </S.MenuContainer>
  </S.Wrapper>
)

export default Aside
