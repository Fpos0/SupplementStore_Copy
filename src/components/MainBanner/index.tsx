import React, { useState, useEffect, useRef } from 'react';
import bannerv1 from '../../assets/bannerv1.png';
import bannerv2 from '../../assets/bannerv2.png';
import Image from 'next/image';
import gsap from 'gsap';
import { useTransition, animated } from 'react-spring';
import { Container, ArrowLeft, ArrowRight, Items, Carrousel } from './styles';

const slides = [
  {
    image: bannerv1
  },
  {
    image: bannerv2
  }
];
/* <Items>
        <div></div>
        <div></div>
      </Items> */

export function MainBanner() {
  // const fadeOut = (index: number, duration: number) => {
  //   gsap.to(q(`.img${index}`), {
  //     opacity: 0,
  //     duration,
  //     display:"none"
  //   });

  // };

  /* <Carrousel style={props} ref={photoRef}>
          <Image src={bannerv1} />
        </Carrousel> */

  // const fadeIn = (index: number, duration: number) => {
  //    gsap.from(q(`.img${index}`), {
  //     opacity: 0,
  //     duration,
  //   });
  //   gsap.to(q(`.img${index}`), {
  //     opacity: 1,
  //     duration,
  //   });
  // };
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
