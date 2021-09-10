import styled, { css } from 'styled-components';

interface MobileProps {
  selected?: boolean;
}

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

  @media screen and (max-width: 777px) {
    border-left: 0;
  }
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
export const CartContainer = styled.div<MobileProps>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: #ededed;
    `};
  display: flex;
  margin-top: 5px;

  padding: 1rem;
  p {
    text-align: center;
    font-size: 17px;
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

  @media screen and (max-width: 777px) {
    border-right: 1px solid #ededed;
  }
`;

export const Cart = styled.a`
  outline: none;
`;

export const FirstOption = styled.a`
  margin-right: 10px;
  &:after {
    content: '\f111';
    font: normal normal normal 4px/1 FontAwesome;
    position: absolute;
    border-radius: 100%;
    margin-top: 4px;
  }
`;

export const MobileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBG};
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  div {
    transition: all 0.4s linear;
  }
`;

export const MobileTop = styled.div`
  padding: 10px 0px;
  position: relative;
`;

export const MobileMiddle = styled.div`
  text-align: center;
`;

export const MobileBottom = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ededed;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;

    height: 50px;
    width: 33.5%;
  }
  p {
    margin-left: 5px;
    font-size: 16px;
    color: #7c7c7c;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme }) => theme.colors.menuHover};
  }
`;

export const MobileTopRight = styled.div`
  padding: 0 10px;
  display: block;
  position: absolute;
  line-height: 16px;
  top: 15px;
  right: 0;
  font-size: 11px;
  text-transform: uppercase;
  padding-top: 10px;

  a {
    text-decoration: none;
    color: #636363;
  }
`;

export const MobileSearch = styled.div`
  background-color: #ededed;
  padding: 1rem;
`;

export const MobileOption = styled.div<MobileProps>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: #ededed;
    `};
`;

export const MobileCart = styled.div`
  background-color: #ededed;
  position: relative;
  min-height: 100px;
  p {
    margin: 16px;
    float: left;
    font-size: 13px;
    color: #50a4cf;
    font-weight: bold;
    line-height: 1.4;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    span {
      float: right;
      display: block;
      color: #d67c1c;
      text-decoration: none;
      font-weight: normal;
      font-size: 22px;
      position: absolute;
      top: -3px;
      right: 8px;
      line-height: 25px;
      height: 30px;
      text-shadow: 0 0 0;
    }
  }

  div {
    margin: 10px;
    padding: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    color: #5f6062;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    white-space: nowrap;
  }
`;
