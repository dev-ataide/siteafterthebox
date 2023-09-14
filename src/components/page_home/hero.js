import img from '../../assets/illustracoes/home.jpeg'
import { useState, useEffect } from 'react';
import styles from '../../constants/styles';

import '../../css/animated.css'
import '../../index.css'
import '../../App.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(document.querySelector('.animated-hero'));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="container flex flex-col p-10 py-10 mx-auto space-y-6 md:h-[32rem] md:py-16 md:flex-row md:items-center md:justify-around sm:flex-row justify-center align-middle z-[1] ">
    <div className={`animated-hero text-4xl lg:text-6xl z-10 text-white ${isVisible ? 'visible' : ''}`}>
    <h1 className="title animated-text-hero init-hidden ss:text-left xs:text-center font-bold tracking-wide text-gradient text-5xl">
    A Próxima
    </h1>
      <h1 className="z-10 font-semibold tracking-wide xs:text-center ss:text-left text-5xl text-title title">
         Geração de : <br/>
         Marcas, Sites e <br/> Sistemas

      </h1>
        <p  className={`${styles.paragraph} text-paragraph pt-10 `} > Na After The Box, nós transformamos ideias em presença online impactante. <br/> Combinamos criatividade e estratégia para criar sites e marcas que conquistam corações e mentes</p>
        <button >
          <a className='btn-get-started' >Entre em contato</a>
        </button>
    </div>



   
    <div className='flex justify-center items-center z-10 m-10 '>
        <img src={img} />
    </div>
</div>

  );
};

export default Hero;
