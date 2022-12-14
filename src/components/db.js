/*----- Import images for profile -----*/
import imgOrdforande from "../images/profil-1.JPG"; // Ordförande
import imgSekreterare from "../images/profil-2.JPG"; // Sekreterare
import imgKassor from "../images/profil-3.JPG"; // Kassör
import imgSpons from "../images/profil-4.JPG"; // Spons&Komm
import imgTryck from "../images/profil-5.JPG"; // Tryck&PR
import imgWebb from "../images/profil-6.JPG"; // Webb
import imgEvent from "../images/profil-7.JPG"; // Event
// Maskot
//import Bild_kommer from '../images/met-7.JPG';
import imgMaskot from "../images/mettilda.jpg";

/*----- Imports for image feed -----*/
import img1 from "../images/sökMette.jpg";
import img2 from "../images/imageFeed_bilder/Tjejfika.png";
import img4 from "../images/styrelsen.jpg";
import img5 from "../images/imageFeed_bilder/Ovveinvigning.jpg";
import img6 from "../images/imageFeed_bilder/rosaVeckan1.png";
import img7 from "../images/gaia_event.jpg";
import img8 from "../images/inv1.JPG";
import img9 from "../images/imageFeed_bilder/Spons.png";
import img10 from "../images/imageFeed_bilder/metteMärke.png";
import img11 from "../images/imageFeed_bilder/Damsittning.png";

/*----- Profile images and text (profil.js) -----*/
export const profile = [
  {
    post: "Ordförande",
    img: imgOrdforande,
    name: "Salma Gabot",
    class: "MT3",
    city: "**",
    text: "**",
  },
  {
    post: "Sekreterare",
    img: imgSekreterare,
    name: "Alma Linder",
    class: "MT2",
    city: "**",
    text: "**",
  },
  {
    post: "Kassör",
    img: imgKassor,
    name: "Cornelia Holm",
    class: "MT2",
    city: "**",
    text: "**",
  },
  {
    post: "Spons & kommunikation",
    img: imgSpons,
    name: "Tove Tångring",
    class: "MT3",
    city: "**",
    text: "**",
  },
  {
    post: "Tryck & PR",
    img: imgTryck,
    name: "Jenny Claesson",
    class: "MT2",
    city: "**",
    text: "**",
  },
  {
    post: "Webbansvarig",
    img: imgWebb,
    name: "Emma Bjelkås",
    class: "MT3",
    city: "Linköping",
    text: "**",
  },
  {
    post: "Eventansvarig",
    img: imgEvent,
    name: "Rebecka Sahlin",
    class: "MT3",
    city: "**",
    text: "**",
  },
  {
    post: "Mettes maskot",
    img: imgMaskot, //replace with actual photo of maskot :)
    name: "Mettilda",
    class: "Classified",
    city: "Classified",
    text: "Jag heter Mettilda och är Mettes maskot. Med mina glajjor är jag den coolaste i Mette. Alltid.",
  },
];

/*----- Contact info, row 1 (Kontakt.js) -----*/
export const contact1 = [
  {
    post: "Ordförande",
    text: "Har du generella frågor om vad som helst som angår föreningen, kontakta vår ordförande Salma Gabot på: ",
    email: "mailto:Mettestyrelsen@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Mettestyrelsen@medieteknik.nu",
  },
  {
    post: "Kassör",
    text: "Undrar du över något som angår Mettes ekonomi, kan du kontakta vår kassör Jessie Chow på: ",
    email: "mailto:Mettekassor@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Mettekassor@medieteknik.nu",
  },
  {
    post: "Event",
    text: "Har du frågor angående våra kommande event och aktiviteter? Kontakta Tilda Hylander på: ",
    email: "mailto:Metteevent@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Metteevent@medieteknik.nu",
  },
];

/*----- Contact info, row 2 (Kontakt.js) -----*/
export const contact2 = [
  {
    post: "Företagsansvarig",
    text: "Vill ditt företag diskutera om samarbeten eller sponsra Mette? Kontakta Lovisa Svensson: ",
    email: "mailto:Samarbete.mette@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Samarbete.mette@medieteknik.nu",
  },
  {
    post: "Tryck och PR",
    text: "Frågor angående Mettes allmänna marknadsföring, Kontakta Johanna Folde på: ",
    email: "mailto:Mettepr@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Mettepr@medieteknik.nu",
  },
  {
    post: "Webbansvarig",
    text: "Hittar du något konstigt eller har du frågor om hemsidans innehåll, kontakta Cindy Khuong på: ",
    email: "mailto:Mettewebb@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Mettewebb@medieteknik.nu",
  },
];

/*----- Contact info, row 3 (Kontakt.js) -----*/
export const contact3 = [
  {
    post: "Sekreterare",
    text: "Har du frågor till sekreteraren, kontakta Alma Linder på: ",
    email: "mailto:Sekreterare.mette@medieteknik.nu",
    icon: "fas fa-paper-plane",
    linkText: "Sekreterare.mette@medieteknik.nu",
  },
];

/*----- Image feed (ImageFeed.js) -----*/
export const imgFeed = [
  /* 
       Grid layout
        1 2 3 
        4 5 6 
        7 8 9 
    */

  {
    /* square 1 */ img: img2,
    title: "TJEJFIKA",
    link: "/Tjejfika",
  },
  {
    /* square 2 */ img: img5,
    title: "OVVEINVIGNINGEN",
    link: "/Ovveinvigning",
  },
  {
    /* square 3 */ img: img6,
    title: "ROSA VECKAN",
    link: "/RosaVecka",
  },
  {
    /* square 4 */ img: img7,
    title: "TJEJKVÄLL MED GAIA",
    link: "/GaiaEvent",
  },
  {
    /* square 5 */ img: img11 /* CHANGE LATER */,
    title: "DAMSITTNINGEN",
    link: "/Damsittningen",
  },
  {
    /* square 6 */ img: img9,
    title: "SPONSORER",
    link: "/Spons",
  },
  {
    /* square 7 */ img: img10 /* CHANGE LATER */,
    title: "METTES MÄRKEN",
    link: "/Märken",
  },
  //--- square 8: SÖK METTE is not here because their thing has two rows of text :( ---
  //--- square 9: MT-Styrelsen is not here because their thing has "a href" :( ---
];
