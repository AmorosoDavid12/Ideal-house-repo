import Head from "next/head";
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import React, { useState } from 'react';


function Contatti() {

   return (<>
      <Head>
         <title>Ideal House : Infissi PVC</title>
         <meta name="description" content="Brows a huge lis of highly active react meetup"></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* <HeroImage
         img={'contatti/bigstock-rear-view-employees-of-the-cal-263173105-e1576815389726.jpg'}
         title={'Contatti'}
         category={'Contatti e Area legale'}
      /> */}


      <section className={classes.section}>

         <div className={classes.wrapperOffer}>
            <h2>1</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg1} src="\Offerte\off1.png"></img>
               <div className={classes.offerText1}>
                  <p>Serie: <span></span>Gealan S9000</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>52 mm, LowE +Float+3.13 Float [AG+WE]</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Telaio 70- Gealan S9000</p>
                  <p>Anta: <span></span>Canat Z82-Gealan S9000</p>
                  <p>Trasmittanza Uw: <span></span>0.99 W/m²K</p>
                  <p>Superficie: <span></span>0.840 m²</p>
                  <p className={classes.total}>Totale: <span></span>197 EUR</p>
               </div>
            </div>
         </div>
         <div className={classes.wrapperOffer}>
            <h2>2</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg2} src="\Offerte\off2.png"></img>
               <div className={classes.offerText2}>
                  <p>Serie: <span></span>Gealan S9000</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>52 mm, LowE +Float+3.13 Float [AG+WE]</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Telaio 70- Gealan S9000</p>
                  <p>Anta: <span></span>Canat Z82-Gealan S9000</p>
                  <p>Trasmittanza Uw: <span></span>0.99 W/m²K</p>
                  <p>Superficie: <span></span>1.60 mq m²</p>
                  <p className={classes.total}>Totale: <span></span>319 EUR</p>
               </div>
            </div>
         </div>
         <div className={classes.wrapperOffer}>
            <h2>3</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg3} src="\Offerte\off3.png"></img>
               <div className={classes.offerText2}>
                  <p>Serie: <span></span>Gealan S9000</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>52 mm, LowE +Float+3.13 Float [AG+WE]</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Telaio 70- Gealan S9000</p>
                  <p>Anta: <span></span>Canat Z82-Gealan S9000</p>
                  <p>Trasmittanza Uw: <span></span>0.96 W/m²K</p>
                  <p>Superficie: <span></span>2.40 mq m²</p>
                  <p className={classes.total}>Totale: <span></span>430 EUR</p>
               </div>
            </div>
         </div>
         <div className={classes.wrapperOffer}>
            <h2>4</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg4} src="\Offerte\off4.png"></img>
               <div className={classes.offerText4}>
                  <p>Serie: <span></span>Rehau Euro Design 70</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>GT 32 mm, LowE 4 + Clar 4 + LowE 4</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Z60 ED70 </p>
                  <p>Trasmittanza Uw: <span></span>1.194 W/m²K</p>
                  <p>Superficie: <span></span>2.01 mq m²</p>
                  <p className={classes.total}>Totale: <span></span>320 EUR</p>
               </div>
               </div>
         </div>
         <div className={classes.wrapperOffer}>
            <h2>5</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg5} src="\Offerte\off5.png"></img>
               <div className={classes.offerText2}>
                  <p>Serie: <span></span>Rehau Geneo HST</p>
                  <p>Vetro: <span></span>GT44mm, LowE 6 + Clar6 + Solar4S 6</p>
                  <p>Marca Ferramenta: <span></span>Siegenia 15FAV Bianco</p>
                  <p>Maniglia: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Telaio 76MD guarnizione mediana</p>
                  <p>Trasmittanza Uw: <span></span>1.009 W/m²K</p>
                  <p>Superficie: <span></span>7.70 m²</p>
                  <p>Peso: <span></span>134.7 kg</p>
                  <p className={classes.total}>Totale: <span></span>3800 EUR</p>
               </div>
            </div>
         </div>
         <div className={classes.wrapperOffer}>
            <h2>6</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg6} src="\Offerte\off6.png"></img>
               <div className={classes.offerText5}>
                  <p>Serie: <span></span>Rehau Euro Design 70</p>
                  <p>Colore di base: <span></span>Bianco con guarnizioni grigie co-estruse </p>
                  <p>Colore interno: <span></span>Bianco</p>
                  <p>Colore esterno: <span></span>Bianco</p>
                  <p>Vetro: <span></span>GT 32 mm, LowE 4 + Clar 4 + LowE 4</p>
                  <p>Maniglia finestra: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Z60 ED70 </p>
                  <p>Trasmittanza Uw: <span></span>1.18 W/m²K</p>
                  <p>Superficie: <span></span>3.37 mq m²</p>
                  <p className={classes.total}>Totale: <span></span>460 EUR</p>
               </div>
            </div>
         </div>
        {/*  <div className={classes.wrapperOffer}>
            <h2>7</h2>
            <div className={classes.parallelLines}></div>
            <div className={classes.offerWrapper}>
               <img className={classes.offerImg4} src="\Offerte\off7.png"></img>
               <div className={classes.offerText7}>
                  <p>Serie: <span></span>Gealan S9000</p>
                  <p>Vetro: <span></span>T44/F4+F4+LE4 Argon</p>
                  <p>Marca Ferramenta: <span></span>Siegenia 15FAV Bianco</p>
                  <p>Maniglia: <span></span>Maniglia titanio opaco Secustik</p>
                  <p>Telaio: <span></span>Telaio 76MD guarnizione mediana</p>
                  <p>Trasmittanza Uw: <span></span>1.01 W/m²K</p>
                  <p>Superficie: <span></span>1.920 m²</p>
                  <p>Peso: <span></span>68.81 kg</p>
                  <p className={classes.total}>Totale: <span></span>474.38 EUR</p>
               </div>
            </div>
         </div> */}
      </section>

      <InfoTel />
      <Footer />

   </>)
}

export default Contatti