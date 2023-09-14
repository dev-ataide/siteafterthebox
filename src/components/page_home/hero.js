import img from "../../assets/illustracoes/home.jpeg";
import { useState, useEffect } from "react";
import styles from "../../constants/styles";

import "../../css/animated.css";
import "../../index.css";
import "../../App.css";

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

    observer.observe(document.querySelector(".animated-hero"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container flex flex-col p-10 py-5 mx-auto space-y-6 md:h-[32rem] md:py-16 md:flex-row md:items-center md:justify-around sm:flex-row justify-center align-middle z-[1] ">
      <div
        className={`animated-hero text-4xl lg:text-6xl z-10 text-white ${
          isVisible ? "visible" : ""
        }`}
      >
        <header className="">
          <h2 className="init-hidden ss:text-left xs:text-center font-bold tracking-widefont-bold text-title">
            Sua empresa no mundo digital!
          </h2>
        </header>
        <p className={`${styles.paragraph} text-paragraph pt-10 `}>
          {" "}
          Na After The Box, nós transformamos ideias em presença online
          impactante. <br /> Combinamos criatividade e estratégia para criar
          sites e marcas que conquistam corações e mentes
        </p>
       
          <a className="btn-get-started" href='https://wa.me/5581986559883' target="_blank" rel="noreferrer" >
            <button href='https://wa.me/5581986559883' target="_blank" rel="noreferrer" >Entre em contato</button>  
          </a>
      </div>

      <div className="flex justify-center items-center z-10 m-10 w-[70%] ">
        <img src={img} />
      </div>
    </div>
  );
};

export default Hero;
