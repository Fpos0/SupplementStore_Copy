import React from 'react';
import { Product } from '../Product';
import whey1 from '../../assets/whey1.png';

import { Container, Title, Products } from './styles';

interface Props {
  title: string;
}

export function ProductsDisplay({ title }: Props) {
  const data = {
    image: whey1,
    title: '100% PURE WHEY (900G) PROBIÓTICA + COQUETELEIRA GRÁTIS',
    brand: 'PROBIÓTICA',
    discountAmount: '10 % OFF',
    price: 'R$138,07',
    specialPrice: '124,26',
    formatedPrice: 'string',
    oldPrice: 'R$149,90',
    card: {
      months: '2',
      pricePerMonth: 'R$69,04'
    }
  };
  const title2 = { __html: title };
  return (
    <Container>
      <Title dangerouslySetInnerHTML={title2}></Title>

      <Products>
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />

        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
      </Products>
    </Container>
  );
}
