import prolimp from '../assets/logo clientes/logoprolimp.png'
import legust from '../assets/logo clientes/logolegust.png'
import solar from '../assets/logo clientes/logosolar.png'
import laceufpe from '../assets/logo clientes/logolaceufpe.png'
import styles from "../constants/styles"


export const Midsection = () => {
  return (
    <section className={`${styles.flexCenter} my-28 bg-bgpurpleATB`}>
        <div className={`${styles.flexCenter} flex-wrap w-full `}>
            <div className={`${styles.flexCenter}flex-1  gap-10  `}>
            <img src={legust} className="sm:w-[192px] ss:w-[100px]  w-[70px] object-contain"></img>
            <img src={prolimp} className="sm:w-[192px] ss:w-[100px]  w-[70px] object-contain"></img>
            <img src={laceufpe} className="sm:w-[192px] ss:w-[100px]  w-[70px] object-contain"></img>
            <img src={solar} className="sm:w-[192px] ss:w-[100px]  w-[70px] object-contain"></img>
            </div>
        </div>
    </section>
  )
}

// <section className="z-10 bg-bgpurpleATB flex justify-center mb-20 ">
// <div className="z-10 container px-6 py-0 mx-auto">
//     <div className="z-10 grid grid-cols-4 xl:grid-flow-col gap-8 ">
//         <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
//             <img  src={legust} alt="Logo" className="w-[50%] h-auto " />
//         </div>

//         <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
//         <img  src={prolimp} alt="Logo" className="w-[50%] h-auto " />
//         </div>

//         <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
//         <img  src={laceufpe} alt="Logo" className="w-[90%] h-auto " />
//         </div>

//         <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1 ">
//         <img  src={solar} alt="Logo" className="w-[50%] h-auto " />
//         </div>
        
//         {/* <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
//         <img  src={logo} alt="Logo" className="w-[50%] h-auto " />
//         </div> */}
//     </div>
// </div>
// </section>