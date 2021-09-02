import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBG};
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

export const FirstOption = styled.a`
  margin-right: 20px;
  &::after {
    content: '\f111';
    position: absolute;
    right: 0;
    top: 5px;
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

export const HeaderOffset = styled.div`
  border-top: solid 5px ${({ theme }) => theme.colors.headerBorder};
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.menu};
`;

export const Content = styled.div`
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

export const SlimBanner = styled.div`
  width: 100%;

  padding: 1.5rem 0 0.5rem 0;
`;

export const MainBanner = styled.div`
  width: 100%;
`;

export const Benefits = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
`;

export const Products = styled.div`
  width: 100%;
`;

export const Banners = styled.div``;

export const HeaderContainer = styled.div`
  margin-bottom: 10px;
`;
