import React from 'react';
import {Link} from 'react-router-dom';

// import './GaiaEvent.css';
import './eventPages_withGallery.css';

import tjejfika1 from '../images/met-2.jpg';
import tjejfika2 from '../images/profil-6.JPG';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { Carousel } from 'react-carousel-minimal';

/*-------- import images ----------*/
import gaia1 from '../images/gaia1.jpg';
import gaia2 from '../images/gaia2.jpg';
import gaia3 from '../images/gaia3.jpg';
import gaia4 from '../images/gaia4.jpg';
import gaia5 from '../images/gaia5.jpg';
import gaia6 from '../images/gaia6.jpg';
import gaia7 from '../images/gaia7.jpg';
import gaia8 from '../images/gaia8.jpg';



function GaiaEvent() {

    const data = [
        {
          image: gaia1,
          // caption: "San Francisco"
        },
        {
          image: gaia2,
          // caption: "Scotland"
        },
        {
          image: gaia3,
          // caption: "Darjeeling"
        },
        {
            image: gaia4,
            // caption: "Darjeeling"
          },
          {
            image: gaia5,
            // caption: "San Francisco"
          },
          {
            image: gaia6,
            // caption: "Darjeeling"
          },
          {
            image: gaia7,
            // caption: "Darjeeling"
          },
          {
            image: gaia8,
            // caption: "Scotland"
          },

      ];

      const captionStyle = {
        fontSize: '3vh',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black'
      }

    return(
        <div className="gaia-section">
            
        <div className="event-content">

                <div className="back-arrow"> 
                    <Link to="/"><HiArrowNarrowLeft /> </Link>
                </div>

                    <div className="event-titel">
                        <h1 className="pageTitle">GAIA EVENT 2021</h1>
            <p className='descriptionText'>En mycket trevlig och inspirerande kväll tillsammans med Gaia</p>
                    </div>

                    {/*------------ bild gallery -------------*/}
          <div className="event-bild">
                        <div style={{ textAlign: "center" }}>
                            <div style={{padding: "2%"}}>

                                <Carousel
                                    data={data}
                                    time={2000}
                                    width="140vh"
                                    height="80vh"
                                    captionStyle={captionStyle}
                                    radius="1%"
                                    slideNumber={true}
                                    slideNumberStyle={slideNumberStyle}
                                    captionPosition="bottom"
                                    automatic={true}
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="10vh"
                                    slideBackgroundColor="lightgray"
                                    slideImageFit="contain"
                                    thumbnails={true}
                                    // thumbnailWidth="6%"
                                    thumbnailWidth="5%"

                                    style={{
                                    textAlign: "center",
                                    maxWidth: "140vh",
                                    maxHeight: "80vh",
                                    margin: "4% auto",
                                    }}
                                />
                            </div>
                        </div>
                    </div>  {/*------------ bild gallery -------------*/}

          <div className="event-text">

            <h1 className="pageTitle">Inspirationskväll med Gaia </h1>

            <p className='descriptionText'> 
              Mettes huvudsponsor Gaia brukar hålla i minst ett företagsevent per år. I år var detta ett 
              fysiskt besök på Gaias kontor i Norrköping där alla tjejer och icke-binära var välkomna, där de bjöds på mat och bubbel. 
              Under kvällen svarade Gaia på frågor och gav en inblick över hur arbetslivet där kunde se ut. 
              Studenterna tyckte att det var väldigt uppskattat och blev mycket inspirerade under Gaias event. 
            </p>
            <p className="descriptionText">Förra året var företagseventet med Gaia en digital kvällsevent med temat UX.</p>

            <div className="descriptionText"  style={{marginTop: 2}}>
                          Vill du veta mer om Gaia eller har du några funderingar om dina möjligheter efter examen så kan du kolla in  
                          <a href="gaia.se"> Gaias hemsida </a>
                          !
                        </div>
                    </div>
            </div>
        </div>    );
}

export default GaiaEvent;