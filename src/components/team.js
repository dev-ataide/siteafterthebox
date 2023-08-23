import Clara from '../assets/equipe/Clara.jpeg'
import Guilherme from '../assets/equipe/Guilherme Ataide.jpeg'
import Edmundo from '../assets/equipe/edmundo.jpg'
import Julio from '../assets/equipe/julio.jpg'
import Wallace from '../assets/equipe/wallace.jpg'
import Maycon from '../assets/equipe/maycon.jpeg'

export const Team = () => {
  return (
<div className="w-full bg-transparent">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-1">
        <div className="text-center pb-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Conheça <span className='text-gradient'> Nosso Time </span> de Desenvolvimento!
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-bgpurpleATB  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Guilherme} />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Guilherme Ataide</p>
                    <p className="text-base text-gray-400 font-normal">Front-End Developer</p>
                </div>
            </div>
            <div className="w-full bg-bgpurpleATB rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Wallace} />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Wallace Michael</p>
                    <p className="text-base text-gray-400 font-normal">Graphic Designer <br/> Social Media </p>
                </div>
            </div>
            <div className="w-full bg-bgpurpleATB rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Clara} />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Clara Bezerra</p>
                    <p className="text-base text-gray-400 font-normal"> Marketing </p>
                </div>
            </div>
            <div className="w-full bg-bgpurpleATB rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Maycon} />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Maycon Yuri</p>
                    <p className="text-base text-gray-400 font-normal">Back-End Developer </p>
                </div>
            </div>
            <div className="w-full bg-bgpurpleATB rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Julio} />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Júlio Gabriel</p>
                    <p className="text-base text-gray-400 font-normal">Back-End Developer </p>
                </div>
            </div>
            <div className="w-full bg-bgpurpleATB rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={Edmundo}  />
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Edmundo Simeon</p>
                    <p className="text-base text-gray-400 font-normal">Dev Ops <br/> Database Administrator </p>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}
