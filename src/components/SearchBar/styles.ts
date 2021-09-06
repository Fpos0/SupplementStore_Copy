import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  button {
    padding-top: 1%;

    height: 40px;
    width: 40px;
    background-color: ${({ theme }) => theme.colors.menu};
    color: ${({ theme }) => theme.colors.background};
    border: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    right: 0;
  }
`;

export const Input = styled.input`
  width: 92%;
  height: 40px;
  border: solid 1px #d5d5d5;
  font-size: 0.6rem;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.input};
  &::placeholder {
    color: ${({ theme }) => theme.colors.input};
    text-transform: uppercase;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border: solid 1px #d5d5d5;
  }
`;
