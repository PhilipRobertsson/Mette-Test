import React from "react";
import { SizeOnlySource } from "webpack-sources";
import Collapse from "../components/Collapse";
import "../containers/Collapse.css";
// import {Container, Content, Button, Column, Link, Title} from './styles/Collapse'

import mette1 from "../images/mette20-21.jpg";
import mette2 from "../images/mette19-20_2.jpg";
import mette3 from "../images/mette18-19.jpg";
import mette4 from "../images/mette17-18.jpg";
import mette5 from "../images/mette16-17.jpg";
import mette6 from "../images/mette15-16.jpg";
import mette7 from "../images/mette14-15.jpg";
import mette8 from "../images/mette13-14.jpg";
import mette9 from "../images/mette21-22.jpg";
//lägg till 22-23

export function CollapseContainer() {
  return (
    <div className="marit">
      <div className="marit_text">
        <h1>Marit</h1>
        <p className="descriptionText">
          Efter en mycket händelserik resa av hårt arbete och skoj tillsammans
          som Mette så slutar inte vår resa här! Vi kommer istället att minnas
          som Marit.{" "}
        </p>
      </div>

      <div className="space">
        <Collapse label="METTE 21/22">
          {" "}
          {/* css kan ändras på /components/Collapse/style/Collapse.js */}
          <img className="maritImg" src={mette9} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Ia Bruno, Jessie Chow, Mathilda Welander, Johanna Folde, Lovisa
            Svensson, Cindy Khuong ochh Tilda Hylander{" "}
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 20/21">
          {" "}
          {/* css kan ändras på /components/Collapse/style/Collapse.js */}
          <img className="maritImg" src={mette1} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Tilda Eriksson Lindgren, Frida Hedman, Wilma Axelsson, Maria
            Brunned, Anna Jonsson och Louise Nilsson
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 19/20">
          <img className="maritImg" src={mette2} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Cecilia Bergman, Hanna Timander Björknert, Anna Wästling, Isabelle
            Bühlmann, Jenny Rudemo och Nellie Engström
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 18/19">
          <img className="maritImg" src={mette3} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Anna Furugård, Iris Kotsinas, Matilda Eriksson, Catja Nordqvist,
            Astrid Johansson och Alice Kåhlin
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 17/18">
          <img className="maritImg" src={mette4} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Anna Häägg, Emma Algotsson, Johanna Granström, Ester Lindgren, Ronja
            Faltin och Ylva Selling
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 16/17">
          <img className="maritImg" src={mette5} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Linnea Bergman, Emma Nilsson, Malin Wetterskog, Sofia Erlandsson,
            Rebecca Akkila och Amanda Tydén
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 15/16">
          <img className="maritImg" src={mette6} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            {" "}
            Rebecca Cedermalm, Fanny Aldén, Jasmine Karlsson, Michaela Rabenius,
            Victoria Waldermarson och Sofia Höglund
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 14/15">
          <img className="maritImg" src={mette7} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Johanna Elmesiöö, Sandra Tråvén, Sovanny Huy Nikkilä, Isabelle
            Rosenquist, Sara Martin och Alice Lundin
          </p>
        </Collapse>
      </div>

      <div className="space">
        <Collapse label="METTE 13/14">
          <img className="maritImg" src={mette8} />
          <h2 className="maritMedlemmar">MEDLEMMAR</h2>
          <p className="descriptionText">
            Cecilia Lagerwall, Linnéa Nåbo, Linnea Mellblom, Therese Komstadius,
            Gabriella Rydenfors, Lovisa Dahl
          </p>
        </Collapse>
      </div>
    </div>
  );
}
