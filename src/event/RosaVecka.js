import React from 'react';
import {Link} from 'react-router-dom';
// import './RosaVecka.css';
import tjejfika1 from '../images/rosa.png';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import "./Tjejfika.css";
function RosaVecka() {
    return(
        <div className="tjejfika_section">  
            <div className="fika-content"> 

                <div className="back-arrow"> 
                    <Link to="/"><HiArrowNarrowLeft /> </Link>
                </div>

                <div className="pageTitle">ROSA VECKAN 2021</div>

                <div className="bild">
                    <img className="tjejfikaImg" src={tjejfika1} />
                </div>

                <div className="fika-text">
                    <h1 className="pageTitle">
                        Mette och Nora
                    </h1>
                    <p className='descriptionText'>
                    Varje år i oktober stödjer Mette och byggnadstekniks tjejförening Nora, Rosa Bandet 
                    kampanjen genom att hålla Rosa veckan. Under Rosa veckan bjuds det 
                    på fika och roliga aktiviteter som tipspromenad och tävlingar där fina priser 
                    utlovas. Nytt för i år höll Mette i slutet av Rosa Veckan en tjejpub där det tillkom karaoke, brädspel,
                    musik quiz, snacks och massa kul! Alla pengar som samlades in under Rosa veckan skänks till 
                    Rosa Bandet.  
                    </p>

                    <div className="descriptionText">
    
                            Nora är byggnadsingenjörernas tjejförening, kolla in deras 
                            <a href="https://www.instagram.com/nora1991_nsektionen/"> Instagram </a>
                            och 
                            <a href="https://www.facebook.com/nora1991.nsektionen"> Facebook. </a>
 
                     </div> {/* rosa-hitta */}
                </div> {/* rosa-text */}
            </div> {/* rosa-content */}
        </div>/* tjejfika_section */
    );
}

export default RosaVecka;