import * as S from './styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {
  return (
    <S.Wrapper>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Wrapper>
  )
}

export default ContentHeader
