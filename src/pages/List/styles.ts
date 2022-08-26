import styled from 'styled-components'

export const Wrapper = styled.main``

export const Content = styled.div``

export const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-regular::after {
    content: '';
    display: block;
    width: 55;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
  .tag-filter-casual::after {
    content: '';
    display: block;
    width: 55;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }
`
