import './PortfolioCards.css';

export default function PortfolioCards({image, alt}) {
    return (
      <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"></div>
            </div>
            <img className="main-portfolio-img" src={image} alt={alt} />
        </div>
      </div>
    );
  }