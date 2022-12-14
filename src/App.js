import { React, useEffect } from "react";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
// import { FooterContainer } from './containers/footer';
import { FooterContainer } from "./components/footer";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";

/*----- Pages -----*/
import "./App.css";
import Home from "./components/pages/Home";
import InfoSection from "./components/InfoSection";
import ImageFeed from "./components/ImageFeed";
import Kontakt from "./components/Kontakt";
import Profil from "./components/Profil";
import { CollapseContainer } from "./containers/Collapse";
import { InfoData } from "./components/InfoData";

/*------------ Event---------------*/
import Tjejfika from "./event/Tjejfika";
import Ovveinvigning from "./event/Ovveinvigning";
import GaiaEvent from "./event/GaiaEvent";
import RosaVecka from "./event/RosaVecka";
import Spons from "./components/Spons";
import SökMette from "./event/SökMette";
import Damsittningen from "./event/Damsittningen";
import Märken from "./event/Märken";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        {/*----- Navigation bar -----*/}
        <Navbar />
        <ScrollToTop /> {/* Starts on top of a new page */}
        {/*----- Home Page -----*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route />
        </Switch>{" "}
        {/*----- end Home Page -----*/}
        {/*----- "About Mette" -----*/}
        <Switch>
          <Route path="/" exact component={InfoSection}>
            <InfoSection {...InfoData} />
          </Route>
        </Switch>{" "}
        {/*----- end "About Mette" -----*/}
        {/*----- Image feed -----*/}
        <Switch>
          <Route path="/" exact component={ImageFeed} />
          <Route />
        </Switch>{" "}
        {/*----- end Image feed -----*/}
        {/*  
            ----- Sponsors -----
            <Switch>
              <Route path='/' exact component={Spons}/><Route/>
            </Switch> ----- end Sponsors ----- */}
        {/*----- Contact info -----*/}
        <Switch>
          <Route path="/kontakt" exact component={Kontakt} />
          <Route />
        </Switch>{" "}
        {/*----- end Contact info -----*/}
        {/*----- About current Mette -----*/}
        <Switch>
          <Route path="/mette22-23" exact component={Profil} />
          <Route />
        </Switch>{" "}
        {/*----- end About current Mette -----*/}
        {/*----- Previous Mette a.k.a Marit -----*/}
        <Switch>
          <Route path="/mette22-23" exact component={CollapseContainer} />
          <Route />
        </Switch>{" "}
        {/*----- end Previous Mette a.k.a Marit -----*/}
        {/*----- Tjejfika -----*/}
        <Switch>
          <Route path="/Tjejfika" exact component={Tjejfika} />
          <Route />
        </Switch>{" "}
        {/*----- end Tjejfika -----*/}
        {/*----- Ovveinvigning -----*/}
        <Switch>
          <Route path="/Ovveinvigning" exact component={Ovveinvigning} />
          <Route />
        </Switch>{" "}
        {/*----- end Ovveinvigning -----*/}
        {/*----- Gaia event -----*/}
        <Switch>
          <Route path="/GaiaEvent" exact component={GaiaEvent} />
          <Route />
        </Switch>{" "}
        {/*----- end Ovveinvigning -----*/}
        {/*----- Rosa veckan event -----*/}
        <Switch>
          <Route path="/RosaVecka" exact component={RosaVecka} />
          <Route />
        </Switch>{" "}
        {/*----- end Rosa veckan -----*/}
        {/*----- Sponsorer -----*/}
        <Switch>
          <Route path="/Spons" exact component={Spons} />
          <Route />
        </Switch>{" "}
        {/*----- end Spons -----*/}
        {/*----- Damsittningeen -----*/}
        <Switch>
          <Route path="/Damsittningen" exact component={Damsittningen} />
          <Route />
        </Switch>{" "}
        {/*----- end Damsittningen -----*/}
        {/*----- Sök Mette -----*/}
        <Switch>
          <Route path="/SökMette" exact component={SökMette} />
          <Route />
        </Switch>{" "}
        {/*----- end Sök Mette -----*/}
        {/*----- Märken -----*/}
        <Switch>
          <Route path="/Märken" exact component={Märken} />
          <Route />
        </Switch>{" "}
        {/*----- Märken -----*/}
        <FooterContainer />
        {/* default redirect to home page */}
        <Redirect from="*" to="/" />
      </Router>
    </>
  );
}

export default App;
