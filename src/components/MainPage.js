import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './MainPage.css';
import { InfoData } from './InfoData';
import InfoSection from './InfoSection';
//import styled from 'styled-components'
import image from '../images/MetteLogga.png';
import { useScrollTo } from "react-use-window-scroll";
import { BsArrowUpCircleFill } from "react-icons/bs";

/*----- Imports for image feed -----*/
import img1 from '../images/profil-1.JPG';
import img2 from '../images/profil-2.JPG';
import img4 from '../images/profil-4.JPG';
import img5 from '../images/profil-5.JPG';
import img7 from '../images/profil-7.JPG';

function MainPage() {
  const ScrollTo = useScrollTo();

  return (
    <div className="Section" >

      {/*----- Arrows on main page, click to scroll to "next" page -----*/}
      <div className='hero-container'>
        <div className="arrow" style={{cursor: "pointer"}}>
          <span onClick={() => ScrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" })}></span>
          <span onClick={() => ScrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" })}></span>
        </div> {/*end of arrow*/}
      </div> {/*end of hero-container*/}

    </div> /*end of Section*/
  );/*end of return*/
}/*end of funciton*/

export default MainPage;
