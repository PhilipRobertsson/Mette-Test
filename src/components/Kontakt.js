import React from "react";
import "./Kontakt.css";
import Icon from "../components/icons";
import { Container, Row, Col } from "react-bootstrap";
import { useScrollTo } from "react-use-window-scroll";
import { contact1, contact2, contact3 } from "./db.js";
import { Link } from "react-router-dom";

function Kontakt() {
  const ScrollTo = useScrollTo();
  return (
    <div className="kontakt-container">
      <div className="header-wrap">
        <h1>Kontakt</h1>
        <p className="descriptionText">Tveka inte för att kontakta oss!</p>
        <div className="arrow" style={{ cursor: "pointer" }}>
          <span
            onClick={() =>
              ScrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
          ></span>
          <span
            onClick={() =>
              ScrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              })
            }
          ></span>
        </div>
      </div>

      <div className="head">
        <div className="pageTitle">Kontakta oss!</div>
        <div className="descriptionText" id="contactText">
          Behöver du kontakta oss finns våra följande melj här nedan beroende på
          vad din fråga handlar om
        </div>
        {/*--- Row 1 ---*/}
        <div className="row">
          {/* read from db.js */}
          {contact1.map((data, key) => {
            return (
              <div class="child">
                <div className="post">
                  <h2>{data.post}</h2>
                  <p className="descriptionText" id="contactDescription">
                    {data.text}
                  </p>
                  <a href={data.email}>
                    {" "}
                    <Icon className={data.icon} />
                    {data.linkText}
                  </a>
                </div>
              </div>
            );
          })}{" "}
          {/* end read from db.js */}
        </div>
        {/*--- Row 2 ---*/}
        <div className="row">
          {/* read from db.js */}
          {contact2.map((data, key) => {
            return (
              <div class="child">
                <div className="post">
                  <h2>{data.post}</h2>
                  <p className="descriptionText" id="contactDescription">
                    {data.text}
                  </p>
                  <a href={data.email}>
                    {" "}
                    <Icon className={data.icon} />
                    {data.linkText}
                  </a>
                </div>
              </div>
            );
          })}{" "}
          {/* end read from db.js */}
        </div>
        {/*--- Row 3 ---*/}
        <div className="row">
          {/* read from db.js */}
          {contact3.map((data, key) => {
            return (
              <div class="child">
                <div className="post">
                  <h2>{data.post}</h2>
                  <p className="descriptionText" id="contactDescription">
                    {data.text}
                  </p>
                  <a href={data.email}>
                    {" "}
                    <Icon className={data.icon} />
                    {data.linkText}
                  </a>
                </div>
              </div>
            );
          })}{" "}
          {/* end read from db.js */}
        </div>

        <div className="knapp">
          <Link to="/mette22-23">MER OM GRUPPEN</Link>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;

// {/* ------Ordförande------- */ }
// <div class="child">
//     <div className='ordforande'>
//         <h2> Ordförande </h2>
//         <p className='descriptionText'>Har du generella frågor om vad som helst som angår föreningen, kontakta vår ordförande Ia Bruno på:</p>
//         <a href="mailto:Mettestyrelsen@medieteknik.nu"> <Icon className="fas fa-paper-plane" />Mettestyrelsen@medieteknik.nu </a>

//     </div>
// </div>

// {/* ------Kassör------- */ }
// <div class="child">
//     <div className='kassor'>
//         <h2>Kassör</h2>
//         <p className='descriptionText'>Undrar du över något som angår Mettes ekonomi, kan du kontakta vår kassör Jessie Chow på:</p>
//         <a href="mailto:Mettekassor@medieteknik.nu"> <Icon className="fas fa-paper-plane" />Mettekassor@medieteknik.nu </a>
//     </div>
// </div>

// {/* ------Event------- */ }
// <div class="child">
//     <div className='event'>
//         <h2>Eventansvarig</h2>
//         <p className='descriptionText'>Har du frågor angående våra kommande event och aktiviteter? Kontakta Tilda Hylander på: </p>
//         <a href="mailto:Metteevent@medieteknik.nu"> <Icon className="fas fa-paper-plane" />Metteevent@medieteknik.nu </a>
//     </div>
// </div>

//  <div className="container-2">

//                     {/* ------Spons och komm------- */}
//                     <div class="child">
//                         <div className='företag'>
//                             <h2>Företagsansvarig</h2>
//                                 <p className='descriptionText'>Vill ditt företag diskutera om samarbeten eller sponsra Mette? Kontakta Lovisa Svensson: </p>
//                             <a href="mailto:Samarbete.mette@medieteknik.nu"> <Icon className="fas fa-paper-plane"/>Samarbete.mette@medieteknik.nu</a>
//                         </div>
//                     </div>

//                     {/* ------Tryck och PR------- */}
//                     <div class="child">
//                         <div className='tryck'>
//                             <h2>Tryck och PR</h2>
//                                 <p className='descriptionText'>Frågor angående Mettes allmänna marknadsföring, Kontakta Johanna Folde på: </p>
//                             <a href="mailto:Mettepr@medieteknik.nu"> <Icon className="fas fa-paper-plane"/>Mettepr@medieteknik.nu </a>

//                         </div>
//                     </div>

//                     {/* ------webb------- */}
//                     <div class="child">
//                         <div className='webb'>
//                             <h2>Webbansvarig</h2>
//                                 <p className='descriptionText'>Har du hittat något konstigt eller har du frågor angående hemsidans innehåll, kontakta Cindy Khuong på: </p>
//                             <a href="mailto:Mettewebb@medieteknik.nu"> <Icon className="fas fa-paper-plane"/>Mettewebb@medieteknik.nu</a>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="container-3">

//                     {/* ------Sekreterare------- */}
//                     <div class="child">
//                         <div className='sekreterare'>
//                             <h2>Sekreterare</h2>
//                                 <p className='descriptionText'>Har du frågor till sekreteraren, kontakta Matilda Welander på: </p>
//                             <a href="mailto:Sekreterare.mette@medieteknik.nu"> <Icon className="fas fa-paper-plane"/>Sekreterare.mette@medieteknik.nu</a>
//                         </div>
//                     </div>
//                 </div>

// {/* <div className="knapp">
//                     <a href="/mette22-23">
//                         <button type="button">
//                             Mer om gruppen
//                         </button>
//                     </a>
//                 </div> */}
