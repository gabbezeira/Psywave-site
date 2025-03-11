import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  text-align: center;
  padding: 5rem 4.5rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  background-image: ${({ $bgimg }) => ($bgimg ? `url("${$bgimg}")` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.25rem;
  padding: 1.75rem 1rem;

  .cards {
    display: flex;
    justify-content: ${({ singleItem }) => (singleItem ? 'center' : 'flex-start')};
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    overflow: hidden;
    scroll-behavior: smooth;
    width: 100%;
    height: auto;

    @media (max-width: 1024px) {
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1.25rem;
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`
