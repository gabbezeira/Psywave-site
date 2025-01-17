import styled from 'styled-components'
import '@gs'

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  border-bottom: 1px solid var(--stroke-color);

  padding: 0.5rem 5rem;
  background-color: var(--secondary-color);
`

export const PromoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  color: var(--white-color);
  font-size: 0.75rem;
`
