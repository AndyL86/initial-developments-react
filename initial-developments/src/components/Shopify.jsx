import { SHOPIFY_CARDS } from '../data-shopify';
import ShopifyBag from '../assets/images/shopify-bag.webp';
import ShopifyCards from './ShopifyCards';
import './Shopify.css';


export default function Shopify() {
    return (
    <>
    <header className="shopify-header">
        <div className="shopify-header-container">
            <img className="shopify-header-image" src={ShopifyBag} alt="shopify header logo" />
            <p className="shopify-header-text">A selection of examples of my work carried out as a Shopify Front End Developer on a large scale retail Shopify Platform, utilising Shopify's Liquid Templating, HTML, a standardised CSS className system, Vanilla Javascript and JQuery. 
            All coding work was version controlled using Sourcetree and Bitbucket and peer reviewed by a Senior Dev and an external agency.</p>
        </div>
    </header>
        <div className="back-container">
        <i className="fas fa-arrow-circle-left" style={{color: 'lightgreen'}}></i><a className="shopify-back" href="/portfolio.html">back to portfolio</a>
        </div>
    <section className="shopify-section">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <ShopifyCards {...SHOPIFY_CARDS[0]}/>
            <ShopifyCards {...SHOPIFY_CARDS[1]}/>
            <ShopifyCards {...SHOPIFY_CARDS[2]}/>
            <ShopifyCards {...SHOPIFY_CARDS[3]}/>
            <ShopifyCards {...SHOPIFY_CARDS[4]}/>
            <ShopifyCards {...SHOPIFY_CARDS[5]}/>
            <ShopifyCards {...SHOPIFY_CARDS[6]}/>
            <ShopifyCards {...SHOPIFY_CARDS[7]}/>
            <ShopifyCards {...SHOPIFY_CARDS[8]}/>
            <ShopifyCards {...SHOPIFY_CARDS[9]}/>
            <ShopifyCards {...SHOPIFY_CARDS[10]}/>
            <ShopifyCards {...SHOPIFY_CARDS[11]}/>
        </div>
    </section>
    </>
    )
} 
