import React, { useEffect } from 'react';

import classes from './Footer.module.css'

export default function Footer() {

    return (
        <footer className={classes.footer}>

            <div className={classes["footer-bottom-nav"]}>

                <div className={classes.container}>

                    <div className={classes["Footer_links_subsection_map"]}>
                        <div id="map" className={classes["google-map"]}>
                            <iframe
                                width="100%"
                                
                                frameBorder="0" 
                                scrolling="no"
                                marginHeight="0" 
                                marginWidth="0" 
                                src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=bulevarddul%20iuliu%20maniu%2018-20+(My%20BusIdeal%20House%20Buisness%20s.r.l.iness%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>                        
                            </div>
                        <div className={classes.address1}>
                            <p><span>Indirizzo:</span> Bulevardul Iuliu Maniu 18-20</p>
                            <p>Bucarest 061344</p>
                        </div>
                        <div className={classes.contact1}>
                            <p><span className={classes.email}>&#9993;</span> idealhouse@gmail.com</p>
                            <p><span>&#128222;</span> +40 771 782 990</p>
                        </div>
                    </div>

                    <div className={classes["Footer_links_subsection"]}>
                        <a className={classes["footer-links__title" ]} href="/Contatti" target="_blank">
                            Contatti e Area legale</a>
                    {/*     <ul className={classes["footer-links__wrapper-links"]}>
                            <li><a href="/Contatti" target="_blank">Contatti</a></li>
                            <li><a href="/it/faq/page/">Domande frequenti</a></li>
                            <li><a href="/it/privacy/">Privacy</a></li>
                        </ul> */}
                        <div className={classes.address}>
                            <p><span>Indirizzo:</span> Bulevardul Iuliu Maniu 18-20</p>
                            <p>Bucarest 061344</p>
                            <p><span>Codice C.U.I:</span> 38639290</p>
                        </div>
                        <div className={classes.contact}>
                            <p><span className={classes.email}>&#9993;</span> idealhouse@gmail.com</p>
                            <p><img  className={classes.whatsapp}src="whatsapp.png" alt="whatsappImage" width="20" height="20"/> +393276289940</p>
                        </div>
                    </div>


                    {/*                  <div className={classes["Footer_links_subsection"]}>
                        <div className={classes["footer-links__title"]}>Servizi</div>
                        <ul className={classes["footer-links__wrapper-links"]}>

                        </ul>
                    </div> 

                    <div className={classes["Footer_links_subsection"]}>
                        <div className={classes["footer-links__title"]}>Ideal House</div>
                        <ul className={classes["footer-links__wrapper-links"]}>
                            <li><a href="/it/chi-siamo/">Chi siamo</a></li>
                            <li><a href="/it/partner-posatori-infissi/" target="_blank">Diventa nostro partner posatore</a>
                            </li>
                            <li><a href="https://lavoro.tecnomat.it/pages/sviluppo-sostenibile/" target="_blank">I nostri
                                prodotti</a></li>
                            <li><a href="/it/reso-e-rimborso/">Reso e rimborso</a></li>
                            <li><a href="/it/recesso/">Diritto di recesso</a></li>
                            <li><a href="/it/spedizioni-e-consegne/">Spedizioni e consegne</a></li>
                            <li><a href="/it/agevolazioni-e-detrazioni/">Agevolazioni e detrazioni</a></li>
                        </ul>
                    </div>
*/}
                </div>
            </div>
            <div className={classes["copyright-text"]}>
                2024 © Ideal House Buisness s.r.l.
            </div>
        </footer>
    )
}