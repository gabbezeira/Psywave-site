import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.25rem;
  width: 100% !important;
  padding: 5rem 10rem;

  .texts {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: var(--black-color)
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`
