import React from 'react';
import {Link} from 'react-router-dom';

import './Tjejfika.css';

// import tjejfika1 from '../images/met-2.jpg';
import tjejfika1 from '../images/tjejfika.jpg';

import { HiArrowNarrowLeft } from 'react-icons/hi';


function Tjejfika() {

    return (
      <div className="tjejfika_section">
        <div className="fika-content">
          <div className="back-arrow">
            <Link to="/">
              <HiArrowNarrowLeft />{" "}
            </Link>
          </div>
          <h1 className="pageTitle">TJEJFIKA 2021</h1>

          <div className="bild">
            <img className="tjejfikaImg" src={tjejfika1} />
          </div>

          <div className="fika-text">
            <h1 className="pageTitle">TJEJFIKA</h1>
            <p className="descriptionText">
              Mette håller i en tjejfika dagen innan uppropet för alla nya
              kvinnliga och ickebinära studenter på Medieteknikprogrammet. Detta
              ger ett perfekt tillfälle för de blivande MT-studenterna att få
              lära känna sina klasskamrater och få en mjuk start innan skolan
              börjar påriktigt. Studenterna får göra lära-känna övningar ,spela
              spel och träffa oss från Mette under fikat.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Tjejfika;