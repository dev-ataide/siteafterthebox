import IlustracaoDashboard from '../../../src/assets/illustracoes/dashboards.png'
import styles from '../../constants/styles'
import { useState, useEffect } from 'react';
import '../../css/animated.css'

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

    observer.observe(document.querySelector('.animated-section2'));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="container flex flex-col p-10 py-0 mx-auto space-y-6 md:h-[32rem] md:py-16 md:flex-row-reverse md:items-center md:justify-around sm:flex-row justify-center align-middle z-[1] ">
        <div className= {`animated-section2 text-3xl lg:text-6xl z-10 text-whites ${isVisible ? 'visible' : 'inVisible'}`}>
          <h1 className="init-hidden ss:text-left xs:text-center font-semibold  tracking-wide text-white">
            Expanda sua visibilidade
          </h1>
              <h1 className=" ss:text-left xs:text-center font-semibold  tracking-wide text-white text-gradient">
                Online
              </h1>
              <h1 className=" ss:text-left xs:text-center font-semibold tracking-wide text-white ">
                e alcance 
              </h1>
              <h1 className=" ss:text-left xs:text-center font-semibold tracking-wide text-white text-gradient ">
                novas oportunidades
              </h1>
            <h1  className={`${styles.paragraph} pt-10`} >
            Aproveite as oportunidades do mundo digital para expandir seu alcance <br/>
            e alcançar um novo patamar. Com expertise em desenvolvimento <br/>
            de websites, marketing digital e estratégias de mídia social,   <br/>
            ajudamos sua empresa a construir uma presença online impactante.   <br/>
            Esteja à frente da concorrência, conquiste novos clientes e fortaleça   <br/> seu negócio no ambiente digital.              
              </h1></div>

        <div className='flex justify-center items-center z-10 m-10 '>
            <img src={IlustracaoDashboard} />
        </div>
    </div>
  )
}
