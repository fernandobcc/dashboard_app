import styled from 'styled-components'

type WrapperProps = {
  color: string
}

type TagProps = {
  color: string
}

export const Wrapper = styled.li<WrapperProps>`
  background-color: ${(props) => props.color};

  list-style: none;
  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }
`

export const Tag = styled.div<TagProps>`
  width: 10px;
  height: 60%;

  background-color: ${(props) => props.color};
  position: absolute;
  left: 0;
`
