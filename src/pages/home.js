import Nav from '../components/nav'
import Hero from '../components/page_home/hero'
import { Team } from '../components/team'
import { Midsection } from '../components/midsection'
import '../App.css'
import { HeroTwo } from '../components/page_home/heroTwo'
import { Footer } from '../components/footer'
import styles from '../constants/styles'
import { HeroThree } from '../components/page_home/herothree'
import { Testimony } from '../components/testimony'
import { Lights } from '../constants/light'
import { Benefits } from '../components/page_home/benefits'
// import { AppAgendamento } from '../components/page_home/outraideiapfuturo'

export const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
        <div className="">
            <Nav />
        </div>
        <div className={`${styles.flexStart} mt-56 z-[10]` } >
            <div className={`${styles.boxWidth}`}>
            <Hero />
            </div>
        </div>
        <div className={`${styles.flexStart} my-24` } >
            <div className={`${styles.boxWidth}`}>
            <HeroTwo />
            </div>
        </div>
        <div className={`${styles.flexStart} my-24` } >
            <div className={`${styles.boxWidth}`}>
            <HeroThree />
            </div>
        </div>


        <div className={`${styles.flexStart} my-24` } >
            <div className={`${styles.boxWidth}`}>
            <Benefits />
            </div>
        </div>


        <div className='' >
            <Midsection />
        </div>
                

        <div className={`${styles.flexStart} top-0 my-24` } >
            <div className={`${styles.boxWidth}`}>
            <Testimony />
            </div>
        </div>

        <div className={`${styles.flexStart} my-24` } >
            <div className={`${styles.boxWidth}`}>
            <Team />
            </div>
        </div>

                
        <div className='mt-20' >
            <Footer />
        </div>
                
       <div>
        <Lights/>
       </div>
    </div>
  )
}
        {/* <div className='margin-section' >
            <Hero/>
        </div> */}