import Link from 'next/link';
import classes from './HeroImage.module.css'

export default function HeroImage() {

    return (

        <div className={classes["Header_main-image__N+9Qt"]}>
  
        <section className={classes.container}>

        <h2>Nuova offerta!</h2> 

        <div className={classes.content}>

    
        
            <img src='\off5-removebg-preview.jpg'></img>
         
         
           <div className={classes.offerText}>
                  <p>Serie: <span></span>Rehau Euro Design 70</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>GT 32 mm, LowE 4 + Clar 4 + LowE 4</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Z60 ED70 </p>
                  <p>Trasmittanza Uw: <span></span>1.18 W/m²K</p>
                  <p>Superficie: <span></span>3.37 mq m²</p>
                  <p className={classes.total}>Totale: <span></span>3460 EUR</p>
               </div>
        
        </div>
         <h3> <Link href="/LE%20NOSTRE%20OFFERTE">Vedi tutte le nostre offerte!</Link></h3> 
        </section>
        </div> 
   )

}

