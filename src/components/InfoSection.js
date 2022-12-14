import React from 'react'
import styled from 'styled-components'
import MetteBild from '../images/img-3.jpg';
import './InfoSection.css';

const Section = styled.section`
    width: 100%;
    length: 100%;
    padding: 3rem 0rem;
    `;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: 13pt;
    line-height: 150%;
  }
`;

const ColumnRight = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    image {
        width: height;
        height: 100%;
        object-fit: cover; 
    }
`;

const InfoSection = ({
    heading, 
    paragraphOne, 
    paragraphTwo, 
    reverse, 
    image
}) => {

    return (
      <Section>
        <Container>
          <ColumnLeft>
            <h1>{heading}</h1>
            <p className="descriptionText">
              Hej! Det är vi som är Medieteknikprogrammets tjejförening Mette!
              Vi är en förening för alla som identifierar sig som tjej eller
              icke-binär och studerar Medieteknik på Linköpings Universitet,
              campus Norrköping. Vi jobbar för att främja gemenskapen mellan
              alla tjejer och icke-binära på MT-programmet. Vi anordnar olika
              roliga aktiviteter, vissa är enbart för tjejer och icke-binära
              medan andra aktiviteter är till för alla som pluggar MT.
            </p>
            <p className="descriptionText">
              Du vill inte missa det skojiga vi ska ha den här kommande året så
              följ oss på
              <a
                className="link3"
                href="https://www.facebook.com/groups/36669645279"
              >
                {" "}
                Facebook{" "}
              </a>
              och
              <a
                className="link3"
                 href="https://www.instagram.com/mettemedbandana/"
              >
                {" "}
                Instagram{" "}
              </a>
              för att hålla dig uppdaterad om våra kommande aktiviteter och
              event så ses vi där!
            </p>
          </ColumnLeft>

          <ColumnRight reverse={reverse}>
            <img src={image} height={400} width={400} alt="home" />
          </ColumnRight>
        </Container>
      </Section>
    );
}

export default InfoSection;

