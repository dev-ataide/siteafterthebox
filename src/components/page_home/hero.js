import Logo from '../../assets/logo atb/Logogrande.png'
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect } from 'react';
import styles from '../../constants/styles';

import '../../css/animated.css'

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
    <h1 className="animated-text-hero init-hidden ss:text-left xs:text-center font-semibold  tracking-wide text-gradient dark:text-white">
    A Próxima
    </h1>
      <h1 className="z-10 font-semibold tracking-wide xs:text-center ss:text-left dark:text-white">
         Geração De: <br/> <span className='z-10 my-5'>
                <Typewriter
                  words={['WebSites', 'Sistemas de Gestão', 'Sistemas de Agendamento', 'Identidades Visuais', 'Marcas', 'Empresas']}
                  loop={10}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
            </span> 
      </h1>
        <p  className={`${styles.paragraph} pt-10`} > Com expertise em desenvolvimento de websites, criação de marcas e estratégias de social mídia, <br/> ajudamos sua empresa a construir uma presença online impactante. <br/> Esteja à frente da concorrência, conquiste novos clientes e fortaleça seu negócio no ambiente digital.</p>
    </div>

   
<div className='flex justify-center items-center z-10'>
            <img src={Logo} className='z-10 ss:w-auto xs:w-[50%]' />
        </div>
</div>

  );
};

export default Hero;
