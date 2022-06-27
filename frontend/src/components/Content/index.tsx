import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Content
