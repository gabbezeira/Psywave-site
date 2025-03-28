import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 3rem;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 100%;
    gap: 3rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 3.5rem;
      gap: 2rem;

      .search {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0rem 1rem;
        gap: 1rem;

        width: 100%;
        height: 3.5rem;

        background-color: var(--white-color);
        border: 0.0313rem solid var(--stroke-color);
        border-radius: 0.5rem;

        transition: all 0.2s;
        outline: none;

        &:hover {
          border: 0.0625rem solid var(--primary-color);
        }

        .icon {
          color: var(--stroke-color);
        }

        .search-input {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: none;
          border-radius: 0.625rem;

          font-size: 1.125rem;
          color: var(--black-color);
          outline: none;

          &::placeholder {
            color: var(--black-color);
            opacity: 0.3;
            font-size: 1rem;
            font-weight: 300;
          }

          &::-webkit-search-cancel-button {
            display: none;
          }
        }
      }

      .new-account {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        height: 100%;
        width: auto;

        margin: 0;

        padding: 0.5rem 0.875rem;
        border-radius: 0.25rem;
        border: none;

        background-color: var(--primary-color);

        text-decoration: none;

        transition: all 0.2s;
        cursor: pointer;

        .text {
          color: var(--white-color);
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .icon {
          color: var(--white-color);
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .games-group {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      gap: 2.5rem;
      flex: 1;
      width: 100%;
      height: 22.9375rem;
    }
  }

  a {
    margin-top: 0.75rem;
    text-decoration: none;
    list-style: none;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      width: max-content;
      padding: 0.5rem 2rem;

      margin-top: 1.75rem;

      border-radius: 0.25rem;
      border: 0.0313rem solid var(--stroke-color);

      color: var(--alt-black-color);
      font-size: 1rem;
      font-weight: 600;
      background-color: var(--secondary-color);

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 640px) {
    .content {
      .header {
        flex-direction: column;
        height: max-content;
        gap: 1rem;

        .new-account {
          height: 3.5rem;
          width: 100%;
        }
      }

      .games-group {
        justify-content: center;
      }
    }
  }
`
