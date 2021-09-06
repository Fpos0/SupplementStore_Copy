import React, { useEffect, useState } from 'react';
import { ProductsMenu } from '../ProductsMenu';
import { SearchBar } from '../SearchBar';
import { IoCartOutline } from 'react-icons/io5';
import LogoSVG from '../../assets/logo.svg';

import {
  Container,
  LeftHeader,
  Logo,
  LogoText,
  MiddleHeader,
  RightHeader,
  TopRight,
  FirstOption,
  CartContainer,
  Cart
} from './styles';
export function Header() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 773) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 773) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <>
      {isMobile ? (
        <div>I show on 1451px or higher</div>
      ) : (
        <>
          <Container>
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
          </Container>
          <ProductsMenu />
        </>
      )}
    </>
  );
}
