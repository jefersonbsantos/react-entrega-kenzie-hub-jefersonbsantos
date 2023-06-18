import { styled } from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  gap: 30px;

  header {
    display: flex;
    justify-content: space-between;
  }

  header button {
    width: 55px;
    height: 32px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 28px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    padding: 40px 10px;
    height: 130px;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
    margin-bottom: 30px;
  }

  .profile__name {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }

  .profile__module {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }

  section div {
    display: flex;
    justify-content: space-between;
  }

  section div h2 {
    color: var(--grey-0);
  }

  section div button {
    width: 32px;
    height: 32px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 22px;
    margin-bottom: 30px;
  }

  section ul {
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 10px;
    gap: 10px;
  }

  section ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    background-color: var(--grey-4);
    padding: 10px;
    border-radius: 4px;
  }

  .tech__name {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 24px;
    color: var(--grey-0);
  }

  .tech__level {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 22px;
    color: var(--grey-1);
  }
`;
