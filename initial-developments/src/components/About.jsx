import AboutBackground from '../assets/images/about-background.webp';
import AboutArcade from '../assets/images/about-me-background.png';
import AboutBanner from '../assets/images/about-me-headline.webp';
import Location from '../assets/images/location-header-logo.png';
import Contact from '../assets/images/contact-header-logo.png';
import './About.css';

export default function About() {
    return (
    <section className="about-section text-white mb-0" id="about" style={{backgroundImage: `url(${AboutBackground})`}}>
    <div className="details-box">
      <div className="my-details">
        <img src={Contact} alt="" width="120px" height="20px" />
        <div className="details-text">
          {/* <a className="btn btn-outline-light btn-social mx-1" href="mailto:alinehan89@outlook.com" aria-label="contact via email">
            <i className="fa-regular fa-envelope" style={{color:"white"}}></i>
            </a>
          <a className="btn btn-outline-light btn-social mx-1" href="tel:07713465317" aria-label="Contant via phone">
            <i className="fa-solid fa-phone" style={{color: "white"}}></i>
            </a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/a-linehan" target="_blank" aria-label="Linked in profile">
          <i className="fab fa-fw fa-linkedin-in" style={{color:"white">}}</i>
          </a> */}
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