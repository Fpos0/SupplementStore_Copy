import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.menu};
`;

export const Options = styled.div`
  display: flex;
  height: inherit;

  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1156px) {
    width: 1090px;
  }

  @media (min-width: 992px) and (max-width: 1155px) {
    width: 960px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 740px;
  }
`;

export const Option = styled.div`
  padding-left: 10px;
  padding: 0.5rem 1rem 0.3rem 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #00a0d4;

  &:hover {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }

  a {
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    height: 25px;
    text-align: center;
  }

  &:first-of-type {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }
`;
