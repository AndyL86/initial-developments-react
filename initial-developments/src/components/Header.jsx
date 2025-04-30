import Background from '../assets/images/anime-trueno.webp';
import './Header.css';

export default function Header() {
    return (
    <header className="portfolio-header" style={{backgroundImage: `url(${Background})`}}>
        <div className="container d-flex flex-column">
            <h1 className="masthead-heading text-uppercase mb-0">Andrew Linehan</h1>
            <p className="masthead-subheading font-weight-light mb-0">Web Developer</p>
            <p className="masthead-title font-weight-light mb-0">Front End | Full Stack | Shopify</p>
        </div>
      </header>
    );
  }