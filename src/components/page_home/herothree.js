import IlustracaoMeeting from '../../../src/assets/illustracoes/meeting.png'
import styles from '../../constants/styles'
import { useState, useEffect } from 'react';
import '../../css/animated.css'


export const HeroThree = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(document.querySelector('.animated-section3'));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container flex flex-col p-10 py-10 mx-auto space-y-6 md:h-[32rem] md:py-16 md:flex-row md:items-center md:justify-around sm:flex-row justify-center align-middle z-[1] ">
    <div className={`animated-section3 text-4xl lg:text-6xl z-10 text-white ${isVisible ? 'visible' : ''}`}>
    <header className="text-center mx-auto mb-12 lg:px-20">
                <h2 className="text-5xl leading-normal mb-2 font-bold text-title">Você no comando!</h2>
               
                <p className="text-paragraph leading-relaxed font-light text-2xl mx-auto pb-2 ">Fique por dentro de cada etapa do projeto!</p>
            </header>
        <h1  className={`${styles.paragraph} pt-1`} >
        Na After the Box, usamos sprints para dividir os projetos em etapas gerenciáveis.<br/>
        Apresentamos os resultados ao cliente ao final de cada sprint para revisão e aprovação.   <br/> 
        Com nosso sistema de pagamentos progressivos, o cliente paga parcialmente após cada entrega aprovada.   <br/>
        Isso oferece controle financeiro e possibilita dividir o investimento ao longo do projeto.          </h1>
    </div>

    <div className='flex justify-center items-center z-10 m-10 '>
        <img src={IlustracaoMeeting} />
    </div>
</div>
  )
}
