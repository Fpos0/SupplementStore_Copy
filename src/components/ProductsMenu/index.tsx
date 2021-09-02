import React from 'react';

import { Container, Option, Options } from './styles';

export function ProductsMenu() {
  const categorys = [
    'WHEY PROTEIN',
    'POR OBJETIVO',
    'POR PRODUTO',
    'POR MARCAR',
    'KITS',
    'COMBOS',
    'TOP 20',
    'OUTLET',
    'CLUBE PESADÃO',
    'BLOG'
  ];
  return (
    <Container>
      <Options>
        {categorys.map((item, index) => {
          return (
            <Option key={index}>
              <a href="">{item}</a>
            </Option>
          );
        })}
      </Options>
    </Container>
  );
}
