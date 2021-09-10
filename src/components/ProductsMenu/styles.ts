import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.menu};

  @media screen and (max-width: 777px) {
    height: auto;
  }
`;

export const Options = styled.div`
  display: flex;
  height: inherit;

  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  white-space: nowrap;
  @media (min-width: 1156px) {
    width: 1090px;
  }

  @media (min-width: 992px) and (max-width: 1155px) {
    width: 960px;
  }

  @media (min-width: 778px) and (max-width: 991px) {
    width: 740px;
  }

  @media screen and (max-width: 777px) {
    padding: 0;
    width: 100%;
    flex-direction: column;

    div {
      border: 0;
    }
  }
`;

export const Option = styled.div`
  padding-left: 10px;
  padding: 0.5rem 0.7rem 0.3rem 0.7rem;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #00a0d4;

  @media screen and (min-width: 768px) and (max-width: 1180px) {
    padding: 0.5rem 0.3rem 0.3rem 0.3rem;
    a {
      font-size: 10px;
    }
  }
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

    @media screen and (min-width: 768px) and (max-width: 900px) {
      font-size: 12px;
    }
  }

  &:first-of-type {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }
`;
