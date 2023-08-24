import PortfolioAFTB from '../components/page_portfolio/portfolioIDV';
import styles from '../constants/styles'
import Nav from '../components/nav';
// import { LightsPortfolio } from '../constants/lightPortfolio';
import { Footer } from '../components/footer';

export default function Portfolio() {
 return (
    <div className='bg-primary w-full overflow-hidden '>
    <div>
        <Nav />
    </div>
    <div className={`${styles.flexStart} mt-36 z-[10]` } >
            <div className={`${styles.boxWidth}`}>
            <PortfolioAFTB />
            </div>
        </div>
        <div className='mt-20' >
            <Footer />
        </div>

     

   </div>
 );
}

