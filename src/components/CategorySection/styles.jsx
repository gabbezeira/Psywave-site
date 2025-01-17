import styled from 'styled-components'
import '@gs'

export const StyledCategorySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  padding: 5rem 10rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: var(--black);
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
      opacity: 0.5;
    }
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

    > div {
      flex: 1 1 calc(33.333% - 1rem);
      max-width: calc(33.333% - 1rem);
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.5rem;

    > div {
      flex: 1 1 calc(100% - 0.5rem);
      max-width: calc(100% - 0.5rem);
    }
  }
`
export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: auto;

  padding: 2rem;
  border: 0.0625rem solid var(--white-color);
  border-radius: 1.25rem;

  background-color: rgba(255,255,255,0.10);
  backdrop-filter: blur(0.5rem);

  text-align: center;
  color: var(--white-color);
  font-size: 1.25rem;
  font-weight: 600;
`
