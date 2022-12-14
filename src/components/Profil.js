import React from "react";
import "./Profil.scss";
import Icon from "../components/icons";
import Fade from "react-fade-in";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { useScrollTo } from "react-use-window-scroll";
import { profile } from "./db.js"; // "Databas"

function Profil() {
  // const [Open, setOpen] = useState(false);
  const ScrollTo = useScrollTo();

  return (
    <div className="mette-info">
      {/* Group image */}
      <div className="section">
        <h1>METTE 22/23</h1>
        <p className="descriptionText">
          Skrolla ner för att veta mer om vilka vi är!
        </p>
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
      </div>{" "}
      {/* end Group image */}
      {/* Section with Mette's boardmembers */}
      <div className="text">
        <h3>Det är vi som är Mette 22/23!</h3>
        {/* Profiler */}
        <div class="container_profile-images">
          {profile.map((data, key) => {
            return (
              <div class="container_image" key={key}>
                {/*----- Image -----*/}
                <img src={data.img} alt="profileImage"></img>

                {/* Title box */}
                <div className="presentation">
                  <div className="presentation_content">
                    <p className="name">{data.name}</p>
                    <p className="postProfil">{data.post}</p>
                  </div>
                </div>

                <div class="overlay_profile-image">
                  {/*----- Text -----*/}
                  <p class="classHeader_profile header_profile">KLASS</p>
                  <p class="class_profile  text_profile">{data.class}</p>
                  <p class="cityHeader_profile header_profile">STAD</p>
                  <p class="city_profile text_profile">{data.city}</p>
                  <p class="textHeader_profile header_profile">INTRESSE</p>
                  <p class="bodytext_profile text_profile">{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>{" "}
        {/* end container_profile-image */}
      </div>{" "}
      {/* end Mette boardmembers */}
    </div> // end Mette-info
  );
}
export default Profil;
