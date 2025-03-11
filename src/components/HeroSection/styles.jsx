import styled from 'styled-components'
import '@gs'

export const StyledHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  width: 100%;
  height: auto;

  padding: 5rem 10rem;

  .heroTopArea {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 1rem 2rem;
      border-radius: 3.25rem;
      background-color: var(--primary-color);

      color: var(--white-color);
      text-align: center;
      font-size: 1rem;

      width: auto;
      height: auto;

      border: none;
      transition: all 0.2s;
      cursor: pointer;

      text-decoration: none;

      &:hover {
        background-color: var(--primary-hover);
      }
    }

    .heroTexts {
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;
      text-align: center;

      color: var(--black-color);

      .title {
        font-size: 2.25rem;
        font-weight: bold;
      }

      .subtitle {
        font-size: 1.25rem;
        font-weight: normal;
      }
    }
  }

  .heroGamesArea {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 2.25rem;
    width: 100%;
    height: auto;

    .link {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem;
    gap: 3rem;

    .heroTopArea {
      .heroTexts {
        gap: 1rem;

        .title {
          font-size: 1.75rem;
          line-height: 1.2;
        }
        .subtitle {
          font-size: 1rem;
        }
      }
    }
  }
`

export const GameImage = styled.div`
  width: 100%;
  aspect-ratio: 190 / 234;

  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.5rem;

  border-radius: 0.5rem;
  pointer-events: none;
  user-select: none;
`
