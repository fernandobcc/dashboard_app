import styled, { css } from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.colors?.info,
  offColor: theme.colors?.warning
}))<ReactSwitchProps>`
  margin: 0 7px;
`
