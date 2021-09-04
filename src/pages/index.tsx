import React from 'react';
import Head from 'next/head';
import firstBanner from '../assets/firstbanner.png';
import benefits1 from '../assets/beneficios1.png';
import benefits2 from '../assets/beneficios2.png';
import benefits3 from '../assets/beneficios3.png';
import bannerv1 from '../assets/bannerv1.png';
import Image from 'next/image';
import LogoSVG from '../assets/logo.svg';

import {
  Container,
  Header,
  LeftHeader,
  MiddleHeader,
  RightHeader,
  Logo,
  LogoText,
  TopRight,
  Cart,
  HeaderOffset,
  Content,
  SlimBanner,
  MainBanner,
  Benefits,
  Products,
  HeaderContainer,
  CartContainer,
  FirstOption,
  FooterContainer
} from '../styles/pages/Home';

import { IoCartOutline } from 'react-icons/io5';
import { SearchBar } from '../components/SearchBar';
import { ProductsMenu } from '../components/ProductsMenu';
import { ProductsDisplay } from '../components/ProductsDisplay';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  const dataTitle = '<p>WHEY PROTEIN <span> EM DESTAQUE </span></p>';
  const dataTitle2 =
    '<p><span> SUPLEMENTOS PARA GANHO DE  </span>MASSA MUSCULAR </p>';
  const dataTitle3 = '<p><span> IMPERDÍVEIS </span>OS SUPLEMENTOS  </p>';
  return (
    <Container>
      <Head>
        <title>Suplementos Alimentares - Pesadao ihiiii</title>
      </Head>
      <HeaderOffset></HeaderOffset>
      <HeaderContainer>
        <Header>
          <LeftHeader>
            <Logo>
              <LogoSVG />
            </Logo>
            <LogoText>
              <b>
                A MAIOR LOJA DE <br />
              </b>
              <span>SUPLEMENTOS DO</span>
              <br /> BRASIL
            </LogoText>
          </LeftHeader>
          <MiddleHeader>
            <SearchBar />
          </MiddleHeader>
          <RightHeader>
            <TopRight>
              <FirstOption href="">Entrar </FirstOption>
              <a href="">Cadastrar</a>
            </TopRight>

            <CartContainer>
              <Cart>
                <IoCartOutline size={38} />
              </Cart>
              <p>
                MEU <br />
                CARRINHO
              </p>

              <h3>
                <span>00</span>
              </h3>
            </CartContainer>
          </RightHeader>
        </Header>
        <ProductsMenu />
      </HeaderContainer>

      <Content>
        <SlimBanner>
          <Image src={firstBanner} />
        </SlimBanner>
        <MainBanner>
          <Image src={bannerv1} />
        </MainBanner>
        <Benefits>
          <Image src={benefits1} />
          <Image src={benefits2} />
          <Image src={benefits3} />
        </Benefits>
        <Products>
          <ProductsDisplay title={dataTitle} />
          <ProductsDisplay title={dataTitle2} />
          <ProductsDisplay title={dataTitle3} />
        </Products>
      </Content>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Home;
