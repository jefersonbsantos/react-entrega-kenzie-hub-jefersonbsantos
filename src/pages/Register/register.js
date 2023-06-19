import { styled } from "styled-components";

export const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  gap: 30px;

  header {
    display: flex;
    justify-content: space-between;
  }

  .header__button {
    background-color: var(--grey-3);
    color: var(--grey-0);
    width: 80px;
    height: 30px;
    border: 1px solid var(--grey-3);
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    background-color: var(--grey-3);
    border-radius: 3px;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 23px;
    gap: 20px;
    padding: 15px;
  }

  form h2 {
    color: var(--grey-0);
    text-align: center;
  }

  .form__subtitle {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 18px;
    color: var(--grey-1);
    text-align: center;
  }

  form p {
    font-weight: 400;
    font-size: 9.73988px;
    line-height: 0px;
    color: var(--grey-0);
  }

  form input,
  select {
    max-width: 100%;
    height: 38px;
    border-radius: 3px;
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
    color: #868e96;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 21px;
    padding-inline: 10px;
  }

  form button {
    max-width: 100%;
    height: 38px;
    background-color: var(--color-primary-negative);
    border: 1px solid var(--color-primary-negative);
    border-radius: 4px;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 21px;
    color: var(--grey-0);
  }

  @media (min-width: 500px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;
