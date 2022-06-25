import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: MH;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
`
