import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  ProductImage,
  GrayLabel,
  BlueLabel,
  ProductInfo,
  PriceBox,
  Price,
  Details,
  TypeOfPayment,
  ProductLabel
} from './styles';
import whey1 from '../../assets/whey1.png';

interface Props {
  image: StaticImageData;
  title: string;
  brand: string;
  offPrice?: number;
  price: number;
  formatedPrice: string;
  card: {
    months: string;
    pricePerMonth: string;
  };
}
export function Product() {
  return (
    <Container>
      <Link href="/" passHref>
        <ProductImage>
          <ProductLabel />
          <Image src={whey1} />
        </ProductImage>
      </Link>
      <ProductInfo>
        <BlueLabel>
          <a href="">100% PURE WHEY (900G) PROBIÓTICA + COQUETELEIRA GRÁTIS</a>
        </BlueLabel>
        <GrayLabel style={{ textTransform: 'uppercase' }}>PROBIÓTICA</GrayLabel>

        <BlueLabel>10%</BlueLabel>

        <PriceBox>
          <GrayLabel>De: R$149,90 R$138,07</GrayLabel>
          <GrayLabel>
            2 x de <span>R$69,04</span> sem juros
          </GrayLabel>
        </PriceBox>
        <Price>124,26</Price>
        <TypeOfPayment>À vista</TypeOfPayment>
        <Details>Detalhes</Details>
      </ProductInfo>
    </Container>
  );
}
