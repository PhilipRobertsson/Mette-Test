import React from "react";
import { Link } from "react-router-dom";

import "./SökMette.css";

// import tjejfika1 from '../images/met-2.jpg';
import sökBild from "../images/met-7.JPG";

import { HiArrowNarrowLeft } from "react-icons/hi";

function SökMette() {
  return (
    <div className="SökMette_section">
      <div className="SökMette-content">
        <div className="back-arrow">
          <Link to="/">
            <HiArrowNarrowLeft />{" "}
          </Link>
        </div>

        <div className="sök-event-titel">
          <h1 className="pageTitle">SÖK TILL METTE</h1>
          <p className="descriptionText">
            Är du intresserad av att vara med i en studentförening, anorda
            spännande event och få nya erfarenheter så låter Mette något för
            dig! En beskrivning på de olika posterna finns här nedan och har du
            några specifika frågor så kan du bara ta kontakt med oss. För att
            läsa mer om hur du kan söka och/eller nominera, klicka på denna
            <a href="https://www.facebook.com/events/3135615783336629">
              {" "}
              länk!
            </a>
          </p>
        </div>

        <div className="SökMette-text">
          <h1 className="pageTitle">POSTBESKRIVNING</h1>

          <div className="postbesk">
            <h2>Ordförande</h2>
            <p className="descriptionText">
              Som ordförande har du ett övergripande ansvar för Mettes arbete.
              Det är du som för Mettes talan i större sammanhang. Du är glad och
              driven, gillar att organisera och känner dig bekväm i rollen att
              leda en grupp. Ordförande har också hand om att arbetet förs
              vidare mellan verksamhetsåren genom att ansvara för utvärderingar
              och dokumentation utmed sitt egna verksamhetsår.
            </p>
          </div>

          <div className="postbesk">
            <h2>Sekreterare</h2>
            <p className="descriptionText">
              Som sekreterare är det du som antecknar under Mettes möten, du är
              en fena på att skriva snabbt och du har koll på Mettes stadgar och
              dokument. Du har även huvudansvaret för dokumentationen inför
              stormöten. Posten passar dig som är strukturerad och gillar att ha
              ordning och reda.
            </p>
          </div>

          <div className="postbesk">
            <h2>Kassör</h2>
            <p className="descriptionText">
              Som kassör har du ansvar för Mettes ekonomi. Du ser till att in-
              och utbetalningar sker i tid, att inkomster och utgifter bokförs
              och att Mettes pengar spenderas på rätt saker. Kassörsposten
              passar dig som har ett intresse för ekonomi, är ansvarsfull och
              organiserad.
            </p>
          </div>

          <div className="postbesk">
            <h2>Företagsansvarig</h2>
            <p className="descriptionText">
              Som spons- och kommunikationsansvarig håller du i kontakten med
              företag, söker spons och skapar avtal. Denna post passar dig som
              har lätt för att ta kontakt med nya människor, skriva mail och är
              välstrukturerad.
            </p>
          </div>

          <div className="postbesk">
            <h2>Tryck och PR ansvarig</h2>
            <p className="descriptionText">
              Som Tryck och PR ansvarar du för Mettes marknadsföring. Det gör du
              genom att göra affischer, omslagsbilder och annan grafik till
              Mettes olika evenemang. Dessutom har du ansvar för Mettes märken.
              Det är bra om du är påhittig och kreativ.
            </p>
          </div>

          <div className="postbesk">
            <h2>Eventansvarig</h2>
            <p className="descriptionText">
              Som eventansvarig har du god översikt över verksamhetsåret och du
              ser till att olika event som Mette arrangerar blir av. Det är allt
              ifrån att hitta på event till att hålla i dem. Posten passar dig
              som är energisk, kreativ och drivande.
            </p>
          </div>

          <div className="postbesk">
            <h2>Webbansvarig</h2>
            <p className="descriptionText">
              Vill du ha ett projekt vid sidan av dina studier? Är du
              intresserad av webbdesign och vill lära dig mer om det? I så fall
              passar du som Mettees webbansvarig! Du kommer få mycket stor
              frihet till hur du vill utveckla hemsidan, det kan se ut på vilket
              sätt som helst! The sky is the limit! woooww!
            </p>
          </div>
        </div>
        <div className="bildSök">
          <img className="SökMetteImg" src={sökBild} />
        </div>
      </div>
    </div>
  );
}

export default SökMette;
