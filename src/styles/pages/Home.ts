import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  padding-bottom: 40px;
`;

export const Banners = styled.div``;

export const HeaderContainer = styled.div`
  margin-bottom: 10px;
`;

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.footer1};
`;
