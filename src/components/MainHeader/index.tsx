import { useMemo } from 'react'
import * as S from './styles'
import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  return (
    <S.Wrapper>
      <Toggle />
      <S.Profile>
        <S.Welcome>Hi, {emoji}</S.Welcome>
        <S.UserName>Joao</S.UserName>
      </S.Profile>
    </S.Wrapper>
  )
}

export default MainHeader
