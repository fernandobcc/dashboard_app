import * as S from './styles'

const Toggle: React.FC = () => (
  <S.Wrapper>
    <S.ToggleLabel>Dark</S.ToggleLabel>
    <S.ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => {
        console.log('changed')
      }}
    />
    <S.ToggleLabel>Light</S.ToggleLabel>
  </S.Wrapper>
)

export default Toggle
