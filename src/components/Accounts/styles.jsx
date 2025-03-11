import styled from 'styled-components'
import '@gs'

export const StyledCategorySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  text-align: center;
  width: 100%;
  padding: 5rem 10rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
    user-select: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 22.5rem;

  background-image: ${({ $background }) => `url(${$background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1.25rem;

  .icon {
    color: var(--white-color);
    stroke-width: 0.0625rem;
    cursor: pointer;
    min-width: 2.625rem;
    min-height: 2.625rem;

    &.disabled {
      cursor: default;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      min-width: 1.75rem;

    }
  }

  @media (max-width: 768px){
    gap: 0.625rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  flex-wrap: nowrap;
  overflow: hidden; 
  scroll-behavior: smooth;

  width: 100%;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;

  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.5rem;

  }
`
