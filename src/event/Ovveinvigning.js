import React from 'react';
import {Link} from 'react-router-dom';

import './Ovveinvigning.css';

import { HiArrowNarrowLeft } from 'react-icons/hi';

import { Carousel } from 'react-carousel-minimal';

/*-------- import images ----------*/
import inv1 from '../images/inv1.JPG';
import inv2 from '../images/inv2.JPG';
import inv3 from '../images/inv3.JPG';
import inv4 from '../images/inv4.JPG';
import inv5 from '../images/inv5.JPG';
import inv6 from '../images/inv6.JPG';
import inv7 from '../images/inv7.JPG';
import inv8 from '../images/inv8.JPG';
import inv9 from '../images/inv9.JPG';
import inv10 from '../images/inv10.JPG';
import inv12 from '../images/inv12.JPG';

import foun1 from '../images/fountain1.JPG';
import foun2 from '../images/fountain2.JPG';
import foun3 from '../images/fountain3.JPG';




function Ovveinvigning() {

    const data = [
        {
          image: inv1,
          // caption: "San Francisco"
        },
        {
          image: inv2,
          // caption: "Scotland"
        },
        {
          image: inv3,
          // caption: "Darjeeling"
        },
        {
            image: inv4,
            // caption: "Darjeeling"
          },
          {
            image: inv5,
            // caption: "San Francisco"
          },
          {
            image: inv10,
            // caption: "Darjeeling"
          },
          {
            image: inv12,
            // caption: "Darjeeling"
          },
          {
            image: inv6,
            // caption: "Scotland"
          },
          {
            image: inv7,
            caption: "MT1A"
          },
          {
            image: inv8,
            caption: "MT1B"
          },
          {
            image: inv9,
            // caption: "Darjeeling"
          },
          {
            image: foun1,
            // caption: "Darjeeling"
          },
          {
            image: foun2,
            // caption: "Darjeeling"
          },
          {
            image: foun3,
            // caption: "Darjeeling"
          }, 
      ];

      const captionStyle = {
        fontSize: '3vh',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return(
        <div className="invigning-section">
            
            <div className="invigning-content"> 

                <div className="back-arrow"> 
                    <Link to="/"><HiArrowNarrowLeft /> </Link>
                </div>

                    <div className="invigning-titel">
                      <h1 className="pageTitle">OVVEINVIGNING 2021</h1>
                      <p className='descriptionText'>En tillbakablick från ovveinvigningen</p>
                    </div>

                    {/*------------ bild gallery -------------*/}
                    <div className="invigning-bild">
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
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="cover"
                                    thumbnails={true}
                                    thumbnailWidth="6%"

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

                    <div className="invigning-text">

                        <h1 className="pageTitle">MTs årliga ovveinvigning </h1>
                           <p className='descriptionText'>
                            För de medieteknikstudenter som inte har invigt sin fina orangea overall, måste bära overallen
                            uppcabbad (armarna i ärmarna). För att få bära den nedcabbad (ärmarna knytna runt midjan/"som vanligt") bör 
                            overallen invigas på ovveinvigningen som anordnas av Mette. På invigningen kommer studenterna få
                            följa med på en oförglömd och fartfylld resa. Detta vill du inte missa!
                            </p>

                        <div className="descriptionText">
                          Fler bilder från årets invingning finns att hitta på Mettes 
                          <a href="https://www.facebook.com/events/4451416161605413/?active_tab=discussion"> Facebook </a>
                          sida.
                        </div>

                    </div>
            </div>
        </div>    );
}

export default Ovveinvigning;