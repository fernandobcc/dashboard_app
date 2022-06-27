import styled from 'styled-components'

export const Wrapper = styled.main`
  grid-area: CT;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;
`
