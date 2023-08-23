import logo from '../assets/logo atb/Logogrande.png'
import '../App.css'


export const Footer = () => {
  return (
    <div className="flex items-end w-full bottom-0">
    
        <footer className="w-full text-gray-700  bg-bgpurpleATB body-font">
            <div className="container flex flex-col flex-wrap px-5 pb-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink mx-auto items-center justify-center text-center my-14 ">
                    <a className="flex items-center justify-center font-medium text-white title-font md:justify-start"/>
                       <div className='flex justify-center items-center w-full'>
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-center">
                                <a>
                                <img className="object-center object-cover rounded-full h-36 w-36" src={logo} />
                                </a>
                            </span>   
                        </div>     
                </div>
                <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 pt-16 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Sobre</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a href='/about' className="text-gray-500 cursor-pointer hover:text-white">Nossa historia</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white">Trabalhe conosco!</a>
                            </li>
                          
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 pt-16 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Suporte</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white">Contate o suporte através do :</a>
                                <li className="mt-3 hover:text-white cursor-pointer">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                                </li>
                                <li className="mt-3 hover:text-white cursor-pointer">
                                <ion-icon name="logo-Instagram"></ion-icon>
                            </li>
                            </li>
                          
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 pt-16 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Sistemas para sua empresa:
                        </h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white">Chatbot Whatsapp e Telegram</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white">Gestão Financeira</a>
                            </li>
                            {/* <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white">Reports </a>
                            </li> */}
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 pt-16 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Entre em contato!</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3 cursor-pointer">
                                <a className="text-gray-500 cursor-pointer hover:text-white ">Envie uma mensagem para o whatsapp: Clique no Icone!</a>
                            </li>
                            <li className="mt-3 hover:text-white cursor-pointer">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-white ">Ou Acesse o nosso Instagram!</a>
                            </li>
                            <li className="mt-3 hover:text-white cursor-pointer">
                                <ion-icon name="logo-Instagram"></ion-icon>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
         



  <div> 
    <div className='bg-white h-02 mb-8 w-full '></div>

        <div className="mb-3 gap-5  flex justify-center ">
        <a href="#!" className=" text-neutral-800 dark:text-neutral-200  hover:text-orangeATB">
            <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        
        <a href="#!" className=" text-neutral-800 dark:text-neutral-200  hover:text-orangeATB">
        <ion-icon name="logo-instagram"></ion-icon>
        </a>
        
        
        </div>
    </div>

  <div className="bg-transparent bottom-0">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm  text-gray-500 capitalize text-center">After The Box ©2023 <br/> Todos os Direitos Reservados</p>
                </div>
            </div>
</footer>
    </div>
      )
}
