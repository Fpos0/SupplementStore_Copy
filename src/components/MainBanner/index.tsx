import React, { useState, useEffect } from 'react';
// import bannerv1 from '../../assets/bannerv1.png';
// import bannerv2 from '../../assets/bannerv2.png';
// import Image from 'next/image';

import { useTransition, animated } from 'react-spring';
import { Container, ArrowLeft, ArrowRight, Carrousel } from './styles';

export function MainBanner() {
  const images = [
    'https://www.madrugaosuplementos.com.br/media/banner/banner.png',
    'https://www.madrugaosuplementos.com.br/media/banner/banner_6.jpg'
  ];
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: 'none' },
    config: { duration: 1000 }
  });
  useEffect(() => {
    const t = setInterval(
      () => setIndex(state => (state + 1) % images.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);
  function toogleBanner() {
    console.log(index);
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }

  return (
    <Container>
      <ArrowLeft />
      <ArrowRight onClick={toogleBanner} />

      <Carrousel>
        {transitions((style, i) => (
          <animated.img
            src={images[i]}
            style={{
              ...style
            }}
          />
        ))}
      </Carrousel>
    </Container>
  );
}
