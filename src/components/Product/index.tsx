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
  SpecialPrice,
  Details,
  TypeOfPayment,
  ProductLabel,
  OldPriceContainer
} from './styles';
// import whey1 from '../../assets/whey1.png';

interface Props {
  data: {
    image: StaticImageData;
    title: string;
    brand: string;
    discountAmount?: string;
    price: string;
    specialPrice: string;
    formatedPrice: string;
    oldPrice: string;
    card: {
      months: string;
      pricePerMonth: string;
    };
  };
}
export function Product({ data }: Props) {
  const SplitPrice = data.specialPrice.split(',');
  return (
    <Container>
      <Link href="/" passHref>
        <ProductImage>
          <ProductLabel />
          <Image src={data.image} />
        </ProductImage>
      </Link>
      <ProductInfo>
        <BlueLabel>
          <a href="">{data.title}</a>
        </BlueLabel>
        <GrayLabel style={{ textTransform: 'uppercase' }}>
          {data.brand}
        </GrayLabel>
        <BlueLabel>{data.discountAmount}</BlueLabel>
        <PriceBox>
          <OldPriceContainer>
            De: <span>{data.oldPrice}</span> {data.price}
          </OldPriceContainer>
          <GrayLabel>
            2 x de <span>R$69,04</span> sem juros
          </GrayLabel>
        </PriceBox>
        <SpecialPrice>
          {SplitPrice[0]}
          <span>,{SplitPrice[1]}</span>
        </SpecialPrice>
        <TypeOfPayment>À vista</TypeOfPayment>
        <Details>Detalhes</Details>
      </ProductInfo>
    </Container>
  );
}
