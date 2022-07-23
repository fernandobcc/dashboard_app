import React from 'react'
import * as S from './styles'

type SelectInputProps = {
  options: {
    value: string | number
    label: string
  }[]
  defaultValue?: string | number
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void | undefined
}

const SelectInput = ({ options, onChange, defaultValue }: SelectInputProps) => (
  <S.Wrapper>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </S.Wrapper>
)

export default SelectInput
