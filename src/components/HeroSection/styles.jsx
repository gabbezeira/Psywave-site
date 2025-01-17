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
`

export const HeroTopArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
export const HeroTexts = styled.div`
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

`
export const HeroGamesArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 2.25rem;

  width: 100%;
  height: auto;

  @media (max-width: 768px){
    flex-direction: column;
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
