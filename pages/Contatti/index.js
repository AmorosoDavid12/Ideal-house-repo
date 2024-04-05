import Head from "next/head";
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import React, { useState } from 'react';


function Contatti() {
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };
   return (<>
      <Head>
         <title>Ideal House : Infissi PVC</title>
         <meta name="description" content="Brows a huge lis of highly active react meetup"></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HeroImage
         img={'contatti/bigstock-rear-view-employees-of-the-cal-263173105-e1576815389726.jpg'}
         title={'Contatti'}
         category={'Contatti e Area legale'}
      />


      <section className={classes.section}>
         <h2>Ideal House Buisness SRL</h2>
         <div className={classes.wrapper}>
            <div className={classes.row1}>
               <h3 style={{ fontWeight: '550', fontSize: '26px' }}>Sede Legale</h3>
               <p>Bulevardul Iuliu Maniu 18-20</p>
               <p>Bucarest 061344</p>
               <p style={{color:"black",fontStyle: 'normal', paddingTop:'5px' }}>Codice C.U.I: 38639290</p>
            </div>
            <div className={classes.row2}>
               <span className={classes.emailIcon}>&#9993;</span> <h3>Email:</h3> <p className={classes.email}>idealhouse@gmail.com</p>

            </div>
            <div className={classes.row2}><img src="whatsapp.png" alt="whatsappImage" width="65" height="65"/> <h3>Whatsapp:</h3> <p>+393276289940</p></div>
         </div>

         <div className={classes.wrapper1}>
            <div className={classes.row3}>
               <h3>Conto:</h3>
               <p>RO98RNCB0289178270400001</p>
               <h3>Swift:</h3>
               <p>RNCBROBU</p>
               <h3>Banca:</h3>
               <p>BCR</p>
            </div>
         </div>
      </section>
      <div className={`${classes.map} ${isHovered ? classes.hover : ''}`}>
         <iframe
            width="100%"
            height='100%'
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=bulevarddul%20iuliu%20maniu%2018-20+(My%20BusIdeal%20House%20Buisness%20s.r.l.iness%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         ></iframe>
      </div>
      <section className={classes.section2}>

      </section>
      <InfoTel />
      <Footer />

   </>)
}

export default Contatti