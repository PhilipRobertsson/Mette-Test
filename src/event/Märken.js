import React from 'react';
import { Link } from 'react-router-dom';

import './GaiaEvent.css';
import './eventPages_withGallery.css';

import tjejfika1 from '../images/met-2.jpg';
import tjejfika2 from '../images/profil-6.JPG';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { Carousel } from 'react-carousel-minimal';

/*-------- import images ----------*/
import marke1 from '../images/Märken/marke1.PNG';
import marke2 from '../images/Märken/marke2.png';
import marke3 from '../images/Märken/marke3.png';
import marke4 from '../images/MetteLogga.png';
import marke5 from '../images/Märken/Kvinnosymbol.jpg';
import marke6 from '../images/Märken/invigning_2021.png';


function Märken() {

    const data = [
        {
            image: marke1,
            //caption: "Girls Support Girls, made by "
        },
        {
            image: marke2,
            // caption: "Scotland"
        },
        {
            image: marke3,
            // caption: "Darjeeling"
        },
        {
            image: marke4,
            // caption: "Darjeeling"
        },
        {
          image: marke5,
          // caption: "Darjeeling"
        },
        {
          image: marke6,
          // caption: "Darjeeling"
        }
        
    ];

    const captionStyle = {
        fontSize: '3vh',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black',
    }

    return (
      <div className="övrigt-section">
        <div className="event-content">
          <div className="back-arrow">
            <Link to="/">
              <HiArrowNarrowLeft />{" "}
            </Link>
          </div>
          <div className="event-titel">
            <h1 className="pageTitle">Mettes Märken</h1>
             {/*<p className="descriptionText">
              hej
            </p>*/}
          </div>
          {/*------------ bild gallery -------------*/}
          <div className="event-bild">
            <div style={{ textAlign: "center" }}>
              <div style={{ padding: "2%" }}>
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
                pauseIconColor="black"
                  pauseIconSize="10vh"
                  slideBackgroundColor="white"
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
          </div>{" "}
          {/*------------ bild gallery -------------*/}

          <div className="event-text">
            <h1 className="pageTitle">Mettes Märken</h1>
            <p className="descriptionText">
              Mette har just nu sex märken där de alla delvis representerar de värderingar som Mette står för. 
              Märkena säljs inte regelbundet men kontakta oss gärna ifall ni är intresserade. 
            </p>
            <p className="descriptionText">
              När vi säljer märken kommer det att läggas upp info om det på 
              <a href="https://www.instagram.com/mettemedbandana/"> Mettes Instagram</a>
              !
            </p>
            
          </div>
        </div>
    </div>
    );
}

export default Märken;