import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  gap: 2rem;

  .error-image {
    width: auto;
    height: 13rem;
    user-select: none;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black-color);
  }
`
