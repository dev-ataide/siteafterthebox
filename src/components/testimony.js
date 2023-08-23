import CeoLeGust from '../../src/assets/photoClient/foto naum gustavo.jpg'
import CeoProlimp from '../../src/assets/photoClient/foto Givailton Cordeiro.jpeg'
import Animazone from '../../src/assets/logo clientes/logoanimazone.png'

export const Testimony = () => {
  return (

<section className="bg-transparent">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="items-end justify-between sm:flex">
      <div className="max-w-xl">
        <h2 className="text-3xl text-white font-bold tracking-tight sm:text-5xl">
          O que dizem <br/> nossos clientes :
        </h2>
      </div>  
    </div>

    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-10">

    <div className="flex h-full w-[100%] flex-col justify-between bgpurpleATB50  p-12 rounded-3xl">
        <div>
          <div className="flex gap-0.5 text-green-500">
          <div className="max-w-2xl mx-auto">

          <div className="flex items-center space-x-4">
            <img className="w-24 h-24 rounded-full" src={Animazone} alt="Rounded avatar"/>
          </div>

          </div>
          </div>

          <div className="mt-4">
           
            <p className="mt-4 text-white">
            Capturaram perfeitamente a essência da nossa empresa, desde o conceito até o produto final. O respeito ao prazo e a atenção conosco durante o processo nos causou uma ótima experiência.
            </p>
            
          </div>
        </div>

        <footer className="mt-8  text-white">
          <h1 className='text-xl'>Guilherme
            </h1>
            <p >
              Dono da <span className='text-orangeATB' > Animazone </span>
            </p>
        </footer>



      </div>

      <div className="flex h-full w-[100%] flex-col justify-between bgpurpleATB50  p-12 rounded-3xl">
        <div>
          <div className="flex gap-0.5 text-green-500">
          <div className="max-w-2xl mx-auto">

          <div className="flex items-center space-x-4">
            <img className="w-24 h-24 rounded-full" src={CeoLeGust} alt="Rounded avatar"/>
          </div>

          </div>
          </div>

          <div className="mt-4">
           
            <p className="mt-4 text-white">
            Cada etapa do projeto foi cuidadosamente planejada e executada, resultando em uma Identidade Visual que superou amplamente minhas expectativas.
            </p>
            
          </div>
        </div>

        <footer className="mt-8  text-white">
          <h1 className='text-xl'>Naum Gustavo
            </h1>
            <p >
              Ceo <span className='text-orangeATB' >  Leust </span>
            </p>
        </footer>



      </div>

      <div className="flex h-full w-[100%] flex-col justify-between bgpurpleATB50  p-12 rounded-3xl">
        <div>
          <div className="flex gap-0.5">
          <div className="max-w-2xl mx-auto">

          <div className="flex items-center space-x-4">
            <img className="w-24 h-24 rounded-full" src={CeoProlimp} alt="Rounded avatar"/>
          </div>

          </div>
          </div>

          <div className="mt-4">
           
            <p className="mt-4 text-white">
            A atenção aos detalhes, a criatividade e a comunicação impecável fizeram do processo de desenvolvimento uma experiência incrível.            </p>
            
          </div>
        </div>

        <footer className="mt-8  text-white">
          <h1 className='text-xl'>Givailton Cordeiro
            </h1>
            <p >
              Ceo <span className='text-orangeATB' >  Prolimp </span>
            </p>
        </footer>



      </div>

      
    </div>
    <p className='flex mt-10 justify-center items-center text-center text-gray-400 hover:text-white'>Faça parte do grupo de clientes satisfeitos e descubra como podemos ajudar você a alcançar o sucesso online!</p>

  </div>


</section> 
)
}
