import React, { useEffect, useState } from 'react';
import { ProductsMenu } from '../ProductsMenu';
import { SearchBar } from '../SearchBar';
import { IoCartOutline } from 'react-icons/io5';
import LogoSVG from '../../assets/logo.svg';

import { HiSearch, HiMenu } from 'react-icons/hi';
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
  Cart,
  MobileContainer,
  MobileTop,
  MobileMiddle,
  MobileBottom,
  MobileTopRight,
  MobileSearch,
  MobileOption,
  MobileCart
} from './styles';

interface MobileProps {
  selected: 'menu' | 'search' | 'cart';
}

export function Header() {
  const [isMobile, setMobile] = useState(false);
  const [isMenuSelected, setisMenuSelected] = useState(false);
  const [isSearchSelected, setisSearchSelected] = useState(false);
  const [isCartSelected, setisCartSelected] = useState(false);

  function handleClick(option: string) {
    console.log(option);

    switch (option) {
      case 'menu':
        setisMenuSelected(prevState => !prevState);
        setisSearchSelected(false);
        setisCartSelected(false);
        break;

      case 'search':
        setisMenuSelected(false);
        setisSearchSelected(prevState => !prevState);
        setisCartSelected(false);
        break;

      case 'cart':
        setisMenuSelected(false);
        setisSearchSelected(false);
        setisCartSelected(prevState => !prevState);
        break;

      default:
        break;
    }
  }
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
        <>
          <MobileContainer>
            <MobileTop>
              <Logo>
                <LogoSVG />
              </Logo>
              <MobileTopRight>
                <FirstOption href="">Entrar </FirstOption>
                <a href="">Cadastre-se</a>
              </MobileTopRight>
            </MobileTop>
            <MobileMiddle>
              <LogoText>
                <b>
                  A MAIOR LOJA DE <br />
                </b>
                <span>SUPLEMENTOS DO BRASIL</span>
              </LogoText>
            </MobileMiddle>

            <MobileBottom>
              <MobileOption
                selected={isMenuSelected}
                onClick={() => handleClick('menu')}
              >
                <HiMenu size={25} />
                <p>Menu</p>
              </MobileOption>
              <MobileOption
                selected={isSearchSelected}
                onClick={() => handleClick('search')}
              >
                <HiSearch size={25} />
                <p>Procurar</p>
              </MobileOption>

              <CartContainer
                selected={isCartSelected}
                onClick={() => handleClick('cart')}
              >
                <Cart>
                  <IoCartOutline size={38} />
                </Cart>

                <h3>
                  <span>00</span>
                </h3>
              </CartContainer>
            </MobileBottom>
            {isSearchSelected && (
              <MobileSearch>
                <SearchBar />
              </MobileSearch>
            )}
            {isMenuSelected && <ProductsMenu />}

            {isCartSelected && (
              <MobileCart>
                <p>
                  Últimos Adicionados <span>×</span>
                </p>

                <div>Nenhum produto no carrinho.</div>
              </MobileCart>
            )}
          </MobileContainer>
        </>
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
                <a href="">Cadastre-se</a>
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
