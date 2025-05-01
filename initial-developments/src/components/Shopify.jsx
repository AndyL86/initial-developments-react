import ShopifyCards from './ShopifyCards';


export default function Shopify() {
    return (
    <>
    <header className="shopify-header">
        <div className="shopify-header-container">
            <img className="shopify-header-image" src="/assets/images/shopify-bag.webp" alt="shopify header logo" />
            <p className="shopify-header-text">A selection of examples of my work carried out as a Shopify Front End Developer on a large scale retail Shopify Platform, utilising Shopify's Liquid Templating, HTML, a standardised CSS className system, Vanilla Javascript and JQuery. 
            All coding work was version controlled using Sourcetree and Bitbucket and peer reviewed by a Senior Dev and an external agency.</p>
        </div>
    </header>
        <div className="back-container">
        <i className="fas fa-arrow-circle-left" style="color: #99c14f;"><a className="shopify-back" href="/portfolio.html">back to portfolio</a></i>
        </div>
    <section className="shopify-section">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <ShopifyCards />
        </div>
    </section>
    </>
    )
} 
