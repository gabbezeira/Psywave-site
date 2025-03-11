import styled from 'styled-components'
import '@gs'

export const StyledMoreCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(0.5rem);

  width: 15rem;
  height: 18.5rem;

  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 1.25rem;

  transition: all 0.3s;
  cursor: pointer;
  
  .moreTitle {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: var(--white-color);
    user-select: none;
  }

  .icon {
    color: var(--white-color);
    height: 3rem;
    width: 3rem;
  }
`
