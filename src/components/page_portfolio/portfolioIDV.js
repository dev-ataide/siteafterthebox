import '../../css/animated.css'
import { GalleryData } from './galleryData';
import { useState, useEffect } from 'react';

import video from '../../assets/video/videoSiteProlimp.mp4'

function PortfolioAFTB() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
collection.map((item, index) => (
  <li key={index}>
    <button onClick={() => { gallery_filter(item) }}>{item}</button>
  </li>
))
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem "><img  src={item.image}  /></div> )
          }
        
        </div>
      </div>
      <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <video  muted className="object-cover object-center mt-[15%] h-100% w-full" controls>
                                <source src={video} type="video/mp4" />
                              </video>      </div>
    </div>
  );
}
export default PortfolioAFTB;



{/*
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
        <div className="bg-transparent flex flex-col items-center justify-center ">
            <div className="xl:w-1/2 w-11/12  py-14">
                <h1 role="heading" tabIndex={0} className="text-4xl font-bold 2xl:leading-10 leading-0 text-center text-white animated-text-hero tracking-wide">
                  Marcas e Social Media.
                </h1>
                
            </div>

<div className="container mx-auto p-4 ">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={LogoGuille} 
            />
          </div>
          <div>
            <video controls loop
              className="h-auto max-w-full rounded-lg">
                <source src={logoAnimazone} type="video/mp4" />
            </video> 
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={millki} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={socialmediaprolimp1} 
            />
          </div>
       
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={logolegust} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={logosolar} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={logoxurras} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={socialmediaprolimp2} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={socialmediaprolimp3} 
            />
          </div>
        </div>
        <div className="md:grid hidden gap-4">
        <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={logobeecode} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={modzeria} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={gatomalo} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={logoLace} 
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={socialmediaprolimp4} 
            />
          </div>
         
        </div>
        {/* <div className="md:hidden grid gap-4 ">
         
         
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
             src={burguermaster} 
            />
          </div>
         
        </div>
       
       </div>
       </div>
   
   
               <section className="text-gray-600 body-font">
       <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center ">
       <h1 role="heading" tabIndex={0} className="text-4xl mt-10 font-bold 2xl:leading-10 leading-0 text-center text-white animated-text-hero tracking-wide">
       Os impactos poderosos de ter um site empresarial
       </h1>
         <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
         <video   className="object-cover object-center mt-[15%] h-100% w-full" controls>
                             <source src={video} type="video/mp4" />
                           </video>      </div>
         <div className={`animated-section ${isVisible ? 'visible' : ''} flex flex-wrap flex-row -mx-4 text-center mt-36 `}>
               <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".10s" >
                   <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                       <div className="inline-block text-orangeATB text-5xl">
                           <ion-icon name="timer-outline"></ion-icon>
                       </div>
                       <h3 className="text-lg leading-normal mb-2 font-semibold text-white">Presença Online 24/7:</h3>
                       <p className="text-gray-200">Um site proporciona acesso contínuo a informações sobre sua empresa. Clientes podem explorar seus produtos e serviços a qualquer hora do dia.</p>
                   </div>
               </div>
   
               <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                   <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                       <div className="inline-block text-orangeATB text-5xl">
                       <ion-icon name="earth-outline"></ion-icon>                    </div>
                       <h3 className="text-lg leading-normal mb-2 font-semibold text-white">Alcance Global</h3>
                       <p className="text-gray-200">Com um site, sua empresa pode atingir um público global, superando fronteiras geográficas. Isso é crucial em um mundo conectado digitalmente.</p>
                   </div>
               </div>
               <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 " data-wow-duration="1s" data-wow-delay=".1s" >
                   <div className="py-8 px-12 mb-12 bgpurpleATB50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                       <div className="inline-block text-orangeATB text-5xl">
                       <ion-icon name="megaphone-outline"></ion-icon>                    </div>
                       <h3 className="text-lg leading-normal mb-2 font-semibold  text-white">Credibilidade</h3>
                       <p className="text-gray-200">Um site bem projetado adiciona credibilidade, transmitindo profissionalismo e confiança. Os clientes confiam mais em empresas com uma presença online sólida.</p>
                   </div>
               </div>
            
              </div>
       </div>
     </section>
   
   
           </div>
           
   



////////////<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Portfolio</h1>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={prolimp}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={legust}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={solar}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={laceufpe}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={AFTB}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={AFTB}/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>       <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-center mt-4">
                <div className="mt-24">
                    <div className="flex items-end ">
                        <img tabIndex={0} src={logoAnimazone} alt="guy winking" className="w-48 h-48 rounded-lg" />
         
                        <img tabIndex={0} src={logobeecode} alt="girl with bluw background" className="w-48 h-48 rounded-lg" />
                    </div>
                </div>
                <div className="ml-6 mt-32">
                    <img tabIndex={0} src={logolegust} className="w-100 h-80 rounded-lg" alt="guy with sunglasses" />
                   
                </div>
                <div className="mt-14 ml-6">
                    <div className="lg:flex ">
                        <div>
                        <video  className="w-96 h-72 rounded-lg object-center object-fit" controls>
                          <source src={video} type="video/mp4" />
                        </video>
                        </div>
                        <div>
                            <div className="flex ml-6">
                                <img tabIndex={0} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDmHAyQCN0mM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=98de39c898e0e3934b4211d32a27c72e05dcc5ff97511a54e2ccb1e5d29c156e&ipo=images" className="w-20 h-24 rounded-lg ml-6" alt="woman" />
                            </div>
                            <img tabIndex={0} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDmHAyQCN0mM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=98de39c898e0e3934b4211d32a27c72e05dcc5ff97511a54e2ccb1e5d29c156e&ipo=images" alt="boy with blonde hair" className="ml-6 mt-6 w-48 h-32 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <img tabIndex={0} className="w-48 h-48 rounded-lg" src={LogoGuille} alt="young girl with red hair" />
                        <img tabIndex={0} className="w-72 h-36 rounded-lg ml-6" src={logosolar} alt="young girl with red hair" />
                    </div>
                </div>
            </div>
 */}