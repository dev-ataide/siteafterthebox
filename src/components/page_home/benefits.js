// import styles from "../../constants/styles"
import 'animate.css';
// import styles from "../../constants/styles"
import '../../css/animated.css'
import { useState, useEffect } from 'react';

export const Benefits = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });
  
      observer.observe(document.querySelector('.animated-section'));
  
      return () => observer.disconnect();
    }, []);

  return (
    <div id="services" className="pt-20 pb-8 md:pt-16 md:pb-0 bg-transparent">

        <div className="container xl:max-w-5xl mx-auto px-4">
            <header className="text-center mx-auto mb-12 lg:px-20">
                <h2 className="text-5xl leading-normal mb-2 font-bold text-gradient">Nossos Diferenciais: </h2>
               
                <p className="text-gray-200 leading-relaxed font-light text-xl mx-auto pb-2">Soluções Inovadoras para o Seu Sucesso Digital!</p>
            </header>

            <div className={`animated-section ${isVisible ? 'visible' : ''} flex flex-wrap flex-row -mx-4 text-center `}>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".10s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="timer-outline"></ion-icon>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-white">Entregas Rápidas</h3>
                    <p className="text-gray-200">Soluções para impulsionar seu negócio em tempo recorde.</p>
                </div>
            </div>

            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="finger-print-outline"></ion-icon>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-white">Identidade Visual Única</h3>
                    <p className="text-gray-200">Marcas memoráveis e autênticas que se destacam na concorrência.</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="rocket-outline"></ion-icon>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold  text-white">Sistema sob demanda</h3>
                    <p className="text-gray-200">Soluções customizadas para atender suas necessidades.</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold  text-white">Design Responsivo e Intuitivo</h3>
                    <p className="text-gray-200">Priorizamos a usabilidade e legibilidade, aumentando a interação e o engajamento do usuário.</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="chatbubbles-outline"></ion-icon>                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold  text-white">Experiência Personalizada</h3>
                    <p className="text-gray-200">Encontros semanais durante todo o desenvolvimento para uma maior transparência.</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-orangeATB text-5xl">
                        <ion-icon name="people-outline"></ion-icon>                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold  text-white">Suporte a qualquer hora</h3>
                    <p className="text-gray-200">Suporte dedicado para garantir que suas dúvidas e necessidades sejam resolvidas o mais rápido.</p>
                </div>
            </div>
           </div>
        </div>
    </div>
    )
}
