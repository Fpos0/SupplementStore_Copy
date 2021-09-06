import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBG};
`;

export const LogoText = styled.div`
  padding-left: 0.5rem;
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.titleText};
  border-left: 1px solid ${({ theme }) => theme.colors.headerGray};
  letter-spacing: 1px;
  white-space: nowrap;
  line-height: 20px;
  font-weight: normal;
`;

export const TopRight = styled.div`
  color: #7c7c7c;
  font-size: 0.5rem;
  text-transform: uppercase;
  padding-top: 10px;
  a {
    text-decoration: none;
  }
`;
export const LeftHeader = styled.div`
  display: flex;
`;

export const MiddleHeader = styled.div`
  width: 485px;
  right: 225px;
  padding: 0rem 2rem;
`;

export const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 10rem;
  height: 4rem;
  margin-right: 6px;
  svg {
    width: inherit;
    height: inherit;
  }
`;
export const CartContainer = styled.div`
  display: flex;
  margin-top: 5px;

  padding: 1rem;
  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #7c7c7c;
    padding: 0 15px 0 3px;
    line-height: 1;
  }
  svg {
    margin-right: 10px;
    transform: rotateY(180deg);
    color: ${({ theme }) => theme.colors.menuHover};
  }
  h3 {
    background-color: ${({ theme }) => theme.colors.menuHover};
    color: #fff;
    width: 28px;
    height: 28px;
    font-size: 17px;
    text-align: center;
    border-radius: 28px;
    line-height: 28px;
    font-weight: normal;
  }
`;

export const Cart = styled.a`
  outline: none;
`;

export const FirstOption = styled.a`
  margin-right: 20px;
  &::after {
    content: '\f111';
    position: absolute;
    right: 0;
    top: 5px;
  }
`;
