import AboutBackground from '../assets/images/about-background.webp';
import AboutArcade from '../assets/images/about-me-background.png';
import AboutBanner from '../assets/images/about-me-headline.webp';
import Location from '../assets/images/location-header-logo.png';
import Contact from '../assets/images/contact-header-logo.png';
import './About.css';

// const aboutMe = {
//   paraOne: "Hello! My name's Andy and I'm a Full Stack Developer. I started my journey as a Web Developer in 2023 with a specialism in Ecommerce applications. Click to continue.. ",
//   paraTwo: "In this time, I have built up my skillset and contributed to a real world, large scale retail business as a Shopify Front End Developer. Click to continue..",
//   paraThree: "I am keen to grow my experience and knowledge as a Full Stack Developer and further my career."
// };

// let count = 0;
// const skyline = Object.entries(aboutMe);
// document.getElementById("aboutText").innerHTML = skyline[count][1];
// document.getElementById("aboutText").addEventListener("click", function(){
//   count++;
//   if (count >= skyline.length) {
//     count = 0;
//   }
//   this.innerHTML = skyline[count][1];
// }); 

export default function About() {
    return (
    <section className="about-section text-white mb-0" id="about" style={{backgroundImage: `url(${AboutBackground})`}}>
    <div className="details-box">
      <div className="my-details">
        <img src={Contact} alt="" width="120px" height="20px" />
        <div className="details-text">
          <a className="btn btn-outline-light btn-social mx-1" href="mailto:alinehan89@outlook.com" aria-label="contact via email">
            <i className="fa-regular fa-envelope" style={{color:"white"}}></i>
            </a>
          <a className="btn btn-outline-light btn-social mx-1" href="tel:07713465317" aria-label="Contant via phone">
            <i className="fa-solid fa-phone" style={{color: "white"}}></i>
            </a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/a-linehan" target="_blank" aria-label="Linked in profile">
          <i className="fab fa-fw fa-linkedin-in" style={{color:"white"}}></i>
          </a>
        </div>
      </div>
      <div className="my-details">
        <img src={Location} alt="" width="120px" height="20px" />
        <div className="details-text">
          <p className="text-white fw-bold mb-0">
              Rothwell, Leeds
              <br />
              England
          </p>
        </div>
      </div>
    </div>
    <div className="about-details-section" style={{backgroundImage: `url(${AboutArcade})`}}>
        <img className="about-flash" src={AboutBanner} alt="about me headline" />
        <p className="about-text" id="aboutText"></p>
    </div>
  </section>
    )
}