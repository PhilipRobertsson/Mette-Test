import React from "react";
import Footer from "../components/footer";
// import Footer from '../components/footer/index'
import Icon from "../components/icons";
// import logga from '../images/MetteLogga.png';
// import Footer from './footer';
// import Icon from './icons';
import logga from "../images/MetteLogga.png";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <img src={logga} height={160} width={160} />
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Hitta oss</Footer.Title>
            <p>Linköpings Universitet på Campus Norrköping</p>
            <p>Bredgatan 34</p>
            <p>602 21 Norrköping </p>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Om oss</Footer.Title>
            {/* <Footer.Link to="/kontakt">Kontakta oss</Footer.Link>
                        <Footer.Link to="/mette22-23">Mette</Footer.Link> */}
            <Link to="/mette22-23">Mette 22/23</Link>
            <Link to="/kontakt">Kontakt</Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Följ oss</Footer.Title>
            <Footer.Link href="https://www.facebook.com/MTMette/">
              <Icon className="fab fa-facebook-square" />
              Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/mettemedbandana/">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            {/* <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link> */}
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

// import React from 'react'
// // import Footer from '../components/footer'
// import Footer from '../components/footer/index'
// import Icon from '../components/icons'
// import logga from '../images/MetteLogga.png';

// export function FooterContainer() {
//     return(
//         <Footer>
//             <Footer.Wrapper>
//                 <Footer.Row>

//                      <Footer.Column>
//                          <img src={logga} height={160} width={160}/>
//                     </Footer.Column>

//                     <Footer.Column>
//                         <Footer.Title>Hitta oss</Footer.Title>
//                         <p>Linköpings Universitet på Campus Norrköping</p>
//                         <p>Bredgatan 34</p>
//                         <p>602 21 Norrköping </p>
//                     </Footer.Column>

//                     <Footer.Column>
//                         <Footer.Title>Om oss</Footer.Title>
//                         <Footer.Link href="https://mette.nu/kontakt">Kontakta oss</Footer.Link>
//                         <Footer.Link href="https://mette.nu/mette21-22">Mette</Footer.Link>
//                     </Footer.Column>

//                     <Footer.Column>
//                         <Footer.Title>Följ oss</Footer.Title>
//                         <Footer.Link href="https://www.facebook.com/MTMette/"><Icon className="fab fa-facebook-square"/>Facebook</Footer.Link>
//                         <Footer.Link href="https://www.instagram.com/mettemedbandana/"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
//                         {/* <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link> */}
//                     </Footer.Column>
//                 </Footer.Row>
//             </Footer.Wrapper>
//         </Footer>
//     )
// }
