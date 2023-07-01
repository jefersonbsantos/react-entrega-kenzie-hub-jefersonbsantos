import { styled } from "styled-components";

export const CreateTechStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .modalBox {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 280px;
    max-width: 400px;
    height: max-content;
    border-radius: 4px;
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  .modalHeader {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    border-radius: 4px 4px 0px 0px;
    padding-inline: 20px;
  }

  .modalHeader button {
    background-color: transparent;
    border: none;
    color: var(--grey-1);
    font-weight: 600;
    font-size: 1.6rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  form p {
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--grey-0);
  }

  form input {
    width: 85%;
    height: 48px;
    padding-inline: 16px;
    border-radius: 4px;
    border: 1px solid var(--grey-0);
    background: var(--grey-2);
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--grey-0);
  }
  form input::placeholder {
    color: var(--grey-0);
    opacity: 0.5;
  }

  form select {
    width: 100%;
    height: 48px;
    padding-inline: 16px;
    border-radius: 4px;
    border: 1px solid var(--grey-0);
    background: var(--grey-2);
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--grey-0);
  }

  form button {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--grey-0);
  }

  form button:hover {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 500px) {
    .modalBox {
      width: 400px;
    }
    form input {
      width: 90%;
    }
  }
`;
