import React from 'react';
import Head from 'next/head';
import firstBanner from '../assets/firstbanner.png';
import benefits1 from '../assets/beneficios1.png';
import benefits2 from '../assets/beneficios2.png';
import benefits3 from '../assets/beneficios3.png';
import Image from 'next/image';

import {
  Container,
  HeaderOffset,
  Content,
  SlimBanner,
  Benefits,
  Products,
  HeaderContainer,
  FooterContainer,
  FooterLinksContainer
} from '../styles/pages/Home';

import { Header } from '../components/Header';

import { ProductsDisplay } from '../components/ProductsDisplay';
import { Footer } from '../components/Footer';
import { FooterTwo } from '../components/FooterTwo';
import { MainBanner } from '../components/MainBanner';

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
        <Header />
      </HeaderContainer>

      <Content>
        <SlimBanner>
          <Image src={firstBanner} />
        </SlimBanner>
        <MainBanner />
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
      <FooterLinksContainer>
        <FooterTwo />
      </FooterLinksContainer>
    </Container>
  );
};

export default Home;
