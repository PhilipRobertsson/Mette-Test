import React from "react";
import "./Profil.scss";
import Icon from "../components/icons";

/*----- Import images -----*/
import img1 from "../images/profil-1.JPG";
import img2 from "../images/profil-2.JPG";
import img3 from "../images/profil-3.JPG";
import img4 from "../images/profil-4.JPG";
import img5 from "../images/profil-5.JPG";
import img6 from "../images/profil-6.JPG";
import img7 from "../images/profil-7.JPG";

import Fade from "react-fade-in";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { useScrollTo } from "react-use-window-scroll";

import { profile } from "./db.js";

function Profil() {
  // const [Open, setOpen] = useState(false);
  const ScrollTo = useScrollTo();

  return (
    <div className="mette-info">
      {/* Gruppbild */}
      <div className="section">
        <h1>METTE 22/23</h1>
        <p>Skrolla ner för att veta mer om vilka vi är!</p>
        <div className="arrow" style={{ cursor: "pointer" }}>
          <span
            onClick={() =>
              ScrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" })
            }
          ></span>
          <span
            onClick={() =>
              ScrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" })
            }
          ></span>
        </div>
      </div>{" "}
      {/* end Gruppbild */}
      {/* Profiler */}
      <div className="text">
        <h3>Det är vi som är Mette 22/23!</h3>
        <div class="container_profile-images">
          {/*----- jessie testar databas -----*/}
          {profile.map((data, key) => {
            return (
              // <div key={key}>
              //   {
              <div class="container_image" key={key}>
                {/*----- Image -----*/}
                <img src={data.img} alt="profileImage"></img>

                {/* presentation boxes */}
                <div className="presentation">
                  <div className="presentation_content">
                    <div className="namn">{data.name}</div>
                    <div className="post">{data.post}</div>
                  </div>
                </div>

                <div class="overlay_profile-image">
                  {/*----- Text -----*/}
                  <div class="text_profile">{data.text}</div>
                </div>
              </div>
              // }
              // </div>
            );
          })}
          {/*----- jessie testar databas END -----*/}
        </div>{" "}
        {/* end container_image-feed */}
      </div>{" "}
      {/*text end*/}
    </div>
  );
}
export default Profil;

// Old stuff
//      {/*----- Ordförande -----*/}
//      <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img1} alt="profil1"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Ia Bruno </div>
//              <div className="post">Ordförande</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="name_profile">Ia Bruno</div>
//          <div class="title_profile">Ordförande</div>
//          <div class="text_profile">lite kort om Ia typ ??? hlalalallalalala</div>
//          {/*----- Link -----*/}
//          <a class="email_profile" href="mailto:mettestyrelsen@medieteknik.nu/">
//              {/*----- Icon -----*/}
//              <span class="material-icons">email</span> {/*----- need to get the correct icon -----*/}
//          </a>
//      </div>
//  </div> {/* end Ordförande */}

//  {/*----- Sekreterare -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img2} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Mathilda Welander </div>
//              <div className="post">Sekreterare</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="name_profile">Mathilda Welander</div>
//          <div class="title_profile">Sekreterare</div>
//          <div class="text_profile">lite kort om Mathilda typ ??? hlalalallalalala</div>
//          {/*----- Link -----*/}
//          <a class="email_profile" href="mailto:sekreterare.mette@medieteknik.nu">
//              {/*----- Icon -----*/}
//              <i class="material-icons">email</i>
//          </a>
//      </div>
//  </div> {/* end Sekreterare */}

//  {/*----- Kassör -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img3} alt="profil2"></img>

//      {/* presentation boxes */}
//       <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Jessie Chow </div>
//              <div className="post">Kassör</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="name_profile">Klass: MT4</div>
//          <div class="title_profile">Från staden Borås</div>
//          <div class="text_profile"></div>
//          {/*----- Link -----*/}
//          <a class="email_profile" href="mailto:mettekassor@medieteknik.nu">
//              {/*----- Icon -----*/}
//              <i class="material-icons">email</i>
//          </a>
//      </div>
//  </div> {/* end Kassör */}

//  {/*----- Spons&Komm -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img4} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Lovisa Svensson </div>
//              <div className="post">Företagsansvarig</div>
//          </div>
//      </div>

//       <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="name_profile">Lovisa Svensson</div>
//          <div class="title_profile">Spons och kommunikation</div>
//          <div class="text_profile">lite kort om Lovisa typ ??? hlalalallalalala</div>
//          {/*----- Link -----*/}
//          <a class="email_profile" href="mailto:samarbete.mette@medieteknik.nu">
//              {/*----- Icon -----*/}
//              <i class="material-icons">email</i>
//          </a>
//      </div>
//  </div> {/* end Spons&Komm */}

//  {/*----- Tryck&PR -----*/}
//  <div class="container_image" >

//      {/*----- Image -----*/}
//      <img src={img5} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Johanna Folde </div>
//              <div className="post">Tryck ochh PR</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          <div class="frame_profile">
//              {/*----- Text -----*/}
//              {/* <div class="name_profile">Johanna Folde</div>
//              <div class="title_profile">Tryck och PR</div> */}
//              <div class="text_profile">lite kort om Johanna typ ??? hlalalallalalala</div>
//              {/*----- Link -----*/}
//              <a class="email_profile" href="mailto:mettepr@medieteknik.nu">
//                  {/*----- Icon -----*/}
//                  <i class="material-icons">email</i>
//              </a>
//          </div>
//      </div>
//  </div> {/* end Tryck&PR */}

//  {/*----- Webb -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img6} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Cindy Khuong </div>
//              <div className="post">Webbansvarig</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="name_profile">Klass: MT3</div>
//          <div class="title_profile">Stad: Eskilstuna</div>
//          <div class="text_profile">Halloj! Cindy heter jag och det är jag som ligger bakom denna ursnygga hemsidan! Förutom att plugga
//          så hittar ni nog mig hemma och .....Ni som inte heller vet så älskar jag att titta på serier och då ska sushhi vara med i bilden. Try to change my mind!
//          </div>
//          {/*----- Link -----*/}
//          <a class="email_profile" href="mailto:mettewebb@medieteknik.nu">
//              {/*----- Icon -----*/}
//              <i class="material-icons">email</i>
//          </a>
//      </div>
//  </div> {/* end Webb */}

//  {/*----- Event -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img7} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Tilda Hylander </div>
//              <div className="post">Eventansvarig</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="container_text">
//              <div class="name_profile">Tilda Hylander</div>
//              <div class="title_profile">Eventansvarig</div>
//              <div class="text_profile">lite kort om Tilda typ ??? hlalalallalalala</div>
//              {/*----- Link -----*/}
//              <a class="email_profile" href="https://www.instagram.com/mettemedbandana/">
//                  {/*----- Icon -----*/}
//                  <i class="material-icons">email</i>
//              </a>
//          </div> {/* end Text */}
//      </div>
//  </div> {/* end Event */}

//  {/*----- Maskoten -----*/}
//  <div class="container_image" >
//      {/*----- Image -----*/}
//      <img src={img2} alt="profil2"></img>

//      {/* presentation boxes */}
//      <div className="presentation">
//          <div className="presentation_content">
//              <div className="namn"> Mette Meteorita </div>
//              <div className="post">Maskot</div>
//          </div>
//      </div>

//      <div class="overlay_profile-image">
//          {/*----- Text -----*/}
//          <div class="container_text">
//              <div class="name_profile">Mette Meteorita</div>
//              <div class="title_profile">Maskot</div>
//              <div class="text_profile">MTs egna maskot och eftersom Mette är MTs tjejförening är det även Mettes maskot</div>
//          </div> {/* end Text */}
//      </div>
//  </div> {/* end Mathilda */}
