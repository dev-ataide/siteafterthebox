import IlustracaoDashboard from "../../../src/assets/illustracoes/cardsservicos.png";
import styles from "../../constants/styles";
import { useState, useEffect } from "react";
import "../../css/animated.css";

export const HeroTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(document.querySelector(".animated-section2"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container flex flex-col p-10 py-10 mx-auto space-y-6 md:h-[32rem] md:py-16 md:flex-row md:items-center md:justify-around sm:flex-row justify-center align-middle z-[1] ">
      <div
        className={`animated-section2 text-4xl lg:text-6xl z-10 text-white ${
          isVisible ? "visible" : ""
        }`}
      >
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-5xl leading-normal mb-2 font-bold text-title">
            Sua Marca é única!{" "}
          </h2>

          <p className="text-paragraph leading-relaxed font-light text-2xl mx-auto pb-2 text-para">
            Seu site também precisa ser!
          </p>
        </header>
        <p className={`${styles.paragraph} text-paragraph`}>
          No mundo competitivo da web, sua marca precisa se destacar. Na After
          The Box, não apenas seguimos tendências, nós as criamos. <br /> Sua
          marca é única, e seu site também deve ser!{" "}
        </p>
      </div>

      <div className="flex justify-center items-center z-10 m-10 ">
        <img src={IlustracaoDashboard} />
      </div>
    </div>
  );
};
