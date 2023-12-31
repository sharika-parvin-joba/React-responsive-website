import React from 'react';
import styles from './style';
import { Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonial,Clients,
  CTA, Footer } from './components';


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
             <Navbar></Navbar>    
        </div>
     </div>

     <div className={`bg-primary ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
       </div>
     </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonial></Testimonial>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>

       </div>
     </div>
    </div>
  )
}

export default App
