import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const Carrousel = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  width: 30px;
  height: 40px;
  margin-top: -20px;
  background: url('https://www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/mirasvit/banner/arrows_large.png');
  z-index: 10;
  opacity: 0.85;
  :hover {
    opacity: 0.98;
  }
`;

export const ArrowRight = styled.div`
  right: 0px;
  transform: rotateY(180deg);
  position: absolute;
  top: 50%;
  width: 30px;
  height: 40px;
  margin-top: -20px;
  background: url('https://www.madrugaosuplementos.com.br/skin/frontend/madrugao/default/images/mirasvit/banner/arrows_large.png');
  z-index: 10;
  opacity: 0.85;
  :hover {
    opacity: 0.98;
  }
`;

export const Items = styled.div`
  position: absolute;
  bottom: 17px;
  right: 25px;
  z-index: 10;
  div {
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.colors.headerGray};
  }
`;
