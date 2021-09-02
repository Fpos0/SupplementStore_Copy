import React from 'react';
import { Product } from '../Product';

import { Container, Title, Products } from './styles';

export function ProductsDisplay() {
  return (
    <Container>
      <Title>
        <p>
          <span>WHEY PROTEIN </span>EM DESTAQUE
        </p>
      </Title>

      <Products>
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    </Container>
  );
}
