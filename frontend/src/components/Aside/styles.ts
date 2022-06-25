import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: AS;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
`
