import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    width: 1.875rem;
    height: 1.875rem;

    border: 0.0625rem solid var(--stroke-color);
    border-radius: 0.375rem;

    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: 1rem;

    &:hover:not(:disabled) {
      background-color: var(--primary-color);
      cursor: pointer;
    }

    &:disabled {
      background-color: transparent;
      border: 0.0625rem solid var(--stroke-color);

      .icon {
        color: var(--stroke-color);
      }
    }

    &.active {
      background-color: var(--secondary-color);
      border: 0.0625rem solid var(--secondary-color);
      color: var(--white-color);
    }

    .icon {
      color: var(--white-color);
    }
  }

  .page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    width: 1.5rem;
    height: 1.5rem;

    background-color: transparent;
    border: 0.0625rem solid var(--stroke-color);
    border-radius: 1.75rem;

    color: var(--black-color);
    font-weight: 800;
    font-size: 0.625rem;
    text-align: center;

    &:hover:not(:disabled) {
      background-color: var(--secondary-color);
      color: var(--black-color);
      cursor: pointer;
    }
    &:disabled {
      background-color: transparent;
      border: 1px solid var(--stroke-color);
    }
    &.active {
      background-color: var(--secondary-color);
      border: 0.0625rem solid var(--secondary-color);
      font-weight: 800;
      color: var(--white-color);
    }
  }
`
