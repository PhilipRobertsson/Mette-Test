import React from 'react';
import { Link } from 'react-router-dom';

import './GaiaEvent.css';
import './eventPages_withGallery.css';

import Bild_kommer from '../images/Bild_kommer.png';
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



function Damsittningen() {

    // const data = [
    //     {
    //         image: gaia1,
    //         // caption: "San Francisco"
    //     },
    //     {
    //         image: gaia2,
    //         // caption: "Scotland"
    //     },
    //     {
    //         image: gaia3,
    //         // caption: "Darjeeling"
    //     },
    //     {
    //         image: gaia4,
    //         // caption: "Darjeeling"
    //     },
    //     {
    //         image: gaia5,
    //         // caption: "San Francisco"
    //     },
    //     {
    //         image: gaia6,
    //         // caption: "Darjeeling"
    //     },
    //     {
    //         image: gaia7,
    //         // caption: "Darjeeling"
    //     },
    //     {
    //         image: gaia8,
    //         // caption: "Scotland"
    //     },

    // ];

    // const captionStyle = {
    //     fontSize: '3vh',
    //     fontWeight: 'bold',
    // }
    // const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    // }

    return (
      <div className="event-section">
        <div className="event-content">
          <div className="back-arrow">
            <Link to="/">
              <HiArrowNarrowLeft />{" "}
            </Link>
          </div>
          <div className="event-titel">
            <h1 className="pageTitle">DAMSITTNINGEN</h1>
            <p className="descriptionText">
              En finsittning f??r tjejer p?? TekFak, campus Norrk??ping
            </p>
          </div>

          {/* -----Bild----- */}
          <div className="bild">
            <img className="tjejfikaImg" src={Bild_kommer} />
          </div>
          {/* -----End Bild----- */}
          
          {/*------------ bild gallery -------------*/}
          {/* <div className="event-bild">
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
                  pauseIconColor="white"
                  pauseIconSize="10vh"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
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
          </div>{" "} */}
          {/*------------ bild gallery -------------*/}
          <div className="event-text">
            <h1 className="pageTitle">Damsittningen</h1>

            <p className="descriptionText">
                Damsittningen ??r en ??rlig finsittning f??r tjejer och ickebin??ra som studerar p?? 
                campus Norrk??pings Tekniska Fakultet. Sittningen anordnas av ett utskott som fr??mst 
                best??r av medlemmar fr??n tjejf??reningarna p?? medieteknik, Mette, och byggnadsteknik, Nora, 
                men ??ven tjejer och ickebin??ra fr??n de andra sektionerna i TekFak. Under kv??llen bjuds det p?? 
                mat och underh??llning som sent kommer gl??mmas. 
            </p>

            <div className="descriptionText">
              Fler bilder fr??n Damsittnignen g??r att hitta p??
              <a href="https://www.facebook.com/MTMette/photos/"> Mettes foton </a>
              p?? Facebook!
            </div>
          </div>
        </div>
      </div>
    );
}

export default Damsittningen;