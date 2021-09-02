/* eslint-disable no-use-before-define */
import styled from 'styled-components';

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 25px;
  transition: all 0.4s linear;
`;

export const Container = styled.div`
  :hover {
    button {
      transition: all 0.4s linear;
      opacity: 1;
    }

    ${ProductInfo} {
      background-color: ${({ theme }) => theme.colors.headerBG};
    }
  }
`;

export const ProductImage = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./productBg.png');
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const BlueLabel = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.menu};
  text-decoration: none;
  a,
  p {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.menu};
    text-decoration: none;
  }
`;

export const GrayLabel = styled.p`
  font-size: 11px;
  color: #7c7c7c;
  line-height: 11px;
  padding: 3px 0px;

  span {
    color: #3399cc;
  }
`;

export const PriceBox = styled.div`
  padding: 5px 0px;
`;

export const Price = styled.p`
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  line-height: 57px;
  color: ${({ theme }) => theme.colors.menu};
  text-decoration: none;
  letter-spacing: -3px;
  padding-bottom: 3px;
`;
export const TypeOfPayment = styled.p`
  font-size: 11px;
  color: #7c7c7c;
  line-height: 11px;
  padding: 3px 0px;
`;

export const Details = styled.button`
  margin: 20px 0px;
  color: #885f23;
  text-transform: uppercase;

  line-height: 19px;
  padding: 7px 15px;
  background-color: #ff9900;
  text-align: center;
  border: 0;
  transition: all 0.8s linear;
  font: 700 12px Titillium Web, sans-serif;

  opacity: 0;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.menu};
    cursor: pointer;
  }
`;

export const ProductLabel = styled.div`
  background: url('./massaIcon.png') no-repeat left top;
  width: 44px;
  height: 47px;
  float: right;
  top: 0px;
  right: -8px;
  bottom: 0;
  position: absolute;
`;
