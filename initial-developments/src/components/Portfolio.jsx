import { PORTFOLIO_CARDS } from '../data';
import PortfolioCards from './PortfolioCards';
import PortfolioBackground from './assets/images/portfolio-background.webp';
import ShopifyLogo from './assets/images/shopify-full-logo.png';
import './PortfolioCards.css';

export default function Portfolio() {
    return (
        <>
    <section className="page-section portfolio" id="portfolio" style={{backgroundImage: `url(${PortfolioBackground})`}}>
        <div className="container">
          <div className="playstation-container">
              <div className="left-panel">
                  <a className="back-button" href="index.html">Back</a>
              </div>
              <div className="middle-panel">
                  <div className="circle-lid">
                      <a className="portfolio-heading" href="#"><img src="https://see.fontimg.com/api/rf5/8ynA/NzYwNmI0ZWYyYTc3NDQzZmE0NzU1M2I2NzgyZjc5NWEub3Rm/UG9ydGZvbGlv/emotion-engine.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65" alt="Playstation fonts"/></a>
                  </div>
              </div>
              <div className="right-panel"></div>
          </div>
          <div className="row justify-content-center">
              <div className="col-12 mb-5">
                  <div className="portfolio-item mx-auto shopify-portfolio-item">
                      <a href="shopify.html" >
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                          <div className="portfolio-item-caption-content text-center text-white"></div>
                      </div>
                      <img className="shopify-portfolio-img" src={ShopifyLogo} alt="Shopify portfolio image"/>
                      </a>
                  </div>
              </div>
          </div>
          <div className="row justify-content-center">
            <PortfolioCards {...PORTFOLIO_CARDS[0]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[1]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[2]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[3]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[4]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[5]}/>
            <PortfolioCards {...PORTFOLIO_CARDS[6]}/>
          </div>
        </div>
    </section>
        </>
    )
}