import React from "react";
import "./Spons.css";
import "../event/eventPages_withGallery.css";
import ica from "../images/ica-logo.png";
import gaia from "../images/gaia-logo.png";

import { Link } from "react-router-dom";

// import tjejfika1 from '../images/met-2.jpg';
import tjejfika1 from "../images/tjejfika.jpg";

import { HiArrowNarrowLeft } from "react-icons/hi";

function Spons() {
  return (
    <div className="spons_section">
      <div className="spons-content">
        <div className="back-arrow">
          <Link to="/">
            <HiArrowNarrowLeft />{" "}
          </Link>
        </div>

        <div className="event-titel">
          <h1 className="pageTitle">SAMMARBETSPARTNER</h1>
          <p className="descriptionText">
            Klicka på respektive logga för mer information
          </p>
        </div>

        <div className="theImages">
          <a href="https://www.ica.se/butiker/nara/norrkoping/ica-nara-strommen-norrkoping-2167/start/">
            <img src={ica} className="photo1" />
          </a>
          <a href="https://gaia.se/">
            <img src={gaia} className="photo1" />
          </a>
        </div>

        <div className="spons-text">
          <h1 className="pageTitle">SPONSOR</h1>
          <p className="descriptionText">
            Är du som företag intresserad av att sponsra Mette och vill veta mer
            om vad det innebär eller har du frågor gällande marknadsföringenså kontakta gärna vår företagsansvarig
            <a href="mailto:Samarbete.mette@medieteknik.nu">
              {" "}
              Lovisa Svensson.
            </a>
          </p>
        </div>
      </div>{" "}
      {/* spons-content */}
    </div> /* spons-section */
  );
}

export default Spons;

// function Spons() {
//     return(
//         <div className='Spons-container'>
//             <h1>VÅRA SAMARBETSPARTNERS</h1>
//             <p>Klicka på respektive logga för mer information</p>

//             <div className='theImages'>
//             <a href="https://www.ica.se/butiker/nara/norrkoping/ica-nara-strommen-norrkoping-2167/start/">
//                 <img src={ica} className="photo1" />
//             </a>
//             <a href="https://gaia.se/">
//                 <img src={gaia} className="photo2" />
//             </a>
//             </div>
//         </div>

//     );
// }

// export default Spons;
