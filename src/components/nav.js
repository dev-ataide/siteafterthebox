import { useState } from 'react'
import logo from '../assets/logo atb/logo.png'
import '../App.css'


const Nav = () => {
  let Links = [
    {name: 'Home', links: '/'},
    {name: 'Portfólio', links: '/portfolio'},
    // {name: 'Solution', links: '/'},
  ]

  let [menuOn, setMenuOn] = useState(false)
      


  return (
    <div className='shadow-md w-full top-0 left-0 z-[1] bg-bgNav absolute ' >
      <div className=' flex sm:flex py-3 sm:px-10 item-center justify-around'>
        {/* logo */}
        <div className='cursor-pointer flex items-center ml-5 pt-1 m-auto ' > 
          <img  src={logo} alt="Logo" className="w-auto h-auto " />
        </div>
        {/* Links */}

        <div onClick={()=>setMenuOn(!menuOn)} className='text-3xl text-white absolute right-8 top-8 cursor-pointer sm:hidden' >
          <ion-icon name={menuOn ? 'close-circle-outline':'menu'} ></ion-icon>
        </div>


        <ul className={`sm:flex top-20 sm:items-center sm:pb-0 pb-2 absolute sm:static sm:z-auto z-[-1] left-0 w-full sm:w-auto  sm:bg-transparent bg-bgpurpleATB sm:pl-10 pl-9 transition-all duration-700 ease-out ${menuOn ? 'top-20' : 'left-[-900px]' }` }>
          {
            Links.map((links)=>(
              <li key={links.name} className=' bg-transparent sm:flex sm:mr-10  sm:ml-8 text-xl sm:my-5 my-7 ' >
 <a className='  bg-transparent text-gray-200 hover:text-white font-mono lg:text-gray-300  lg:hover:text-white ' href={links.links}> {links.name}</a>              </li>
            ))
          }
          <button className=' bg-orangeATB p-3 rounded-3xl text-gray-200 hover:text-white font-mono lg:text-gray-300  lg:hover:text-white ' >
            <a className='font-mono' href='https://wa.me/5581986559883' target="_blank" rel="noreferrer" >Entre em contato</a>
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Nav;