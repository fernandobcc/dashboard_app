import * as S from './styles'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string
  }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => (
  <S.Wrapper>
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </S.Wrapper>
)

export default SelectInput
