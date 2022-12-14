import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import "./ImageFeed.scss";
import EventPage from "./eventpage";
import { imgFeed } from "./db.js";

/*----- Imports for image feed -----*/
import img1 from "../images/sökMette.jpg";
import img2 from "../images/Tjejpub.jpg";
import img4 from "../images/styrelsen.jpg";
//import img5 from "../images/imageFeed_bild/Ovveinvigning.jpg";
import img6 from "../images/rosa_veckan.jpg";
import img7 from "../images/gaia_event.jpg";
import img8 from "../images/inv1.JPG";

function ImageFeed() {
  return (
    <div className="info_text">
      <p className="feedText">
        Varje år håller Mette i olika event som du bland annat kan läsa mer om
        här nedan! Vi planerar tillsammans traditionella event som MTs ovveinvigning, men det är alltid
        lika roligt och spännande att få jobba med nya projekt. Utöver våra event, kan du
        även hitta övrig information kring Mette. 
      </p>
      <p className="feedText" style={{marginTop: 20}}>Klicka på bilderna nedan för att få veta mer!</p>
      
      <div className="container_image-feed">
        {/* 
          Grid layout
            1 2 3 
            4 5 6 
            7 8 9 
        */}

        {/* read from db.js */}
        {imgFeed.map((data, key) => {
          return (
            <div className="container_image" key={key}>
              <img src={data.img} alt="eventTjejfika"></img>
              <Link to={data.link}>
                <div className="overlay_image-feed">
                  <div className="text_image-feed">{data.title}</div>
                </div>
              </Link>
            </div>
          );
        })}
        {/* end read from db.js */}

        {/*----- square 8 -----*/}
        <div className="container_image">
          <img src={img1} alt="applyToMette"></img>
          <Link to="/SökMette">
            <div className="overlay_image-feed">
              <div className="text_image-feed_row1">VILL DU SÖKA</div>
              <div className="text_image-feed_row2">TILL METTE?</div>
            </div>
          </Link>
        </div>
        {/* end square 8 */}

        {/*----- square 9 -----*/}
        <div className="container_image">
          <img src={img4} alt="MTstyrelsen"></img>
          <a href="https://medieteknik.nu/">
            <div className="overlay_image-feed">
              <div className="text_image-feed">MT-STYRELSEN</div>
            </div>
          </a>
        </div>
        {/* end square 9 */}
      </div>{" "}
      {/* end container_image-feed  */}
    </div> /* info_text */
  ); /*end of return*/
} /*end of funciton*/

export default ImageFeed;




// {/*----- event 1 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img2} alt="eventTjejfika"></img>
//   {/*----- Link -----*/}
//   <Link to="/Tjejfika">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">TJEJFIKA</div>
//     </div>
//   </Link>
// </div>
// {/* end event 1 */ }

// {/*----- event 2 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img4} alt="MTstyrelsen"></img>
//   {/*----- Link -----*/}
//   <a href="https://medieteknik.nu/">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">MT-STYRELSEN</div>
//     </div>
//   </a>
// </div>
// {/* end event 2 */ }

// {/*----- Event 3 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img5} alt="ovveinv"></img>
//   {/*----- Link -----*/}
//   <Link to="/Ovveinvigning">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">OVVEINVIGNINGEN</div>
//     </div>
//   </Link>
// </div>

// {/*----- Event 4 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img6} alt="rosaveckan"></img>
//   {/*----- Link -----*/}
//   <Link to="/RosaVecka">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">ROSA VECKAN</div>
//     </div>
//   </Link>
// </div>
// {/* end */ }

// {/*----- Event 5 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img7} alt="eventGaia"></img>
//   {/*----- Link -----*/}
//   <Link to="/GaiaEvent">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">TJEJKVÄLL MED GAIA</div>
//     </div>
//   </Link>
// </div>
// {/* end */ }

// {/*----- Event 6 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img5} alt="damsittningen"></img>
//   {/*----- Link -----*/}
//   <a href="https://www.instagram.com/mettemedbandana/">
//     <div class="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">DAMSITTNINGEN</div>
//     </div>
//   </a>
// </div>
// {/* end */ }

// {/*----- Event 7 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img1} alt="applyToMette"></img>
//   {/*----- Link -----*/}
//   <Link to="/SökMette">
//     <div class="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed_row1">VILL DU SÖKA</div>
//       <div className="text_image-feed_row2">TILL METTE?</div>
//     </div>
//   </Link>
// </div>
// {/* end */ }

// {/*----- Event 8 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img1} alt="TEMP"></img>
//   {/*----- Link -----*/}
//   <Link to="/Spons">
//     <div class="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">SPONSORER</div>
//     </div>
//   </Link>
// </div>
// {/* end */ }

// {/*----- Event 9 -----*/ }
// <div className="container_image">
//   {/*----- Image -----*/}
//   <img src={img2} alt="TEMP"></img>
//   {/*----- Link -----*/}
//   <Link to="/Ovveinvigning">
//     <div className="overlay_image-feed">
//       {/*----- Text -----*/}
//       <div className="text_image-feed">TEMP</div>
//     </div>
//   </Link>
// </div>