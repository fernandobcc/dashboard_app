import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Content
