import { styled } from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 30px;

  header {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    background-color: var(--grey-3);
    border-radius: 3px;
    gap: 25px;
    padding: 15px;
  }

  form h2 {
    color: var(--grey-0);
    text-align: center;
  }

  form p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 0px;
    color: var(--grey-0);
  }

  form input {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 3px;
    color: var(--grey-0);
    max-width: 100%;
    height: 3.8rem;
    padding-inline: 10px;
  }

  .login__button {
    max-width: 100%;
    height: 38px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: var(--grey-0);
    border-radius: 4px;
  }

  .sign-in__text {
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--grey-1);
    text-align: center;
  }

  .sign-in__button {
    max-width: 100%;
    height: 38px;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: var(--grey-0);
  }
`;
