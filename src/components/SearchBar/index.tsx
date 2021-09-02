import React from 'react';

import { Container, Input } from './styles';
import { BiSearch } from 'react-icons/bi';
export function SearchBar() {
  return (
    <Container>
      <Input placeholder="digite o produto ou fabricante" />
      <button>
        <BiSearch size={25} />
      </button>
    </Container>
  );
}
