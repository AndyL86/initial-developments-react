import Navlogo from '../assets/images/initial-developments.webp';
import '../components/Navbar.css';

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-black text-uppercase fs-2">
            <li className="nav-item">
              <a className="nav-link" href="#about" aria-current="page">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="portfolio.html">Portfolio</a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="#">
          <img src={Navlogo} alt="initial developments logo" width="160" height="74" />
        </a>
      </div>
    </nav>
   )
}